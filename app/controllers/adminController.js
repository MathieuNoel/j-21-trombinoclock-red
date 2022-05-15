const dataMapper = require("../dataMapper");
const { getPromoDetails } = require("./promoController");

const addStudent = {

  async formAddStudent(_, res, next) {
    const promos = await dataMapper.findAllPromos()
    res.render("add_student", { promos })
   },

  async addStudent(req, res, next) {
    

    try { 
      console.log("ICI!!",req.body)
      const addNewStudent = await dataMapper.creatNewStudent(req.body);
      console.log(addNewStudent)
      const promo = await dataMapper.findPromoById(req.body.promo);  
      res.render('promoDetails', { promo });
    } catch (error) {
      console.log(error,`student is not added !`);
    }
   }
   
}

module.exports = addStudent