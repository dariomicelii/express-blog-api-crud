const express = require("express");
const app = express();
const port = 3000;

const errorsHandler = require("./middlewares/errorsHandler.js");
const notFound = require("./middlewares/notFound.js");

app.use(express.static("public"));

// importiamo il router
const postsRouter = require("./routers/posts.js");

// body parser
app.use(express.json());
app.use("/posts", postsRouter);

app.use(errorsHandler);
app.use(notFound);

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});

//! RICORDARSI DI CONTROLLARE L'ORDINE DELLE CONFIGUARAZIONI
