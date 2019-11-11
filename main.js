function loginPattern(options) {
  const users = [
    {
      firstName: "Tony",
      email: "tony@stark.com",
      password: "iamironman"
    },
    {
      firstName: "Steve",
      email: "captain@hotmail.com",
      password: "icandothisallday"
    },
    {
      firstName: "Peter",
      email: "peter@parker.com",
      password: "enajyram"
    },
    {
      firstName: "Natasha",
      email: "natasha@gamil.com",
      password: "*parol#@$!"
    },
    {
      firstName: "Nick",
      email: "nick@shield.com",
      password: "password"
    }
  ];

  // 取得屬性
  const nameList = users.map(item => Object.values(item)[0]); // 第1個屬性值
  //nameList = ["Tony", "Steve", "Peter", "Natasha", "Nick"]

  const emailList = users.map(item => Object.values(item)[1]); // 第2個屬性值
  const passwordList = users.map(item => Object.values(item)[2]); // 第3個屬性值

  let emailIndex = emailList.findIndex(email => email === options.Email);
  let passwordIndex = passwordList.findIndex(
    password => password === options.Password
  );

  if (emailIndex == passwordIndex) {
    return "hello! " + nameList[emailIndex] + " 歡迎登入";
  } else {
    return false;
  }
}

module.exports = loginPattern;
