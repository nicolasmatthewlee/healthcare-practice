var express = require("express");
var router = express.Router();

const { body, validationResult } = require("express-validator");

/* GET home page. */
router.post("/", [
  body("firstname", "First name must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .isLength({ max: 100 })
    .withMessage("First name must not exceed 100 characters.")
    .escape(),
  body("lastname", "Last name must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .isLength({ max: 100 })
    .withMessage("First name must not exceed 100 characters.")
    .escape(),
  (req, res, next) => {
    // finds validation errors and wraps
    const errors = validationResult(req);
    if (!errors.isEmpty())
      // 400 indicates server will not process the request due to a perceived client error
      return res.status(400).json({ errors: errors.array() });

    // no validation errors
    console.log(req.body);
    res.redirect("http://127.0.0.1:3000/#contact");
  },
]);

module.exports = router;
