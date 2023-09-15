const { verify, decode } = require('jsonwebtoken')
const JsonSecret = require('../config/JsonSecret')

module.exports = async (req, res, next) => {
  const token = req.headers.authorization

  if (!token) {
    return res.status(401).send({
      message: 'Token não informado',
    })
  }

  const [, accessToken] = token.split(' ')

  try {
    verify(accessToken, JsonSecret.secret)
    const { id, email } = await decode(accessToken)

    req.usuarioId = id
    req.usuarioEmail = email

    return next()
  } catch {
    res.status(401).send({
      message: 'Usuário não autorizado',
    })
  }
}
