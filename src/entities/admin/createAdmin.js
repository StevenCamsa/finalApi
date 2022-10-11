const makeAdminEntity = ({data}) => {

    const {name,username,password,status} = data;

    if (!name && !username && !password) {
        throw new Error("Name, Username, and Password are required.")
    }
    if (!username && !password) {
        throw new Error("Username and Password are required.")
    }
    if (!name) {
        throw new Error("Name is required.")
    }
    if (!username) {
        throw new Error("Username is required.")
    }
    if (!password) {
        throw new Error("Password is required.")
    }




    return Object.freeze({
        getName: () => name,
        getUsername: () => username,
        getPassword: () => password

    });
};

module.exports = makeAdminEntity;