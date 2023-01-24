const Books = require("../models/Book.model");
const User = require("../models/User.model");

module.exports.booksController = {
  addBooks: async (req, res) => {
    try {
      const data = await Books.create({
        name: req.body.name,
        genre: req.body.genre,
        rent: req.body.rent,
      });
      res.json(data);
    } catch (err) {
      res.json(err);
    }
    // - добавление книги
  },
  deleteBooksByid: async (req, res) => {
    try {
      await Books.findByIdAndDelete(req.params.id);
      res.json("Книга удалена");
      // - удаление книги
    } catch (error) {
      res.json(error);
    }
  },

  editBooksById: async (req, res) => {
    try {
      const data = await Books.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        genre: req.body.genre,
        rent: req.body.rent,
      });
      res.json(data);
    } catch (error) {
      res.json(error);
    }
    // - изменениe книги
  },
  getBookss: async (req, res) => {
    try {
      const data = await Books.find();
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },

  selectBooksByUser: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        basket: [],
        isBlocked: true,
      });
      await Books.updateMany(
        { rentUserId: req.params.id },
        {
          rent: false,
          rentUserId: null,
        }
      );
      res.json("вы заблокированы");
    } catch (error) {
      res.json(error);
    }
  },
};
