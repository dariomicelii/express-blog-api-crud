const express = require("express");
const app = express();
const port = 3000;
app.use(express.static("public"));

const postsRouter = require("./routers/posts.js");

app.use("/posts", postsRouter);

app.listen(port, () => {
  console.log(`App listening on port: ${port}`);
});
