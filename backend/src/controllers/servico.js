import Servico from '../models/Servico.js';

const controller = {};

controller.create = async function(req, res) {
  try {
    await Servico.create(req.body);
    res.status(201).end();
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

controller.retrieveAll = async function(req, res) {
  try {
    const result = await Servico.find().sort({ descricao: 'asc' });
    res.send(result);
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

controller.retrieveOne = async function(req, res) {
  try {
    const result = await Servico.findById(req.params.id);
    if (result) res.send(result);
    else res.status(404).end();
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

controller.update = async function(req, res) {
  try {
    const result = await Servico.findByIdAndUpdate(req.params.id, req.body);
    if (result) res.status(204).end();
    else res.status(404).end();
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

controller.delete = async function(req, res) {
  try {
    const result = await Servico.findByIdAndDelete(req.params.id);
    if (result) res.status(204).end();
    else res.status(404).end();
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
};

export default controller;
