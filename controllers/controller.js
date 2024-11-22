const posts = require("../db/posts");
const { post } = require("../routers/posts");

/** INDEX */
function index(req, res) {
  res.json(posts);
}

/** SHOW */
function show(req, res) {
  const id = parseInt(req.params.id);
  const postCercato = posts.find((post) => post.id == id);
  res.json(postCercato);
}

/** STORE */
function store(req, res) {
  res.json("Crea un nuovo post");
}

/** UPDATE */
function update(req, res) {
  const { id } = req.params;
  res.json(`Modifica interamente i dettagli del post con id: ${id}`);
}

/** MODIFY */
function modify(req, res) {
  const { id } = req.params;
  res.json(`Modifica parzialmente i dettagli del post con id: ${id}`);
}

/** DESTROY */
function destroy(req, res) {
  const id = parseInt(req.params.id);

  const postCercato = posts.find((post) => post.id == id);

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
