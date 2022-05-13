const mainController = {
  /**
   * Display home page
   * @param {request} req request object
   * @param {response} res response object
   */
  getHomePage(req, res) {
    res.render("index");
  },
};

// on exporte le controller
module.exports = mainController;
