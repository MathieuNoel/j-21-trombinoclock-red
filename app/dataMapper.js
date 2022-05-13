// On concentre toutes les fonctions utilisées pour récupérer
// les données dans un seul fichier
// de cette façon, si jamais nous changions de base de données,
// nous n'aurons pas à moifier chacun des controllers

/* notes :
  une fonction déclarée comme asynchrone (avec async devant) renvoie TOUJOURS une promesse
  la valeur de résolution d'une promesse est directement retournée quand on utilise await
*/

const client = require("./database");

const dataMapper = {
  /**
   * retrieve all promos from DB
   * @returns {Promise} a promise that resolves to an array of promo objects
   */
  async findAllPromos() {
    const sql = 'SELECT * FROM "promo"';
    const results = await client.query(sql);
    console.log(results.rows)
    return results.rows;
  },

  /**
   * retrieve promo by id from DB
   * @param {*} id promo unique identifier 
   * @returns {promise} a promise that resolves to a promo object or null
   */
  async findPromoById(id) {
    const sql = 'SELECT * FROM "promo" WHERE id = $1';
    const results = await client.query(sql, [id]);
    if (results.rows.length) {
      return results.rows[0];
    } else {
      return null;
    }
  },

  /**
   * retrieve all students of a specific promo from DB
   * @param {*} id promo unique identifier
   * @returns {promise} a promise that resolves to an array of student objects
   */
  async findStudentsByPromo(id) {
    const sql = 'SELECT * FROM "student" WHERE promo_id = $1';
    const results = await client.query(sql, [id]);
    return results.rows;
  },
};

module.exports = dataMapper;
