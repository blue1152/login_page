const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const loginPattern = require("./main");
const cookieParser = require("cookie-parser");
const app = express();
const port = 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", (req, res) => {
  const options = req.body;
  const loginUser = loginPattern(options);
  const none = "登入失敗! 請重新輸入帳號/密碼";
  res.render("login", {
    loginUser: loginUser,
    helpers: {
      check_up: function() {
        if (loginUser == false) {
          return none;
        }
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Express app listening on port ${port}.`);
});
