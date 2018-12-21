// Déclarations
var contrainte1;
var contrainte2;
var contrainte3;

// Déclaration variables pour les inputs
// Contrainte 1
var valuePremierMembreX_contrainte1 = document.getElementById('valuePremierMembreX_contrainte1');
var valuePremierMembreY_contrainte1 = document.getElementById('valuePremierMembreY_contrainte1');
var valuePremierMembreY_contrainte1 = document.getElementById('valuePremierMembreZ_contrainte1');

// Contrainte 2
var valuePremierMembreX_contrainte2 = document.getElementById('valuePremierMembreX_contrainte2');
var valuePremierMembreY_contrainte2 = document.getElementById('valuePremierMembreY_contrainte2');
var valuePremierMembreZ_contrainte2 = document.getElementById('valuePremierMembreZ_contrainte2');

// Contrainte 3
var valuePremierMembreX_contrainte3 = document.getElementById('valuePremierMembreX_contrainte3');
var valuePremierMembreY_contrainte3 = document.getElementById('valuePremierMembreY_contrainte3');
var valuePremierMembreZ_contrainte3 = document.getElementById('valuePremierMembreZ_contrainte3');

// Déclaration variables input second membre
// Second membre contrainte 1
var valueSecondMembre_contrainte1 = document.getElementById('valueSecondMembre_contrainte1');

var valueSecondMembre_contrainte2 = document.getElementById('valueSecondMembre_contrainte2');

var valueSecondMembre_contrainte3 = document.getElementById('valueSecondMembre_contrainte3');

// Déclaration bouton avec pour id : validerContrainte
var validerContraintes = document.getElementById('validerContrainte');
// Event lors du clique sur les boutons
// Ecouteur du bouton de validation des 3 contraintes
validerContraintes.addEventListener('click', determinerContrainte1);
validerContraintes.addEventListener('click', determinerContrainte2);
validerContraintes.addEventListener('click', determinerContrainte3);

// Détermination de la variable entrante via la contrainte 1 en appelant la méthode determinationVariableEntrante()
validerContraintes.addEventListener('click', determinationVariableEntrante);

validerContraintes.addEventListener('click', calculRatios);

validerContraintes.addEventListener('click', veriferValeurMinRatio);

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
/* Nombres pour test
    var secondMembre_contrainte1 = 18;
    var secondMembre_contrainte2 = 42;
    var secondMembre_contrainte3 = 24;
*/
var secondMembre_contrainte1 = null;
var secondMembre_contrainte2 = null;
var secondMembre_contrainte3 = null;

// Déclaration des tableaux de contrainte
var tabContrainte1 = null;
var tabContrainte2 = null;
var tabContrainte3 = null;

// Déclaration des variables entrantes de chaque contrainte
var resultatMaxTabContrainte1 = null;
var resultatMaxTabContrainte2 = null;
var resultatMaxTabContrainte3 = null;

// Déclaration des variables de ratio
var ratio_contrainte1 = null;
var ratio_contrainte2 = null;
var ratio_contrainte3 = null;

// Déclaration d'un tableau composé des ratios des 3 contraintes
var ratios_contraintes = null

// Déclaration d'une variable contenant la valeur min des 3 valeurs de ratio de contrainte
var ratioMin = null;

// Déclaration de la variable du parsing le string du premier membre X de la contrainte 1 en int (string -> int)
var premierMembreX_contrainte2_parseInt = null;

// Déclaration de la variable du parsing le string du premier membre Y de la contrainte 1 en int (string -> int)
var premierMembreY_contrainte2_parseInt = null;

// Déclaration de la variable du parsing le string du premier membre Y de la contrainte 1 en int (string -> int)
var premierMembreZ_contrainte2_parseInt = null;

// Déclaration de la variable du parsing le string du second membre de la contrainte 1 en int (string -> int)
var secondMembre_contrainte2_parseInt = null;

// Déclaration du parsing le string du premier membre X de la contrainte 1 en int (string -> int)
var premierMembreX_contrainte3_parseInt = null;

// Déclaration du parsing le string du premier membre Y de la contrainte 1 en int (string -> int)
var premierMembreY_contrainte3_parseInt = null;

// Déclaration du parsing le string du premier membre Y de la contrainte 1 en int (string -> int)
var premierMembreZ_contrainte3_parseInt = null;

// On parse le string du second membre de la contrainte 1 en int (string -> int)
var secondMembre_contrainte3_parseInt = null;

var premierMembreX_contrainte1_parseInt = null;

var premierMembreX_contrainte1_parseInt = null;

var premierMembreX_contrainte1_parseInt = null;

