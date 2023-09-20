const { Router } = require('express')
const ProdutoController = require('../controllers/produtoController')
const roles = require('../middleware/roles')
const permissoes = require('../middleware/permissoes')

const router = Router()

router
  .post('/produto', roles(['Gerente']), ProdutoController.cadastrarProduto)
  .get(
    '/produto',
    roles(['Gerente', 'Vendedor']),
    ProdutoController.buscarTodosProdutos
  )
  .get(
    '/produto/:id',

    roles(['Gerente', 'Vendedor']),
    ProdutoController.buscarProdutoPorId
  )
  .delete(
    '/produto/:id',
    roles(['Gerente']),
    ProdutoController.deletarProdutoPorId
  )
  .put('/produto/:id', roles(['Gerente']), ProdutoController.editarProduto)

module.exports = router
