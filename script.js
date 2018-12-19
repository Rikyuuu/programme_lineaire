// Déclarations
var contrainte1;
var contrainte2;
var contrainte3;

// Déclaration variables pour les inputs et buttons
// Contrainte 1
var valuePremierMembreX_contrainte1 = document.getElementById('valuePremierMembreX_contrainte1');
var valuePremierMembreY_contrainte1 = document.getElementById('valuePremierMembreY_contrainte1');
var validerChoixContrainte1 = document.getElementById('btnContrainte1');

// Contrainte 2
var valuePremierMembreX_contrainte2 = document.getElementById('valuePremierMembreX_contrainte2');
var valuePremierMembreY_contrainte2 = document.getElementById('valuePremierMembreY_contrainte2');
var validerChoixContrainte2 = document.getElementById('btnContrainte2');

// Contrainte 3
var valuePremierMembreX_contrainte3 = document.getElementById('valuePremierMembreX_contrainte3');
var valuePremierMembreY_contrainte3 = document.getElementById('valuePremierMembreY_contrainte3');
var validerChoixContrainte3 = document.getElementById('btnContrainte3');

// Event lors du clique sur les boutons
// Ecouteur du bouton de la contrainte 1
validerChoixContrainte1.addEventListener('click', determinerContrainte1);

// Ecouteur du bouton de la contrainte 2
validerChoixContrainte2.addEventListener('click', determinerContrainte2);

// Ecouteur du bouton de la contrainte 3
validerChoixContrainte3.addEventListener('click', determinerContrainte3);

// Tableau
var tabFonctionEco = [3, 2];

// Tableaux qui composent le premier membre
// var tabContrainte1 = [2, 1, 1]; soit -> [X, Y, Z]
var premierMembreX_contrainte1 = 0;
var premierMembreY_contrainte1 = 0;
var premierMembreZ_contrainte1 = 0;

// var tabContrainte2 = [2, 3, 1]; soit -> [X, Y, Z]
var premierMembreX_contrainte2 = 0;
var premierMembreY_contrainte2 = 0;
var premierMembreZ_contrainte2 = 0;


// var tabContrainte3 = [3, 1, 1]; soit -> [X, Y, Z]
var premierMembreX_contrainte3 = 0;
var premierMembreY_contrainte3 = 0;
var premierMembreZ_contrainte3 = 0;

// Second Membre des tableaux de contrainte
var secondMembre1 = 18;
var secondMembre2 = 42;
var secondMembre3 = 24;

/*
    Détermination de la contrainte 1 en remplissant le tableau de
    contrainte 1 par les valeurs entrées par l'utilisateur pour le
    premier et le second membre
*/
// TODO : Faire le second membre
function determinerContrainte1() {

    // Pour avoir la valeur de X dans le premier membre de la contrainte 1
    premierMembreX_contrainte1 = valuePremierMembreX_contrainte1.value;
    
    // Pour avoir la valeur de Y dans le premier membre de la contrainte 1
    premierMembreY_contrainte1 = valuePremierMembreY_contrainte1.value;

    // Pour avoir la valeur de Z dans le premier membre de la contrainte 1
    premierMembreZ_contrainte1 = valuePremierMembreZ_contrainte1.value;

    // On parse le string du premier membre X de la contrainte 1 en int (string -> int)
    var premierMembreX_contrainte1_parseInt = parseInt(premierMembreX_contrainte1);
    
    // On parse le string du premier membre Y de la contrainte 1 en int (string -> int)
    var premierMembreY_contrainte1_parseInt = parseInt(premierMembreY_contrainte1);

    // On parse le string du premier membre Y de la contrainte 1 en int (string -> int)
    var premierMembreZ_contrainte1_parseInt = parseInt(premierMembreZ_contrainte1);

    // On ajoute ces même X et Y et Z au premier membre de la contrainte1 (le tableau)
    var tabContrainte1 = [premierMembreX_contrainte1_parseInt, premierMembreY_contrainte1_parseInt, premierMembreZ_contrainte1_parseInt];
    console.log('1. function determinerContrainte1 se lance');
    console.log('Valeur de la variable x dans le input ' + premierMembreX_contrainte1_parseInt);
    console.log('Valeur de la variable y dans le input ' + premierMembreY_contrainte1_parseInt);
    console.log('Valeur de la variable z dans le input ' + premierMembreZ_contrainte1_parseInt);
    console.log(tabContrainte1);

}

