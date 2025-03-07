// import Prisma 
// récupérer les données du body de la requête
// installer le package bcrypt
// installer le package jsonwebtoken (avec un secret dans une variable d'environnement)
// cryper le mot de passe
// utiliser la methode create ^pour enregistrer l'utilisateur en base de données
// générer un token
// retourner le token

const authController = {
    register : async (req, res) => {
        console.log("triggered");
        res.send({
            message: "register"
        });
        // res.status(200).res.json({
        //     message: "register"
        // });
        // res.status(401).res.json({});
        // res.status(403).res.json({});
    }
}

export default authController;