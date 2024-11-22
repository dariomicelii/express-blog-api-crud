const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));

// importiamo il router
const postsRouter = require("./routers/posts.js");

// body parser
app.use(express.json());

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
