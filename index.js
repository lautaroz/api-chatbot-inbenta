const app = require("./src/app");
const { tryConnection } = require("./src/config/postreeDatabase");

const { App } = require("@slack/bolt");

const appSlack = new App({
  token: process.env.BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});

app.listen(process.env.PORT, async () => {
  await appSlack.start();
  console.log("⚡️ Bolt app started");
  // console.log(
  //   "---------------------------------------------------------------------------------\n\n",
  // );
  // console.log(`🏁 Server on ${process.env.PORT} 🏁`);
  // tryConnection();
});
