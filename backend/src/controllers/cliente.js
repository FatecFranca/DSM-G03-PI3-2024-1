import Cliente from '../models/Cliente.js'
import jwt from 'jsonwebtoken';
const controller = {} 


controller.create = async function(req, res) {
  try {
    await Cliente.create(req.body)
    res.status(201).end()
  }
  catch(error) {
    console.error(error)
    res.status(500).end()
  }
}

controller.retrieveAll = async function(req, res) {
  try {
    const result = await Cliente.find().sort({ nome: 'asc' })
    res.send(result)
  }
  catch(error) {
    console.error(error)
    res.status(500).end()
  }
}

controller.retrieveOne = async function(req, res) {
  try {
    const result = await Cliente.findById(req.params.id)
    if(result) res.send(result)
    else res.status(404).end()  
  }
  catch(error) {
    console.error(error)
    res.status(500).end()
  }
}

controller.update = async function(req, res) {
  try {
    const result = await Cliente.findByIdAndUpdate(req.params.id, req.body)
    if(result) res.status(204).end()
    else res.status(404).end()
  }
  catch(error) {
    console.error(error)
    res.status(500).end()
  }
}

controller.delete = async function(req, res) {
  try {
    const result = await Cliente.findByIdAndDelete(req.params.id)
    if(result) res.status(204).end()
    else res.status(404).end()
  }
  catch(error) {
    console.error(error)
    res.status(500).end()
  }
}





controller.login = async function(req, res) {
  const { loginUsu, senhaUsu } = req.body;
  try {
    const cliente = await Cliente.findOne({ loginUsu, senhaUsu });
    if (cliente) {
      const token = jwt.sign(
        { id: cliente._id, loginUsu: cliente.loginUsu, nome: cliente.nomeCompleto },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
      );
      res.status(200).json({ message: 'Login bem-sucedido', token });
    } else {
      res.status(401).json({ message: 'Credenciais inválidas' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
};




export default controller