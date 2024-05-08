import Empresa from '../models/Empresa.js'
const controller = {}  

controller.create = async function(req, res) {
  try {
    await Empresa.create(req.body)
    res.status(201).end()
  }
  catch(error) {
    console.error(error)
    res.status(500).end()
  }
}

controller.retrieveAll = async function(req, res) {
  try {
    const result = await Empresa.find().sort({ razao_social: 'asc' })
    res.send(result)
  }
  catch(error) {
    console.error(error)
    res.status(500).end()
  }
}

controller.retrieveOne = async function(req, res) {
  try {
    const result = await Empresa.findById(req.params.id)
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
    const result = await Empresa.findByIdAndUpdate(req.params.id, req.body)
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
    const result = await Empresa.findByIdAndDelete(req.params.id)
    if(result) res.status(204).end()
    else res.status(404).end()
  }
  catch(error) {
    console.error(error)
    res.status(500).end()
  }
}
export default controller