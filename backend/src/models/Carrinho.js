import mongoose from 'mongoose';

const carrinhoSchema = new mongoose.Schema({
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente', required: true },
  itens: [{
    servico: { type: mongoose.Schema.Types.ObjectId, ref: 'Servico', required: true },
    quantidade: { type: Number, required: true },
    precoUnitario: { type: Number, required: true }
  }]
});

export default mongoose.model('Carrinho', carrinhoSchema);