var secondMembre_contrainte1_parseInt = null;

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

    // Pour avoir la valeur du second membre de la contrainte 1
    secondMembre_contrainte1 = valueSecondMembre_contrainte1.value

    // Pour avoir la valeur du second membre de la contrainte 2
    secondMembre_contrainte2 = valueSecondMembre_contrainte2.value

    // Pour avoir la valeur du second membre de la contrainte 3
    secondMembre_contrainte3 = valueSecondMembre_contrainte3.value

    // On parse le string du premier membre X de la contrainte 1 en int (string -> int)
    premierMembreX_contrainte1_parseInt = parseInt(premierMembreX_contrainte1);
    
    // On parse le string du premier membre Y de la contrainte 1 en int (string -> int)
    premierMembreY_contrainte1_parseInt = parseInt(premierMembreY_contrainte1);

    // On parse le string du premier membre Z de la contrainte 1 en int (string -> int)
    premierMembreZ_contrainte1_parseInt = parseInt(premierMembreZ_contrainte1);

    // On parse le string du second membre de la contrainte 1 en int (string -> int)
    secondMembre_contrainte1_parseInt = parseInt(secondMembre_contrainte1);

    // On ajoute ces même X et Y et Z au premier membre de la contrainte1 (le tableau)
    tabContrainte1 = [premierMembreX_contrainte1_parseInt, premierMembreY_contrainte1_parseInt, premierMembreZ_contrainte1_parseInt];
    console.log('1. function determinerContrainte1 se lance');
    console.log('Valeur de la variable x dans le input ' + premierMembreX_contrainte1_parseInt);
    console.log('Valeur de la variable y dans le input ' + premierMembreY_contrainte1_parseInt);
    console.log('Valeur de la variable z dans le input ' + premierMembreZ_contrainte1_parseInt);
    console.log('Valeur du second membre dans le input ' + secondMembre_contrainte1_parseInt);
    console.log("Tableau contrainte 1 : ");
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
    premierMembreX_contrainte2_parseInt = parseInt(premierMembreX_contrainte2);
    
    // On parse le string du premier membre Y de la contrainte 1 en int (string -> int)
    premierMembreY_contrainte2_parseInt = parseInt(premierMembreY_contrainte2);

    // On parse le string du premier membre Y de la contrainte 1 en int (string -> int)
    premierMembreZ_contrainte2_parseInt = parseInt(premierMembreZ_contrainte2);

    // On parse le string du second membre de la contrainte 1 en int (string -> int)
    secondMembre_contrainte2_parseInt = parseInt(secondMembre_contrainte2);

    // On ajoute ces même X et Y et Z au premier membre de la contrainte1 (le tableau)
    tabContrainte2 = [premierMembreX_contrainte2_parseInt, premierMembreY_contrainte2_parseInt, premierMembreZ_contrainte2_parseInt];
    console.log('2. function determinerContrainte2 se lance');
    console.log('Valeur de la variable x dans le input ' + premierMembreX_contrainte2_parseInt);
    console.log('Valeur de la variable y dans le input ' + premierMembreY_contrainte2_parseInt);
    console.log('Valeur de la variable z dans le input ' + premierMembreZ_contrainte2_parseInt);
    console.log('Valeur du second membre dans le input ' + secondMembre_contrainte2_parseInt);
    console.log("Tableau contrainte 2 : ");
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
    premierMembreX_contrainte3_parseInt = parseInt(premierMembreX_contrainte3);
    
    // On parse le string du premier membre Y de la contrainte 1 en int (string -> int)
    premierMembreY_contrainte3_parseInt = parseInt(premierMembreY_contrainte3);

    // On parse le string du premier membre Y de la contrainte 1 en int (string -> int)
    premierMembreZ_contrainte3_parseInt = parseInt(premierMembreZ_contrainte3);

    // On parse le string du second membre de la contrainte 1 en int (string -> int)
    secondMembre_contrainte3_parseInt = parseInt(secondMembre_contrainte3);
    

    // On ajoute ces même X et Y et Z au premier membre de la contrainte1 (le tableau)
    tabContrainte3 = [premierMembreX_contrainte3_parseInt, premierMembreY_contrainte3_parseInt, premierMembreZ_contrainte3_parseInt];
    console.log('3. function determinerContrainte3 se lance');
    console.log('Valeur de la variable x dans le input ' + premierMembreX_contrainte3_parseInt);
    console.log('Valeur de la variable y dans le input ' + premierMembreY_contrainte3_parseInt);
    console.log('Valeur de la variable z dans le input ' + premierMembreZ_contrainte3_parseInt);
    console.log('Valeur du second membre dans le input ' + secondMembre_contrainte3_parseInt);
    console.log("Tableau contrainte 3 : ");
    console.log(tabContrainte3);
}



// Détermination de la variable entrante
function determinationVariableEntrante() {
    /*
        La variable entrante est la variable la plus haute de la fonction économique
        soit la valeur Max.
    */
    //var resultatMaxFonctionEco = Math.max(...tabFonctionEco);
    resultatMaxTabContrainte1 = Math.max(...tabContrainte1);
    resultatMaxTabContrainte2 = Math.max(...tabContrainte2);
    resultatMaxTabContrainte3 = Math.max(...tabContrainte3);


    
    // Affichage de la variable Max
    console.log('La variable entrante est ' + resultatMaxTabContrainte1);
    console.log('La variable entrante est ' + resultatMaxTabContrainte2);
    console.log('La variable entrante est ' + resultatMaxTabContrainte3);

}

function calculRatios() {
    
    // SecondMembre de le contrainte 1 divisé par la variable entrante
    ratio_contrainte1 = (secondMembre_contrainte1 / resultatMaxTabContrainte1);
    ratio_contrainte2 = (secondMembre_contrainte2 / resultatMaxTabContrainte2);
    ratio_contrainte3 = (secondMembre_contrainte3 / resultatMaxTabContrainte3);

    ratios_contraintes = [ ratio_contrainte1, ratio_contrainte2, ratio_contrainte3];
    console.log("les 3 ratios de contrainte :");
    console.log(ratio_contrainte1);
    console.log(ratio_contrainte2);
    console.log(ratio_contrainte3);

}

function veriferValeurMinRatio() {
    ratioMin = Math.min(...ratios_contraintes)

    console.log("Le ratio le plus petit (ratio min) :")
    console.log(ratioMin);
}

function equationEchange() {
    // TODO: equation d'échange, à compléter
    
    // Tests
    if(ratio_contrainte1 < ratio_contrainte2 && ratio_contrainte3) {
        console.log('Prendre ratio 3');
    }
}
