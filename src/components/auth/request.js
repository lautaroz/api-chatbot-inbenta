const { query } = require('../../config/mysqlDatabase');

async function getUsuario(email) {
  try {
    return await query(`SELECT * FROM Usuario WHERE email = '${email}'`);
  } catch (error) {
    console.log('Error db', error);
  }
}

module.exports = {
  getUsuario,
};
