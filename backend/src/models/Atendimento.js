import mongoose from 'mongoose'
const esquema = mongoose.Schema({
  
  numAtendimento: { type: Number, required: true },
  dataAtendimento: { type: Date, required: true },
  clienteCompra: {
    type: mongoose.ObjectId,
    ref: 'Cliente',  
    required: true
  },




 
  ServicoAtendimento: [{
    numAtendimento: { type: Number, required: true },
    servico: {
      type: mongoose.ObjectId,
      ref: 'Servico',
      required: true
    },
    adicional: { type: Number, required: true}
  }]
})




export default mongoose.model('Atendimento', esquema, 'atendimentos')