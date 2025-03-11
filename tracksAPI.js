let express = require("express");
let { tracks } = require("./models/track.model");
let { tracksDB } = require("./lib/index");
let { trackData } = require("./dataset/trackData");
const route = express.Router();

route.get("/seed_tracks", async (req, res) => {
  try {
    await tracksDB.sync({ force: true });
    await tracks.bulkCreate(trackData);
    return res.status(200).json({ message: "database seeding successfully" });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

async function fetchAllTracks() {
  let response = await tracks.findAll();
  return { tracks: response };
}
route.get("/", async (req, res) => {
  try {
    let result = await fetchAllTracks();
    if (result.tracks.length === 0) {
      return res.status(404).json({ message: "tracks not found" });
    }
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

async function addNewTracks(newData) {
  let newTrack = await tracks.create(newData);
  return newData;
}

route.post("/new", async (req, res) => {
  try {
    let newTrack = req.body.newTrack;
    let response = await addNewTracks(newTrack);
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = route;
