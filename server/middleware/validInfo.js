module.exports = function (req, res, next) {
  const { email, name, password } = req.body;

  function validEmail(userEmail) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(userEmail);
  }

  function validPassword(user_password) {
    return user_password.length >= 5;
  }

  function validName(user_name) {
    return /^([a-zA-Z ]+)$/i.test(user_name);
  }

  if (req.path === "/register") {
    console.log(!email.length);
    if (![email, name, password].every(Boolean)) {
      return res.json("Missing Credentials");
    } else if (!validEmail(email)) {
      return res.json("Invalid Email");
    } else if (!validPassword(password)) {
      return res.json("Invalid Password");
    } else if (!validName(name)) {
      return res.json("Invalid name");
    }
  } else if (req.path === "/login") {
    if (![email, password].every(Boolean)) {
      return res.json("Missing Credentials");
    } else if (!validEmail(email)) {
      return res.json("Invalid Email");
    } else if (!validPassword(password)) {
      return res.json("Invalid Password");
    }
  }

  next();
};
