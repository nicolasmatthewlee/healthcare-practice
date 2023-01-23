var express = require("express");
var router = express.Router();

const nodemailer = require("nodemailer");

const { body, validationResult } = require("express-validator");

/* GET home page. */
router.post("/", [
  // validate and sanitize form body
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
  body("email", "Please enter a valid email.")
    .trim()
    .isEmail()
    .normalizeEmail()
    .isLength({ min: 1 })
    .withMessage("Email must be not be empty.")
    .isLength({ max: 100 })
    .withMessage("Email must not exceed 100 characters.")
    .escape(),
  body("phone", "Please provide a valid phone number.")
    .trim()
    .isMobilePhone()
    .escape(),
  body("availability", "Please select a contact preference.")
    .trim()
    .isLength({ max: 100 })
    .escape(),
  body("message", "Message must not be empty.")
    .trim()
    .isLength({ min: 1 })
    .escape(),
  (req, res, next) => {
    // finds validation errors and wraps
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty())
      // 400 indicates server will not process the request due to a perceived client error
      return res.status(400).json({ errors: errors.array() });

    // no validation errors
    console.log(req.body);

    // create email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL, pass: process.env.PASSWORD },
    });

    // set message options
    const mailOptions = {
      from: process.env.Email,
      to: "nicolaslee2017@gmail.com",
      subject: "Your Message to PsychCorp",
      text: `Name: ${req.body.lastname}, ${req.body.firstname}\nEmail: ${req.body.email}\nPhone: ${req.body.phone}\nAvailability: ${req.body.availability}\nMessage:\n${req.body.message}`,
    };
    // send mail
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) console.log(error);
      else console.log("Email sent: " + info.response);
    });

    res.end();
  },
]);

module.exports = router;
