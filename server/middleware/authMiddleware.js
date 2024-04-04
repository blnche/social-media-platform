const config = require('../config/config');
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // Obtenir le token de la requête
    const token = req.header('x-auth-token');

    // Vérifier si le token n'est pas fourni
    if (!token) {
        return res.status(401).send('Aucun token, autorisation refusée');
    }

    try {
        // Vérifier et décoder le token
        const decoded = jwt.verify(token, config.jwtSecret);

        // Ajouter l'utilisateur au corps de la requête
        req.user = decoded;
        next();
    } catch (err) {
        res.status(401).json('Token invalide');
    }
};
