const usersGroupsServices = require('./usersGroups.services')

async function readUsersGroups(req, res) {
  try {
    const usersGroups = await usersGroupsServices.readUsersGroups(req.userId)

    res.send(usersGroups)
  } catch (error) {
    return res.status(400).send(error)
  }
}

module.exports = {
  readUsersGroups,
}
