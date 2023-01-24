const { Router } = require("express");
const { booksController } = require("../controllers/admin.controller");
const { genreController } = require("../controllers/genres.controller");
const router = Router();

// - добавление книги
router.post("/admin", booksController.addBooks);

// - удаление книги
router.delete("/admin/:id", booksController.deleteBooksByid);

// - изменени книги
router.patch("/admin/:id", booksController.editBooksById);

// - вывод всех книги
router.get("/admin", booksController.getBookss);

// - отобрать книгу
router.patch("/admin/select/:id", booksController.selectBooksByUser);

// - добавление жанра
router.post("/admin/genre", genreController.addGenre);

// - удаление жанра
router.delete("/admin/genre/:id", genreController.deleteGenreById);

// - изменени жанра
router.patch("/admin/genre/:id", genreController.editGenre);

// - вывод всех жанров
router.get("/admin/genres", genreController.getCenre);

module.exports = router;
