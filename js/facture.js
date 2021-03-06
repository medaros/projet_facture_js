//**** Partie Date (Date du jour et select la date de votre choix)****
var date = new Date(),
    j = date.getDate(),
    m = date.getMonth() + 1,
    a = date.getFullYear();
console.log(j, m, a);

var jour = document.querySelector('#jour');
var mois = document.querySelector('#mois');
var annee = document.querySelector('#annee');

jour.innerHTML += "<option>" + j + '</option>';
mois.innerHTML += "<option>" + m + '</option>';
annee.innerHTML += "<option>" + a + '</option>';

// Remplissage de select A 
var option = document.getElementsByTagName('option');
// Select
var select = document.getElementsByTagName('select');

// A
var aNomSociete = document.getElementById("a_nomSociete");
var aNom = document.getElementById("a_nom");
var aRue = document.getElementById("a_rue");
var aCp = document.getElementById("a_cp");
var atel = document.getElementById("a_tel");

// Expedier A
var eNomSociete = document.getElementById("e_nomSociete");
var eNom = document.getElementById("e_nom");
var eRue = document.getElementById("e_rue");
var eCp = document.getElementById("e_cp");
var etel = document.getElementById("e_tel");

// Code de prosuits
var tableauProduit = [43456, 43457, 43458, 43459];

// les td
var td = document.getElementsByTagName('td');

// Les inputs
var quantite = document.getElementsByTagName('input');

// message superieur a 1000EUR
var message = document.querySelector("#promotion");

// spans pour l'ordre du cheque
var span = document.querySelectorAll("footer strong");

// button pour imprimer
var button = document.querySelector('button');

//Boucle pour avoir les 31 jours, les 12 mois et de Année jusqu'à année + 50 
for (i = 1; i <= 31; i++) {
    jour.innerHTML += "<option>" + i + '</option>';
}

for (i = 1; i <= 12; i++) {
    mois.innerHTML += "<option>" + i + '</option>';
}

for (var i = a + 1; i <= date.getFullYear() + 50; i++) {
    annee.innerHTML += "<option>" + i + "</option>";
}

// Remplissage un pour A - et Expedier A:
function remplissage(element, affecter, affecter2, affecter3, affecter4, affecter5, index, comparateur, valeur, valeur2, valeur3, valeur4, valeur5) {
    if (element[index].value == comparateur) {
        // remlir le texte de chaque option
        affecter.value = valeur;
        affecter2.value = valeur2;
        affecter3.value = valeur3;
        affecter4.value = valeur4;
        affecter5.value = valeur5;
        affecter.disabled = true;
        affecter2.disabled = true;
        affecter3.disabled = true;
        affecter4.disabled = true;
        affecter5.disabled = true;
    }
    else if (element[index].value == "Nouveau client") {
        // remlir le texte de chaque option
        affecter.disabled = false;
        affecter2.disabled = false;
        affecter3.disabled = false;
        affecter4.disabled = false;
        affecter5.disabled = false;
    }
}

// Renseignements clients prédéfinie
select[3].onclick = function () {
    remplissage(select, aNomSociete, aNom, aRue, aCp, atel, 3, "Nouveau client", "", "", "", "", "");
    remplissage(select, aNomSociete, aNom, aRue, aCp, atel, 3, "LePoleS", "Le Pole S", "Mohamed", "55 rue de Poissy", "78300, Poissy", " 01.02.03.04.05");
    remplissage(select, aNomSociete, aNom, aRue, aCp, atel, 3, "Prosevia", "PROSEVIA", "Marc", "80 Avenue de Paris", "75020, Paris", " 01.78.83.04.70");
    remplissage(select, aNomSociete, aNom, aRue, aCp, atel, 3, "Microsoft", "MICROSOFT", "Moussa", "9 place de Londres", "95550, Cergy", " 01.51.83.96.74");
    remplissage(select, aNomSociete, aNom, aRue, aCp, atel, 3, "Google", "GOOGLE", "Pierre", "159 BD de la Paix", "77520, Meaux", " 09.58.63.73.92");
};


