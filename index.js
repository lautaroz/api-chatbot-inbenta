const app = require('./src/app');
const { tryConnection } = require('./src/config/database');

app.listen(process.env.PORT, async () => {
  console.log(
    '---------------------------------------------------------------------------------\n\n',
  );
  console.log(`🏁 Server on ${process.env.PORT} 🏁`);
  tryConnection();
});
