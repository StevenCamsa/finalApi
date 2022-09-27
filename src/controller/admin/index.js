const CON_getAdmin = require ('./getAdmin');
const CON_loginAdmin = require('./login');
const CON_createAdmin = require('./createAdmin');
const CON_updateAdmin = require('./updateAdmin');
const CON_getAdminbyID = require ('./getAdminbyID');



const {
    getAdmin,
    loginAdmin,
    createAdmin,
    updateAdmin,
    getAdminbyID
} = require('../../use-case/admin/index');

const C_getAdmin = CON_getAdmin({getAdmin});
const C_loginAdmin = CON_loginAdmin({loginAdmin});
const C_createAdmin = CON_createAdmin({createAdmin});
const C_updateAdmin = CON_updateAdmin({updateAdmin});
const C_getAdminbyID = CON_getAdminbyID({getAdminbyID});


const C_admin = Object.freeze({
    C_getAdmin,
    C_loginAdmin,
    C_createAdmin,
    C_updateAdmin,
    C_getAdminbyID
   
});

module.exports = C_admin;
module.exports = {
    C_getAdmin,
    C_loginAdmin,
    C_createAdmin,
    C_updateAdmin,
    C_getAdminbyID
};