const app = require("./src/app");
const { tryConnection } = require("./src/config/postreeDatabase");
const { createEventAdapter } = require("@slack/events-api");
const slackEvents = createEventAdapter(process.env.CLIENT_SECRET);

const port = 8005;

// Attach listeners to events by Slack Event "type". See: https://api.slack.com/events/message.im
slackEvents.on("message", (event) => {
  console.log(
    `Received a message event: user ${event.user} in channel ${event.channel} says ${event.text}`,
  );
});

(async () => {
  const server = await slackEvents.start(port);
  console.log(`SLACK: Listening for events on ${server.address().port}`);
})();

app.listen(process.env.PORT, async () => {
  console.log(
    "---------------------------------------------------------------------------------\n\n",
  );
  console.log(`🏁 NODE: Server on ${process.env.PORT} 🏁`);
  tryConnection();
});
