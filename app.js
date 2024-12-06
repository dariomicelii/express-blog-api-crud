const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

// REGISTERING HANDLERS
app.use(cors());
const errorsHandler = require("./middlewares/errorsHandler.js");
const notFound = require("./middlewares/notFound.js");

app.use(express.static("public"));
app.use(express.json());
// REGISTERING ROUTES
const postsRouter = require("./routers/posts.js");
app.use("/posts", postsRouter);

// ERROR HANDLERS
app.use(errorsHandler);
app.use(notFound);

// START LISTENING
app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});

//! RICORDARSI DI CONTROLLARE L'ORDINE DELLE CONFIGUARAZIONI
