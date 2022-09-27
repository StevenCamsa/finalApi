const adminDb = require('../../data-access/admin/index');

const {
    makeAdminEntity,
    loginAdminEntity,
    updateAdminEntity
} = require('../../entities/admin/index');

const generateToken = require('../../middleware/Token');

const UC_getAdmin = require('./getAdmin');
const UC_getsingleAdmin = require('../admin/getAdminByID');
const UC_createAdmin = require('../admin/createAdmin');
const UC_updateAdmin = require('../admin/updateAdmin');
const UC_loginAdmin = require('../admin/login');


const getAdmin = UC_getAdmin({adminDb});
const getAdminbyID = UC_getsingleAdmin({adminDb});
const loginAdmin = UC_loginAdmin({adminDb, loginAdminEntity, generateToken});
const createAdmin = UC_createAdmin({adminDb, makeAdminEntity});
const updateAdmin = UC_updateAdmin({adminDb, updateAdminEntity});




const accountService = Object.freeze({
    getAdmin,
    loginAdmin,
    createAdmin,
    updateAdmin,
    getAdminbyID,


})

module.exports = accountService;
module.exports = {
    getAdmin,
    loginAdmin,
    createAdmin,
    updateAdmin,
    getAdminbyID,
}

