const { 
    makeAdminEntity, 
    updateAdminEntity
  } = require("../entities/admin/index");

describe("Test for Add admin", () => {

    it("The data must not add without Name, Username, and Password", () => {
      let data = {
        name: null,
        username: null,
        password: null

      };
      const admin = () => makeAdminEntity({data})
      expect(admin).toThrow("Name, Username, and Password are required.");
    })

    it("The data must not add without Username, and Password", () => {
        let data = {
          name: "test",
          username: null,
          password: null
  
        };
        const admin = () => makeAdminEntity({data})
        expect(admin).toThrow("Username and Password are required.");
      })

    it("The data must not add without Name", () => {
        let data = {
          name: null,
          username: "admin",
          password: "admin"
  
        };
        const admin = () => makeAdminEntity({data})
        expect(admin).toThrow("Name is required.");
      })
    
    it("The data must not add without Username", () => {
        let data = {
          name: "test",
          username: null,
          password: "admin"
  
        };
        const admin = () => makeAdminEntity({data})
        expect(admin).toThrow("Username is required.");
      })

    it("The data must not add without Password", () => {
        let data = {
          name: "test",
          username: "admin",
          password: null
  
        };
        const admin = () => makeAdminEntity({data})
        expect(admin).toThrow("Password is required.");
      })
    


});


describe("Test for Update admin", () => {

  it("The data must not update without Name", () => {
      let data = {
        name: null,
        username: "admin",
        password: "admin"

      };
      const admin = () => updateAdminEntity({data})
      expect(admin).toThrow("Name is required.");
    })
  
  it("The data must not update without Username", () => {
      let data = {
        name: "test",
        username: null,
        password: "admin"

      };
      const admin = () => updateAdminEntity({data})
      expect(admin).toThrow("Username is required.");
    })

  it("The data must not update without Password", () => {
      let data = {
        name: "test",
        username: "admin",
        password: null

      };
      const admin = () => updateAdminEntity({data})
      expect(admin).toThrow("Password is required.");
    })
  


});