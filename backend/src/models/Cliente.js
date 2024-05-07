import mongoose from 'mongoose'

const esquema = mongoose.Schema({
  nomeCompleto: { type: String, required: true },
  dataNascimento: { type: Date, required: false },
  cpf: { type: String, required: true, index: { unique: true} },
  sexo: { type: String, required: true },
  email: { type: String, required: true },
  telefone: { type: String, required: true },
  uf: { type: String, required: true },
  cep: { type: String, required: true },
  bairro: { type: String, required: true },
  rua: { type: String, required: true },
  numero: { type: String, required: true },
  complemento: {type: String, required: false},
  loginUsu: { type: String, required: true,},
  senhaUsu: { type: String, required: true,}
})
export default mongoose.model('Cliente', esquema, 'clientes')