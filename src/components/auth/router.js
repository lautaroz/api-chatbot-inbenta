const router = require("express").Router();
const { userAndPasswordCreate } = require("./controller");
const axios = require("axios").default;
const { WebClient } = require("@slack/web-api");

// this will allow us to use slack api methods
const client = new WebClient();
router.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept",
  );
  next();
});

router.post("/", async (req, res) => {
  const { challange } = req;
  res.status(200).json(challange);
});

router.post("/signup", async (req, res) => {
  try {
    const { email, password } = req.body;

    const rs = await userAndPasswordCreate(email, password);

    res.status(200).json(rs);
  } catch (error) {
    res.status(500).json("Error while creating the user");
  }
});

// code is a query parameter
router.get("/connecttoslack", async (req, res) => {
  try {
    const { code } = req.query;
    const auth = await client.oauth.v2.access({
      code,
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      redirect_uri: "http://localhost:8001/connecttoslack",
    });

    const access_token = auth.authed_user.access_token;
    console.log("token", access_token);

    const res = await axios.post(`https://slack.com/api/users.identity`, {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });

    console.log(res.data);

    // // Sending Message to slack
    // const res = await client.chat.postMessage({
    //   token: auth.authed_user.access_token,
    //   channel: "chatbot-people-care",
    //   text: "Hi from node",
    //   as_user: true,
    // });
    // console.log(res);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
