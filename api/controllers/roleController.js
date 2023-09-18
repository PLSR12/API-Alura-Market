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
}

module.exports = RoleController