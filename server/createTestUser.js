const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');

// Connexion à la base de données
mongoose.connect('mongodb://localhost:27017/social_network', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
});

// Création d'un utilisateur de test
async function createTestUser() {
    const username = 'djimmy';
    const email = 'djimmy.allard@exemple.com';
    const password = 'password123';

    try {
        // Vérifie si l'utilisateur existe déjà
        let user = await User.findOne({ email });
        if (user) {
            console.log('User already exists');
            return;
        }

        // Création du hash du mot de passe
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Création de l'utilisateur
        user = new User({
            username,
            email,
            password: hashedPassword
        });

        // Sauvegarde de l'utilisateur dans la base de données
        await user.save();
        console.log('Test user created successfully:', user);
    } catch (error) {
        console.error('Error creating test user:', error.message);
    } finally {
        // Déconnexion de la base de données après avoir créé l'utilisateur
        mongoose.disconnect();
    }
}

// Appel de la fonction pour créer l'utilisateur de test
createTestUser();
