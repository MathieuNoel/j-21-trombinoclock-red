const dataMapper = require("../dataMapper");

const { getPromoDetails } = require("./promoController");

const addStudent = {
  /**
   * root to the form
   * @param {*} _ no request in this root
   * @param {*} res open the form 
   * @param {*} next to 404 if promos is undefined
   */
  async formAddStudent(_, res, next) {
    const promos = await dataMapper.findAllPromos()
    if(promos){
    res.render("add_student", { promos })
    } else {
      next()
    }
   },

   /**
   * add a new student if the form send values
   * @param {*} req request dending bt the form
   * @param {*} res redirect where the promo are updating
   * @param {*} next to the 404 if the catch take anything
    */
  async addStudent(req, res, next) {   
    try { 
      const addNewStudent = await dataMapper.creatNewStudent(req.body);
      const promo = await dataMapper.findPromoById(req.body.promo);  
      res.render('promoDetails', { promo });
    } catch (error) {
      next()
    }
   }
   
}

module.exports = addStudent