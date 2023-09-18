const { Router } = require('express')
const PermissaoController = require('../controllers/permissaoController')

const router = Router()

router
  .post('/permissao', PermissaoController.cadastrar)
  .get('/permissao', PermissaoController.buscarTodosPermissoes)
  .get('/permissao/:id', PermissaoController.buscarPermissaoPorId)
  .delete('/permissao/:id', PermissaoController.deletarPermissaoPorId)
  .put('/permissao/:id', PermissaoController.editarPermissao)

module.exports = router
