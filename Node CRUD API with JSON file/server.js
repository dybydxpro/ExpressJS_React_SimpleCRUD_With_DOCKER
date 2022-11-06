const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');

const app = express();

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Cross orgin request security bypass
const corsOpts = {
    origin: '*',

    methods: [
      'GET',
      'POST',
      'PUT',
      'DELETE',
    ],

    allowedHeaders: [
      'Content-Type',
    ],
};
app.use(cors(corsOpts));

app.get('/', (req, res) => {
  res.send("Hello World");
  // res.sendFile(__dirname + '/index.html');
});

require("./app/routes/student.routes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});