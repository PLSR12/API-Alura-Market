const database = require('../models')
const { compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')
const JsonSecret = require('../config/JsonSecret')

class AuthService {
  async login(dto) {
    const usuario = await database.usuarios.findOne({
      attributes: ['id', 'email', 'senha'],
      where: {
        email: dto.email,
      },
    })

    if (!usuario) {
      throw new Error('Usuario não cadastrado')
    }

    const senhaIguais = await compare(dto.senha, usuario.senha)

    if (!senhaIguais) {
      throw new Error('Email ou senha incorretos')
    }

    const accessToken = sign(
      { id: usuario.id, email: usuario.email },
      JsonSecret.secret,
      {
        expiresIn: 86400,
      }
    )

    return { accessToken }
  }
}

module.exports = AuthService
