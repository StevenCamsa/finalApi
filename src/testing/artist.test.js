const { 
    makeArtistEntity, 
    updateArtistEntity
  } = require("../entities/artist/index");

  describe("Test Add Artist", () => {

    it("The data must not add without Artist_name", () => {
      let data = {
        artist_name: null

      };
      const artist = () => makeArtistEntity({data})
      expect(artist).toThrow("Artist Name is required.");
    })

});

describe("Test Update Album", () => {

    it("The data must not add without Artist_name", () => {
      let data = {
        artist_name: null

      };
      const artist = () => updateArtistEntity({data})
      expect(artist).toThrow("Artist Name is required.");
    })

});