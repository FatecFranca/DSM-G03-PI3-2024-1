import Servico from '../models/Servico.js'

const controller = {}   // Objeto vazio

controller.create = async function(req, res) {
  try {
    await Servico.create(req.body)

    // Envia uma resposta de sucesso ao front-end
    // HTTP 201: Created
    res.status(201).end()
  }
  catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).end()
  }
}

controller.retrieveAll = async function(req, res) {
  try {

    const query = Servico.find().sort({ descricao: 'asc' })

    // Verifica se o parâmetro 'pop_empresa' foi passado na URL
    // e, em caso positivo, acrescenta o populate() à consulta
    if('pop_empresa' in req.query) query.populate('empresa')

    const result = await query.exec()

    // HTTP 200: OK (implícito)
    res.send(result)
  }
  catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).end()
  }
}

controller.retrieveOne = async function(req, res) {
  try {

    const query = Servico.findById(req.params.id)

    // Verifica se o parâmetro 'pop_empresa' foi passado na URL
    // e, em caso positivo, acrescenta o populate() à consulta
    if('pop_empresa' in req.query) query.populate('empresa')

    const result = await query.exec()

    // Documento encontrado ~> HTTP 200: OK (implícito)
    if(result) res.send(result)
    // Documento não encontrado ~> HTTP 404: Not Found
    else res.status(404).end()  
  }
  catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).end()
  }
}

controller.update = async function(req, res) {
  try {
    const result = await Servico.findByIdAndUpdate(req.params.id, req.body)
    // Documento encontrado e atualizado ~> HTTP 204: No Content
    if(result) res.status(204).end()
    // Documento não encontrado (e não atualizado) ~> HTTP 404: Not Found
    else res.status(404).end()
  }
  catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).end()
  }
}

controller.delete = async function(req, res) {
  try {
    const result = await Servico.findByIdAndDelete(req.params.id)
    // Documento encontrado e excluído ~> HTTP 204: No Content
    if(result) res.status(204).end()
    // Documento não encontrado (e não excluído) ~> HTTP 404: Not Found
    else res.status(404).end()
  }
  catch(error) {
    console.error(error)
    // HTTP 500: Internal Server Error
    res.status(500).end()
  }
}

export default controller