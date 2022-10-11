const { 
    makeTrackEntity, 
    updateTrackEntity
  } = require("../entities/track/index");
  
  describe("Test for Add track", () => {
    
      it("The data must not add without track_name, artist_id, and album ID", () => {
        let data = {
          track_name: null,
          artist_id: null,
          album_id: null
  
        };
        const track = () => makeTrackEntity({data})
        expect(track).toThrow("Track name, Artist ID, and album ID are required.");
      })
  
      it("The data must not add without track_name and artist_id", () => {
        let data = {
          track_name: null,
          artist_id: null,
          album_id: "2"
  
        };
        const track = () => makeTrackEntity({data})
        expect(track).toThrow("Track name and Artist ID are required.");
      })

      it("The data must not add without artist_id, and album ID", () => {
        let data = {
          track_name: "test",
          artist_id: null,
          album_id: null
  
        };
        const track = () => makeTrackEntity({data})
        expect(track).toThrow("Artist ID, and album ID are required.");
      })
      
      it("The data must not add without Track name, and album ID", () => {
        let data = {
          track_name: null,
          artist_id: "2",
          album_id: null
  
        };
        const track = () => makeTrackEntity({data})
        expect(track).toThrow("Track name and album ID are required.");
      })

      it("The data must not add without Track name", () => {
        let data = {
          track_name: null,
          artist_id: "2",
          album_id: "3"
  
        };
        const track = () => makeTrackEntity({data})
        expect(track).toThrow("Track name is required.");
      })

      it("The data must not add without Artist ID", () => {
        let data = {
          track_name: "test",
          artist_id: null,
          album_id: "3"
  
        };
        const track = () => makeTrackEntity({data})
        expect(track).toThrow("Artist is required.");
      })

      it("The data must not add without Album ID", () => {
        let data = {
          track_name: "test",
          artist_id: "2",
          album_id: null
  
        };
        const track = () => makeTrackEntity({data})
        expect(track).toThrow("Album  is required.");
      })

  });

  describe("Test for Update track", () => {
    
    it("The data must not update without Track name", () => {
      let data = {
        track_name: null,
        artist_id: "2",
        album_id: "3"

      };
      const track = () => updateTrackEntity({data})
      expect(track).toThrow("Track name is required.");
    })

    it("The data must not update without Artist ID", () => {
      let data = {
        track_name: "test",
        artist_id: null,
        album_id: "3"

      };
      const track = () => updateTrackEntity({data})
      expect(track).toThrow("Artist is required.");
    })

    it("The data must not update without Album ID", () => {
      let data = {
        track_name: "test",
        artist_id: "2",
        album_id: null

      };
      const track = () => updateTrackEntity({data})
      expect(track).toThrow("Album  is required.");
    })

});

