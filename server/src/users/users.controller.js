const usersServices = require('./users.services')

async function readUsersByAdminId(req, res) {
  try {
    const users = await usersServices.readUsersByAdminId(req.userId)

    res.send(users)
  } catch (error) {
    return res.status(400).send(error)
  }
}

async function createUserByAdmin(req, res) {
  try {
    const user = [
      req.userId,
      req.body.username,
      req.body.name,
      req.body.mail,
      req.body.password,
      req.body.active,
    ]

    const userId = await usersServices.createUserByAdmin(user)

    await usersServices.connectUserToReportGroups(userId, req.body.reportGroups)

    res.send({ message: 'Usuario creado exitosamente' })
  } catch (error) {
    return res.status(400).send(error.message)
  }
}

async function updateUser(req, res) {
  try {
    const user = [
      req.userId,
      req.body.username,
      req.body.name,
      req.body.mail,
      req.body.active,
      req.params.userId,
    ]

    await usersServices.updateUser(user)
    await usersServices.updateConnectionUserToReportGroup(
      req.params.userId,
      req.body.reportGroups
    )

    res.send({ message: 'Usuario actualizado exitosamente' })
  } catch (error) {
    return res.status(400).send(error.stack)
  }
}

module.exports = {
  readUsersByAdminId,
  createUserByAdmin,
  updateUser,
}
