//mongodb
require('./config/db');

const app = require("express")();
const port = 3000;

const UserRouter = require('./api/User');

// for accepting post form data
const bodyParser = require("express").json;
app.use(bodyParser());

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
