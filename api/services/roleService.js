const database = require('../models')
const uuid = require('uuid')

class RoleService {
  async cadastrar(dto) {
    const role = await database.roles.findOne({ where: { nome: dto.nome } })

    if (role) {
      throw new Error('Role já cadastrada')
    }

    try {
      const newRole = await database.roles.create({
        id: uuid.v4(),
        nome: dto.nome,
        descricao: dto.descricao,
      })

      return newRole
    } catch (err) {
      throw new Error('Error ao cadastrar')
    }
  }
}

module.exports = RoleService
