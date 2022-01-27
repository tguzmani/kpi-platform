const sectionsRepository = require('./sections.repository')

async function readSectionsByAdmin(adminId) {
  return await sectionsRepository.readSectionsByAdmin(adminId)
}

module.exports = {
  readSectionsByAdmin,
}
