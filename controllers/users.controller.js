const Books = require("../models/Book.model");
const User = require("../models/User.model");

module.exports.usersController = {
  getBooks: async (req, res) => {
    try {
      const data = await Books.find();
      res.json(data);
      // - вывод всех книги
    } catch (error) {
      res.json(error);
    }
  },
  getBooksByGenreId: async (req, res) => {
    try {
      const data = Books.find({ genre: req.params.genreId });
      res.json(data);
      // - вывод всех книги из определенного жанра
    } catch (error) {
      res.json(error);
    }
  },
  getBooksById: async (req, res) => {
    try {
      const data = await Books.findById(req.params.id);
      res.json(data);
      // - вывод определенной книги
    } catch (error) {
      res.json(error);
    }
  },
  addFeedbackbyid: async (req, res) => {
    try {
      const data = await Books.findByIdAndUpdate(req.params.id, {
        $push: {
          feedback: {
            user: req.body.user,
            text: req.body.text,
          },
        },
      });
      res.json(data);
    } catch (error) {
      res.json(error);
    }
  },
  addBasketUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      const book = await Books.findById(req.body.basket);
      if (
        user.isBlocked === false &&
        !user.basket.includes(req.body.basket) &&
        user.basket.length < 3 &&
        book.rent === false
      ) {
        await User.findByIdAndUpdate(req.params.id, {
          $push: { basket: req.body.basket },
        });
        await Books.findByIdAndUpdate(req.body.basket, {
          rent: true,
          rentUserId: req.params.id,
        });
      } else if (user.isBlocked === true) {
        return res.json("вы заблокированы");
      } else if (user.basket.includes(req.body.basket)) {
        return res.json("Эту книгу вы уже арендовали");
      } else if (user.basket.length === 3) {
        return res.json("нельзя арендовать больше 3-х книг одновременно");
      } else if (book.rent === true) {
        return res.json("эта книга уже арендована другим пользователем");
      }
      res.json("Вы арендовали эту книгу");
    } catch (error) {
      res.json(error);
    }
  },
  returnBooksbyId: async (req, res) => {
    try {
      await User.findByIdAndUpdate(req.params.id, {
        $pull: { basket: req.body.basket },
      });
      await Books.findByIdAndUpdate(req.body.basket, {
        rent: false,
        rentUserId: null,
      });
      res.json("Вы вернули книгу");
    } catch (error) {
      res.json(error);
    }
  },
  addUser: async (req, res) => {
    try {
      const user = await User.create({
        name: req.body.name,
      });
      res.json(user);
    } catch (error) {
      res.json(error);
    }
  },
};
