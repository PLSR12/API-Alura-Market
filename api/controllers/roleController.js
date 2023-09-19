const RoleService = require('../services/roleService')
const roleService = new RoleService()

class RoleController {
  static async cadastrar(req, res) {
    const { nome, descricao } = req.body

    try {
      const role = await roleService.cadastrar({ nome, descricao })

      res.status(201).send(role)
    } catch (err) {
      res.status(404).send({ message: err.message })
    }
  }

  static async buscarTodosRoles(req, res) {
    const roles = await roleService.buscarTodosRoles()

    res.status(200).json(roles)
  }

  static async buscarRolePorId(req, res) {
    try {
      const { id } = req.params
      const roles = await roleService.buscarRolePorId(id)

      res.status(200).json(roles)
    } catch (error) {
      console.log('Message error: ', error.message)
      res.status(400).send({ message: error.message })
    }
  }

  static async deletarRolePorId(req, res) {
    const { id } = req.params

    try {
      await roleService.deletarRolePorId(id)

      res.status(200).send({ message: 'roles deletada com sucesso!' })
    } catch (error) {
      console.log('Message error: ', error.message)
      res.status(400).send({ message: error.message })
    }
  }

  static async editarRole(req, res) {
    const { id } = req.params
    const { nome, descricao, preco } = req.body

    try {
      const roles = await roleService.editarRole({
        id,
        nome,
        descricao,
        preco,
      })

      res.status(200).json(roles)
    } catch (error) {
      console.log('Message error: ', error.message)
      res.status(400).send({ message: error.message })
    }
  }
}

module.exports = RoleController
