const express = require('express');
require('dotenv').config();
const cookieparser = require('cookie-parser');
const route = require('../routers/route');
const port = 5000;
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieparser());
// app.use(express.static(path.join(__dirname, "../client/build")));
app.use(route);
// app.get("*", function (req, res) {
//   res.sendFile(
//     path.join(__dirname, "../client/build/index.html"),
//     function (err) {
//       res.status(500).send(err);
//     }
//   );
// });
app.all('*', (req, res) => {
    res.status(404).send('Ooops page not found');
});
app.listen(port, console.log(`http://localhost:${port}`));
