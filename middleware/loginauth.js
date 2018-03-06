module.exports = function(req, res, next) {
    if (req.session && req.session.userId) {
      return next();
    } else {
      return res.render("cmslogin");
    }
  }