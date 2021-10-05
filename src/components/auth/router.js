const router = require('express').Router();
const { userAndPasswordCreate } = require('./controller');

router.use(function (req, res, next) {
  res.header(
    'Access-Control-Allow-Headers',
    'x-access-token, Origin, Content-Type, Accept',
  );
  next();
});

router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    const rs = await userAndPasswordCreate(email, password);

    res.status(200).json(rs);
  } catch (error) {
    res.status(500).json('Error while creating the user');
  }
});

module.exports = router;
