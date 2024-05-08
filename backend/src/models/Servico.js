import mongoose from 'mongoose'
const esquema = mongoose.Schema({

  empresaServ: {
    type: mongoose.ObjectId,
    ref: 'Empresa',
    required: true
  },
  nome: { type: String, required: true },
  descricao: { type: String, required: true },
  valor: { type: Number, required: true },
  horarioAbertura: { type: Number, required: true },
  horarioFechamento: { type: Number, required: true },

})




export default mongoose.model('Servico', esquema, 'servicos')