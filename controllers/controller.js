const posts = require("../db/posts");
const { post } = require("../routers/posts");

/** INDEX */
function index(req, res) {
  res.json(posts);
}

/** SHOW */

function show(req, res) {
  pippo.getData(); //* errore logico per provare errorsHandler

  const id = parseInt(req.params.id);
  const postCercato = posts.find((post) => post.id === id);

  if (!postCercato) {
    return res.status(404).json("Post not found");
  }

  res.json(postCercato);
}

/** STORE */
function store(req, res) {
  const id = posts.at(-1).id + 1;
  const { title, content, image, category } = req.body;

  if (!title || !content || !category) {
    return res.status(400).json({ error: "Invalid params" });
  }

  const newPost = {
    id,
    title,
    content,
    image,
    category,
  };

  posts.push(newPost);
  console.log(posts);

  res.status(201);
  res.json(posts);
}

/** UPDATE */
function update(req, res) {
  const id = parseInt(req.params.id);
  let post = posts.find((post) => post.id === id);

  if (!post) {
    return res.status(404).json({ error: "Post Not Found" });
  }

  const { title, content, image, category } = req.body;

  if (!title || !content || !category) {
    return res.status(400).json({ error: "Invalid params" });
  }

  post.id = id;
  post.title = title;
  post.content = content;
  post.image = image;
  post.category = category;

  res.json(posts);
}

/** MODIFY */
function modify(req, res) {
  const { id } = req.params;
  res.json(`Modifica parzialmente i dettagli del post con id: ${id}`);
}

/** DESTROY */
function destroy(req, res) {
  const id = parseInt(req.params.id);

  const postCercato = posts.find((post) => post.id === id);

  if (!postCercato) {
    res.status(404);
    return res.json({
      status: 404,
      error: "Not Found",
      message: "Post non trovato",
    });
  }
  posts.splice(posts.indexOf(postCercato), 1);
  res.json(posts);
}

module.exports = { index, show, store, update, modify, destroy };