select[4].onclick = function () {
    remplissage(select, eNomSociete, eNom, eRue, eCp, etel, 4, "Nouveau client", "", "", "", "", "");
    remplissage(select, eNomSociete, eNom, eRue, eCp, etel, 4, "Mohamed Aarous", "AARO", "Mohamed", "87 rue Docteur Didier", "78300, Poissy", " 06.95.82.84.72");
    remplissage(select, eNomSociete, eNom, eRue, eCp, etel, 4, "Assa Traore", "TRAO", "Assa", "99 place Corneille", "78955, Carriere-sous-Poissy", " 06.85.63.15.08");
    remplissage(select, eNomSociete, eNom, eRue, eCp, etel, 4, "Sonia Bougamha", "BOUGAM", "Sonia", "9 BD de Londres", "78630, Mantes la ville", " 06.88.43.17.32");
    remplissage(select, eNomSociete, eNom, eRue, eCp, etel, 4, "Anas Yousfi", "YOUSF", "Anas", "8 bis avenue Charles Demaville", "56, Marseilles", " 07.55.22.33.44");
};

// Remplir les select avec les code de produit
for (i = 0; i < tableauProduit.length; i++) {
    select[5].innerHTML += "<option>#" + tableauProduit[i] + "</option>"
    select[6].innerHTML += "<option>#" + tableauProduit[i] + "</option>"
    select[7].innerHTML += "<option>#" + tableauProduit[i] + "</option>"
}

// Remplissage 2 pour remplir libelle et prix de chaque produit de select
function remplissage2(element, index, code, libelle, prix, valeur, valeur2, index_quantite, td) {
    // select . vavlue == article
    if (element[index].value == code) {
        // remlir le texte de chaque option
        libelle.innerHTML = valeur;
        prix.innerHTML = valeur2;

        var chiffres = parseFloat(valeur2.replace("€", ".").replace('/ mois', "").replace(' ', ''));
        CalculArticle(chiffres, index_quantite, td);
        // console.log(chiffres, index_quantite, td);
    }
}

// Return le prix HT pour chaque produit dans la liste select et remplacer toutes les lettres et les caracteres speciaux
function Remplace(i) {
    var prixSpecial = td[i].innerText;
    prix = prixSpecial.replace("€", ".").replace('/ mois', "").replace(' ', '');
    CalculHT();
    TVA();
    fraisPort();
    return prix;
}

// Calculer le prix Hors Tax de tous les articles
function CalculHT() {
    var prixHT = Number(td[9].innerText) + Number(td[14].innerText) + Number(td[19].innerText);
    td[21].innerHTML = prixHT.toFixed(2) + " €";
    return prixHT;
}

// calculer la tva
function TVA() {
    var prixTVA = CalculHT() * 20 / 100;
    td[23].innerHTML = prixTVA.toFixed(2) + " €";
    return prixTVA;
}

// frais de port
function fraisPort() {
    var port = TVA() * 10 / 100;
    td[25].innerHTML = port.toFixed(2) + " €";
    return port;
}

// Montant TTC
function montantTTC() {
    var prixTTC = CalculHT() + TVA() + fraisPort();
    prixTTC.toFixed(2);
    var prixPromo = prixTTC * 5 / 100;
    if (prixTTC >= 1000) {
        message.innerHTML = "N.B Votre facture a depassé 1000€, vous avez obtenu pour votre prochaine facture une remise de : " + prixPromo.toFixed(2) + " € répresentant <span>5</span>% de votre commande ci-dessus";
        message.style.display = "block";
    }

    else {
        message.style.display = "none";

    }
    td[27].innerHTML = prixTTC.toFixed(2) + " €";
    console.log(montantTTC);
}

// Calculer le montant de l'article selon la quantite
function CalculArticle(p, q, i) {
    var input = quantite[q].value;
    montant = p * input;
    // td pour montant en euro pour chaque ligne
    td[i].innerHTML = montant.toFixed(2);
    
    console.log(td[i]);

    // Appeler directement les autres functions pour eviter la repitition
    CalculHT();
    TVA();
    fraisPort();
    montantTTC();
}

