import Atendimento from '../models/Atendimento.js'
const controller = {} 

controller.create = async function(req, res) {
  try {
    await Atendimento.create(req.body)
    res.status(201).end()
  }
  catch(error) {
    console.error(error)
    res.status(500).end()
  }
}

controller.retrieveAll = async function(req, res) {
  try {
    const result = await Atendimento.find().sort({ nome: 'asc' })
    res.send(result)
  }
  catch(error) {
    console.error(error)
    res.status(500).end()
  }
}

controller.retrieveOne = async function(req, res) {
  try {
    const result = await Atendimento.findById(req.params.id)
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
    const result = await Atendimento.findByIdAndUpdate(req.params.id, req.body)
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
    const result = await Atendimento.findByIdAndDelete(req.params.id)
    if(result) res.status(204).end()
    else res.status(404).end()
  }
  catch(error) {
    console.error(error)
    res.status(500).end()
  }
}
export default controller