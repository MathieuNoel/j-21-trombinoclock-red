// on récupére le module dotenv et on charge les variables d'environements
require("dotenv").config();

// on récupére express et le module contenant les routes
const express = require("express");
const router = require('./app/router');

// on crée l'application express
const app = express();

// on ajoute le middleware express.urlencoded pour crée un req.body 
app.use(express.urlencoded({extended: true}));

// on déclare une variable PORT qui prend pour valeur la variable d'environement PORT si elle existe, sinon 5050
const PORT = process.env.PORT || 5050;

// on configure notre application pour qu'elle utilise le moteur de rendu EJS
app.set("view engine", "ejs");
// on configure notre application pour qu'elle cherche les vues dans le dossier ./app/views
app.set("views", "./app/views");

// on met en place le middleware en charge des resources statiques
app.use(express.static('./public'));
// on met en place notre routeur
app.use(router);

// on ajoute un dernier middleware pour la gestion des 404
app.use((req, res)=>{
    res.status(404).render('404');
})

// on lance le serveur en précisant le port à utiliser
app.listen(PORT, ()=>{
    console.log(`server ready, visit http://localhost:${PORT}`);
})
