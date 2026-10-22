
const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());


const produtos = {
  1: 18,
  2: 35,
  3: 7,
};

app.post('/pedidos', (req, res) => {
  const { itens } = req.body ?? {};

  if (
    !Array.isArray(itens) ||
    itens.length === 0 ||
    !itens.every((id) =>
      Number.isInteger(id) &&
      Object.hasOwn(produtos, id)
    )
  ) {
    return res.status(400).json({
      erro: 'Lista de produtos inválida.',
    });
  }

  const total = itens.reduce(
    (soma, id) => soma + produtos[id],
    0
  );

  return res.status(201).json({
    mensagem: 'Pedido recebido com sucesso!',
    quantidade: itens.length,
    total,
  });
});

app.get('/', (req, res) => {
  res.json({
    mensagem: 'API RosaFood funcionando!',
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Servidor RosaFood iniciado na porta ${PORT}`);
});
