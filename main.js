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

  if (options.email.includes(users.email)) {
    return true;
  } else {
    return false;
  }
}