// Executer la function qui va remplir les cases [select, td, input etc...] quand on choisi l'article - SELECT 5 - 6 - 7
select[5].onclick = function () {
    remplissage2(select, 5, "#43456", td[6], td[7], 'Economie - Un site web - 100go de stockage', "2 €90 / mois", 15, 9);
    remplissage2(select, 5, "#43457", td[6], td[7], 'Deluxe - site <strong>illimité</strong> - stockage <strong>illimité</strong>', "4 €79 / mois", 15, 9);
    remplissage2(select, 5, "#43458", td[6], td[7], 'Ultimate - Fonctions Deluxe plus - Puissance de traitement et ménoire doublées ', "10 €19 / mois", 15, 9);
    remplissage2(select, 5, "#43459", td[6], td[7], 'Maximum - Fonction Ultimate, plus - deux fois plus de puissance et de mémoire ', "15 €59", 15, 9);
    Remplace(7);
}

select[6].onclick = function () {
    remplissage2(select, 6, "#43456", td[11], td[12], 'Economie - Un site web - 100go de stockage', "2 €90 / mois", 16, 14);
    remplissage2(select, 6, "#43457", td[11], td[12], 'Deluxe - site <strong>illimité</strong> - stockage <strong>illimité</strong>', "4 €79 / mois", 16, 14);
    remplissage2(select, 6, "#43458", td[11], td[12], 'Ultimate - Fonctions Deluxe plus - Puissance de traitement et ménoire doublées ', "10 €19 / mois", 16, 14);
    remplissage2(select, 6, "#43459", td[11], td[12], 'Maximum - Fonction Ultimate, plus - deux fois plus de puissance et de mémoire ', "15 €59", 16, 14);
    Remplace(12);
}

select[7].onclick = function () {
    remplissage2(select, 7, "#43456", td[16], td[17], 'Economie - Un site web - 100go de stockage', "2 €90 / mois", 17, 19);
    remplissage2(select, 7, "#43457", td[16], td[17], 'Deluxe - site <strong>illimité</strong> - stockage <strong>illimité</strong>', "4 €79 / mois", 17, 19);
    remplissage2(select, 7, "#43458", td[16], td[17], 'Ultimate - Fonctions Deluxe plus - Puissance de traitement et ménoire doublées ', "10 €19 / mois", 17, 19);
    remplissage2(select, 7, "#43459", td[16], td[17], 'Maximum - Fonction Ultimate, plus - deux fois plus de puissance et de mémoire ', "15 €59", 17, 19);
    Remplace(17);
}

// Changer la quantite et recalculer le montant + tva + frais de port + montant TTC
quantite[15].onkeyup = function () {
    try {
        CalculArticle(prix, 15, 9);
    } catch (e) {
        CalculArticle(2.90, 15, 9);
    }
}
quantite[16].onkeyup = function () {
    try {
        CalculArticle(prix, 16, 14);
    } catch(e) {
        CalculArticle(2.90, 16, 14);
    }
}
quantite[17].onkeyup = function () {
    try {
        CalculArticle(prix, 17, 19);
    } catch(e) {
        CalculArticle(2.90, 17, 19);
    }
}
quantite[15].onclick = function () {
    try {
        CalculArticle(prix, 15, 9);
    } catch (e) {
        CalculArticle(2.90, 15, 9);
    }
}
quantite[16].onclick = function () {
    try {
        CalculArticle(prix, 16, 14);
    } catch(e) {
        CalculArticle(2.90, 16, 14);
    }
}
quantite[17].onclick = function () {
    try {
        CalculArticle(prix, 17, 19);
    } catch(e) {
        CalculArticle(2.90, 17, 19);
    }
}

// Fermer le message en cliquant sur la P
message.onclick = function () {
    message.style.display = "none";
}

// Remplir le cheque avec les rensignements de la societe en haut
quantite[0].onkeyup = function () {
    console.log(quantite[0].value);
    span[0].innerText = quantite[0].value;
}
quantite[2].onkeyup = function () {
    span[1].innerText = quantite[2].value;
}
quantite[3].onkeyup = function () {
    span[2].innerText = quantite[3].value;
}

// Imprimer!
button.onclick = function () {
    window.print();
}