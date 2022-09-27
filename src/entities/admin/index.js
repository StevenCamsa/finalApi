const makeAdminEntity = require('./createAdmin');
const loginAdminEntity = require('./login');
const updateAdminEntity = require('./updateAdmin');

const accountEntity = Object.freeze ({
    makeAdminEntity,
    loginAdminEntity,
    updateAdminEntity
    
})

module.exports = accountEntity;
module.exports = {
    makeAdminEntity,
    loginAdminEntity,
    updateAdminEntity
}