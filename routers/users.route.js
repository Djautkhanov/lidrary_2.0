const { Router } = require("express");
const { usersController } = require("../controllers/users.controller");
const router = Router();

// - просматривать все книги
router.get("/books", usersController.getBooks);

// - просматривать все книги по определенному жанру
router.get("/books/genre/:id", usersController.getBooksByGenreId);

// - просматривать определенную книгу
router.get("/books/:id", usersController.getBooksById);

// - оставлять отзыв на определенную книгу
router.patch("/books/feedback/:id", usersController.addFeedbackbyid);

// - брать книгу в аренду (не более 3-х за один раз)
router.patch("/books/basket/:id", usersController.addBasketUser);

// - вернуть книгу
router.patch("/books/return/:id", usersController.returnBooksbyId);

router.post("/useradd", usersController.addUser);
module.exports = router;
