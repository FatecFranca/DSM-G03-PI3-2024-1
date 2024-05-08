import mongoose from 'mongoose'
const esquema = mongoose.Schema({
 
  razaoSocial: { type: String, required: true },
  nomeFantasia: { type: String, required: true },
  cnpj: { type: String, required: true, index: { unique: true} },
  telefone: { type: String, required: true },
  email: { type: String, required: true },
  segmento: { type: String, required: true },
  logradouro: { type: String, required: true },
  bairro: { type: String, required: true },
  numEmpresa: { type: String, required: true },
  municipio: { type: String, required: true },
  complemento: { type: String, required: false },
  uf: { type: String, required: true },
  loginEmpresa: {type: String, required: true},
  senhaEmpresa: {type: String, required: true},
})




export default mongoose.model('Empresa', esquema, 'empresas')