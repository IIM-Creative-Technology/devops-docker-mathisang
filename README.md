Pour ce projet, j'ai décidé de repartir sur l'API que nous avions rapidement créé en cours afin de ne pas perdre de temps sur la mise en place des CI/CD du projet.

J'ai mis en place plusieurs étapes en CI :
- lint : afin de vérifier que l'intégralité du code respect un certains nombre de règles pré-établies.
- test : j'ai décidé de faire un test sur le retour de l'API utilisé, si l'API ne renvoie rien alors le test échoue.
- audit : afin de vérifier les vulnérabilités et problèmes de sécurité du code


Puis j'ai mis en place deux stages pour le déploiement :
- Le premier à chaque commit sur la branch develop, on va push directement sur le serveur de preprod.
- Le deuxième, lors d'un merge de vers Master, on va push sur le serveur de production

Lien preprod : https://expresscrypto.herokuapp.com/

Lien prod : https://expresscryptoprod.herokuapp.com/

Lien projet Gitlab : https://gitlab.com/Mathisang/api-crypto
