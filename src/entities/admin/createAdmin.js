const makeAdminEntity = ({ data }) => {
    // return function make({fullname, contact, address} = {}) {
    console.log(data);
    const { name, username, password,  status  } = data;


        if(!name){
        throw new Error("name is required.")
           }
        if(!username){
            throw new Error("Username is required.")
         }
         if(!password){
             throw new Error("Password is required.")
         }
         if(password < 6){
             throw new Error("Password must be at least 6 characters.")
         }
        if(!username || !password){
            throw new Error("Username and Password are required.")
        }
        if(!name || !username || !password){
            throw new Error("Name, Username, and Password are required.")
        }
   
        

         return Object.freeze({
             getName: () => name,
             getUsername: () => username,
             getPassword: () => password

         });
    };

module.exports = makeAdminEntity;