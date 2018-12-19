// Déclarations
var contrainte1;
var contrainte2;
var contrainte3;

// Déclaration variables pour les inputs et buttons
var valuePremierMembreX_contrainte1 = document.getElementById('valuePremierMembreX_contrainte1');
var validerChoixContrainte1 = document.getElementById('btnContrainte1');

// Event lors du clique sur les boutons
validerChoixContrainte1.addEventListener('click', determinerContrainte1);

// Tableau
var tabFonctionEco = [3, 2];

// Tableaux (premier membre)
// var tabContrainte1 = [2, 1, 1];
var premierMembreX_contrainte1 = 0;
var tabContrainte2 = [2, 3, 1];
var tabContrainte2 = [3, 1, 1];
// Second Membre des tableaux de contrainte
var secondMembre1 = 18;
var secondMembre2 = 42;
var secondMembre3 = 24;


function determinerContrainte1() {

    // Pour avoir la valeur de X dans le premier membre de la contrainte 1
    premierMembreX_contrainte1 = valuePremierMembreX_contrainte1.value;

    // On parse le string du premier membre X de la contrainte 1 en int (string -> int)
    var premierMembreX_contrainte1_parseInt = parseInt(premierMembreX_contrainte1);
    
    // On ajoute ce même X au premier membre de la contrainte1 (le tableau)
    var tabContrainte1 = [premierMembreX_contrainte1_parseInt, 1, 1];
    console.log('function determinerContrainte1 se lance');
    console.log('Valeur du nombre dans le input ' + premierMembreX_contrainte1_parseInt)
    console.log(tabContrainte1);

}


// Détermination de la variable entrante
function determinationVariableEntrante() {
    var resultatMaxFonctionEco = Math.max(...tabFonctionEco);
    console.log(resultatMaxFonctionEco);

    console.log('La variable entrante est ' + resultatMaxFonctionEco);
}

function ouEstleSujet() {

}