class Compte{
    constructor(titulaire,montant = 0){
        this.titulaire = titulaire;
        this.solde = montant;
    }
/**
 *credite objet 
 * @param {number} montant 
 */
    crediter(montant){
        this.solde += montant;
    }
/**
 * debite objet
 * @param {number} montant 
 */
    debiter(montant){
        this.solde -= montant;
    }

    afficherSolde(){
        console.log(`le compte présente un solde de : ${this.solde}€`)
    }
}