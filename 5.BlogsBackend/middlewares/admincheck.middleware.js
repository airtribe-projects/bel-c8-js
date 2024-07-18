function authorizeRole(role) {
  function validator(req, res, next) {
    const loggedInuserROle = req.role;
    if (loggedInuserROle === role) {
      next();
    } else {
      res.sendStatus(403);
    }
  }

  return validator;
}

module.exports = { authorizeRole };