/*
    Détermination de la contrainte 1 en remplissant le tableau de
    contrainte 1 par les valeurs entrées par l'utilisateur pour le
    premier et le second membre
*/
// TODO : Faire le second membre
function determinerContrainte2() {

    // Pour avoir la valeur de X dans le premier membre de la contrainte 1
    premierMembreX_contrainte2 = valuePremierMembreX_contrainte2.value;
    
    // Pour avoir la valeur de Y dans le premier membre de la contrainte 1
    premierMembreY_contrainte2 = valuePremierMembreY_contrainte2.value;

    // Pour avoir la valeur de Z dans le premier membre de la contrainte 1
    premierMembreZ_contrainte2 = valuePremierMembreZ_contrainte2.value;

    // On parse le string du premier membre X de la contrainte 1 en int (string -> int)
    var premierMembreX_contrainte2_parseInt = parseInt(premierMembreX_contrainte2);
    
    // On parse le string du premier membre Y de la contrainte 1 en int (string -> int)
    var premierMembreY_contrainte2_parseInt = parseInt(premierMembreY_contrainte2);

    // On parse le string du premier membre Y de la contrainte 1 en int (string -> int)
    var premierMembreZ_contrainte2_parseInt = parseInt(premierMembreZ_contrainte2);

    // On ajoute ces même X et Y et Z au premier membre de la contrainte1 (le tableau)
    var tabContrainte2 = [premierMembreX_contrainte2_parseInt, premierMembreY_contrainte2_parseInt, premierMembreZ_contrainte2_parseInt];
    console.log('2. function determinerContrainte2 se lance');
    console.log('Valeur de la variable x dans le input ' + premierMembreX_contrainte2_parseInt);
    console.log('Valeur de la variable y dans le input ' + premierMembreY_contrainte2_parseInt);
    console.log('Valeur de la variable z dans le input ' + premierMembreZ_contrainte2_parseInt);
    console.log(tabContrainte2);
}

function determinerContrainte3() {

    // Pour avoir la valeur de X dans le premier membre de la contrainte 1
    premierMembreX_contrainte3 = valuePremierMembreX_contrainte3.value;
    
    // Pour avoir la valeur de Y dans le premier membre de la contrainte 1
    premierMembreY_contrainte3 = valuePremierMembreY_contrainte3.value;

    // Pour avoir la valeur de Z dans le premier membre de la contrainte 1
    premierMembreZ_contrainte3 = valuePremierMembreZ_contrainte3.value;

    // On parse le string du premier membre X de la contrainte 1 en int (string -> int)
    var premierMembreX_contrainte3_parseInt = parseInt(premierMembreX_contrainte3);
    
    // On parse le string du premier membre Y de la contrainte 1 en int (string -> int)
    var premierMembreY_contrainte3_parseInt = parseInt(premierMembreY_contrainte3);

    // On parse le string du premier membre Y de la contrainte 1 en int (string -> int)
    var premierMembreZ_contrainte3_parseInt = parseInt(premierMembreZ_contrainte3);

    // On ajoute ces même X et Y et Z au premier membre de la contrainte1 (le tableau)
    var tabContrainte3 = [premierMembreX_contrainte3_parseInt, premierMembreY_contrainte3_parseInt, premierMembreZ_contrainte3_parseInt];
    console.log('3. function determinerContrainte3 se lance');
    console.log('Valeur de la variable x dans le input ' + premierMembreX_contrainte3_parseInt);
    console.log('Valeur de la variable y dans le input ' + premierMembreY_contrainte3_parseInt);
    console.log('Valeur de la variable z dans le input ' + premierMembreZ_contrainte3_parseInt);
    console.log(tabContrainte3);
}



// Détermination de la variable entrante
function determinationVariableEntrante() {
    /*
        La variable entrante est la variable la plus haute de la fonction économique
        soit la valeur Max.
    */
    var resultatMaxFonctionEco = Math.max(...tabFonctionEco);

    // Affichage de la variable Max
    console.log('La variable entrante est ' + resultatMaxFonctionEco);
}

function ouEstleSujet() {

}