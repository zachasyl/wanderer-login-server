const router = require("express").Router();
const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
let path = require("path");
let User = require("../users/user-model");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, uuidv4() + "-" + Date.now() + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const allowedFileTypes = ["image/jpeg", "image/jpg", "image/png"];
  if (allowedFileTypes.includes(file.mimetype)) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

let upload = multer({ storage, fileFilter });

router.route("/add").post(
  upload.fields([
    { name: "photo", maxCount: 1 },
    { name: "cover", maxCount: 1 },
  ]),
  (req, res) => {
    const role = req.body.role;
    const name = req.body.name;
    const birthdate = req.body.birthdate;
    const password = req.body.password;
    const photo = req.files["photo"][0].filename;
    const cover = req.files["cover"][0].filename;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const description = req.body.description;

    const newUserData = {
      role,
      firstName: name,
      lastName: lastname,
      cover_pic: cover,
      email,
      description,
      password,
      DOB: birthdate,
      profile_pic: photo,
    };

    const newUser = new User(newUserData);

    newUser
      .save()
      .then(() => res.json(newUser))
      .catch((err) => res.status(400).json("Error: " + err));
  }
);

module.exports = router;
