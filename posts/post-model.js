// database access using knex
const db = require('../data/db-config.js');

function getAllPosts() {
  // i will use 'db' to do sql with JS
  // SELECT * FROM posts;
  // returns an array of records
  return db('posts')
}

function getPostById(id) {
  // SELECT * FROM posts WHERE id = id
  // resolves to an array of records
  return db('posts').where({ id }).first()
}

module.exports = {
  getAllPosts,
  getPostById,
}
