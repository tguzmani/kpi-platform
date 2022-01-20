const workspacesServices = require('./workspaces.services')

async function readWorkspacesByAdmin(req, res) {
  try {
    const workspacesHeaders = await workspacesServices.readWorkspacesByAdmin(
      req.userId
    )

    res.send(workspacesHeaders)
  } catch (error) {
    return res.status(400).send(error)
  }
}

module.exports = {
  readWorkspacesByAdmin,
}
