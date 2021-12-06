const express = require("express")
const app = express()
const got = require('./got');
const pokemon = require('./pokemon');

app.use("/got", got);
app.use("/pokemon", pokemon);


app.get("*", (req,res) => {
    res.send('Page Not found')
})

const port = 5000

app.listen(port, () => {
    console.log('Server started on port: ' + port);
  });
  