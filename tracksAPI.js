let express = require("express");
let { tracks } = require("./models/track.model");
let { tracksDB } = require("./lib/index");
let { trackData } = require("./dataset/trackData");
const { where } = require("sequelize");
const route = express.Router();
route.use(express.json());

route.get("/seed", async (req, res) => {
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

async function updateTrack(id, trackData) {
  let data = await tracks.findOne({ where: { id } });
  if (!data) {
    return {};
  }
  data.set(trackData);
  let updatedTracks = await data.save();
  return { message: "Track Updated Successfully ! ", updatedTracks };
}
route.post("/update/:id", async (req, res) => {
  try {
    let trackData = req.body;
    let id = parseInt(req.params.id);
    let response = await updateTrack(id, trackData);
    if (!response.message) {
      return res.status(404).json({ message: "Track not found !" });
    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

async function deleteTrack(id) {
  let data = await tracks.destroy({ where: { id } });
  if (!data) {
    return {};
  }
  return { message: "Track deleted Successfully !" };
}

route.post("/delete", async (req, res) => {
  try {
    let id = parseInt(req.body.id);
    let response = await deleteTrack(id);
    if (!response.message) {
      return res.status(404).json({ message: "Track not found !" });
    }
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

module.exports = route;
