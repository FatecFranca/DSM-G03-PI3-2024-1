import Carrinho from '../models/Carrinho.js';

const carrinhoController = {};

carrinhoController.adicionarItem = async function(req, res) {
  try {
    const { servico, quantidade, precoUnitario } = req.body;
    const usuarioId = req.user.id; 

    console.log('Dados recebidos:', { servico, quantidade, precoUnitario, usuarioId });

    let carrinho = await Carrinho.findOne({ usuario: usuarioId });

    if (!carrinho) {
      carrinho = new Carrinho({ usuario: usuarioId, itens: [] });
    }

    const itemExistente = carrinho.itens.find(item => item.servico.equals(servico));

    if (itemExistente) {
      itemExistente.quantidade += quantidade;
    } else {
      carrinho.itens.push({ servico, quantidade, precoUnitario });
    }

    await carrinho.save();
    res.status(201).json(carrinho);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erro ao adicionar item ao carrinho.' });
  }
};

export default carrinhoController;




