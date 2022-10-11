const { 
  makeAlbumEntity, 
  updateAlbumEntity
} = require("../entities/album/index");

describe("Test Add Album", () => {

    it("The data must not add without album_name", () => {
      let data = {
        album_name: null,
        artist_id: "2"

      };
      const album = () => makeAlbumEntity({data})
      expect(album).toThrow("Album Name is required.");
    })

    it("The data must not add without artist_id", () => {
        let data = {
          album_name: "test",
          artist_id: null

        };
        const album = () => makeAlbumEntity({data})
        expect(album).toThrow("Artist ID is required.");
      })

    it("The data must not add without artist_id", () => {
        let data = {
          album_name: null,
          artist_id: null

        };
        const album = () => makeAlbumEntity({data})
        expect(album).toThrow("Album Name and Artist ID are required.");
      })

 
});

describe("Test Update Album", () => {

  it("The data must not update without album_name", () => {
    let data = {
      album_name: null,
      artist_id: "2"

    };
    const album = () => updateAlbumEntity({data})
    expect(album).toThrow("Album Name is required.");
  })

  it("The data must not update without artist_id", () => {
      let data = {
        album_name: "test",
        artist_id: null

      };
      const album = () => updateAlbumEntity({data})
      expect(album).toThrow("Artist ID is required.");
    })

});