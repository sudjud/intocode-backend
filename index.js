const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());
app.use(require("./routes/index"));

mongoose
  .connect(
    "mongodb+srv://khalid:1234@cluster0.qcris2c.mongodb.net/intocode-backend?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(port, () => {
      console.log(`Сервер запущен на localhost:${port}`);
    });
  })
  .catch(() => console.log("Ошибка при соединении с сервером"));
