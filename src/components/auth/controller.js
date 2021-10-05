const { getUsuario } = require('./request');

const userAndPasswordCreate = async (email, password) => {
  const [result] = await getUsuario(email);

  if (result) return 200;
  return 401;
};

module.exports = {
  userAndPasswordCreate,
};
