const Post = require('../models/Post');

// Contrôleur pour créer une nouvelle publication
exports.createPost = async (req, res) => {
  const { content } = req.body;

  try {
    const newPost = new Post({
      user: req.user.id, // L'ID de l'utilisateur actuellement connecté
      content
    });

    const post = await newPost.save();
    res.json(post);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur du serveur');
  }
};

// Contrôleur pour obtenir toutes les publications
exports.getPosts = async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 }); // Trie par date décroissante
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erreur du serveur');
  }
};