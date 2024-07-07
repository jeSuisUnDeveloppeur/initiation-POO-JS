"use-strict"
let titulaire = new Titulaire('Deschamps','Rémi');
console.log(titulaire);

let titulaire2 = new Titulaire('Michel','Olivier');
console.log(titulaire2.nom);

titulaire.identite();

let titulaire3 = new Titulaire('PenneFlamme','katy');
let compte1 = new Compte(titulaire3,25);

console.log(compte1);

compte1.crediter(150);
console.log(compte1);

compte1.debiter(20);

compte1.afficherSolde();

let compteEpargne = new CompteEpargne(titulaire,15);
console.log(compteEpargne);

compteEpargne.crediter(35);
console.log(compteEpargne);

