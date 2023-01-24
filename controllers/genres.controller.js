const Genres = require("../Models/Genre.modul");

module.exports.genreController = {
  addGenre: async (req, res) => {
    try {
      const data = await Genres.create({
        name: req.body.name,
      });
      res.json(data);
    } catch (error) {
      res.json(error);
    }
    // - добавление жанра
  },
  deleteGenreById: async (req, res) => {
    try {
      const data = await Genres.findByIdAndDelete(req.params.id);
      res.json(data);
    } catch (error) {
      res.json(error);
    }
    // - удаление жанра
  },
  getCenre: async (req, res) => {
    try {
      const data = await Genres.find();
      res.json(data);
    } catch (error) {
      res.json(error);
    }
    // - вывод всех жанров
  },
  editGenre: async (req, res) => {
    try {
      const data = await Genres.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
      });
      res.json(data);
    } catch (error) {
      res.json(error);
    }
    // - добавление жанра
  },
};
