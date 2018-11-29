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

for (i = 1; i <= 31; i++) {
    jour.innerHTML += "<option>" + i + '</option>';
}

for (i = 1; i <= 12; i++) {
    mois.innerHTML += "<option>" + i + '</option>';
}

for (var i = a; i <= date.getFullYear() + 50; i++) {
    annee.innerHTML += "<option>" + i + "</option>";
}

var option = document.getElementsByTagName('option');
for (i = 0; i < option.length; i++) {
    console.log(i + " " + option[i].innerText);
}

var select = document.getElementsByTagName('select');
for (i = 0; i < select.length; i++) {
    console.log(i + " " + select[i].innerText);
}

var aNomSociete = document.getElementById("a_nomSociete");
var aNom = document.getElementById("a_nom");
var aRue = document.getElementById("a_rue");
var aCp = document.getElementById("a_cp");
var atel = document.getElementById("a_tel");

function remplissage(element, affecter,affecter2,affecter3,affecter4,affecter5, index, comparateur, valeur,valeur2,valeur3,valeur4,valeur5) {
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


select[3].onclick = function () {
    remplissage(select, aNomSociete,aNom, aRue, aCp, atel, 3, "Nouveau client","","","","","");
    remplissage(select, aNomSociete,aNom, aRue, aCp, atel, 3, "LePoleS", "Le Pole S", "Mohamed", "55 rue de Poissy", "78300, Poissy"," 01.02.03.04.05"  );
    remplissage(select, aNomSociete,aNom, aRue, aCp, atel, 3, "Prosevia", "PROSEVIA", "Marc", "80 Avenue de Paris", "75020, Paris"," 01.78.83.04.70"  );
    remplissage(select, aNomSociete,aNom, aRue, aCp, atel, 3, "Microsoft", "MICROSOFT", "Moussa", "9 place de Londres", "95550, Cergy"," 01.51.83.96.74"  );
    remplissage(select, aNomSociete,aNom, aRue, aCp, atel, 3, "Google", "GOOGLE", "Pierre", "159 BD de la Paix", "77520, Meaux"," 09.58.63.73.92"  );
};

var eNomSociete = document.getElementById("e_nomSociete");
var eNom = document.getElementById("e_nom");
var eRue = document.getElementById("e_rue");
var eCp = document.getElementById("e_cp");
var etel = document.getElementById("e_tel");

select[4].onclick = function () {
    remplissage(select, eNomSociete,eNom, eRue, eCp, etel, 4, "Nouveau client","","","","","");
    remplissage(select, eNomSociete,eNom, eRue, eCp, etel, 4, "Mohamed Aarous", "AARO", "Mohamed", "87 rue Docteur Didier", "78300, Poissy"," 06.95.82.84.72");
    remplissage(select, eNomSociete,eNom, eRue, eCp, etel, 4, "Assa Traore", "TRAO", "Assa", "99 place Corneille", "78955, Carriere-sous-Poissy"," 06.85.63.15.08");
    remplissage(select, eNomSociete,eNom, eRue, eCp, etel, 4, "Sonia Bougamha", "BOUGAM", "Sonia", "9 BD de Londres", "78630, Mantes la ville"," 06.88.43.17.32");
    remplissage(select, eNomSociete,eNom, eRue, eCp, etel, 4, "Anas Yousfi", "YOUSF", "Anas", "8 bis avenue Charles Demaville", "56, Marseilles"," 07.55.22.33.44");
};

var codeProduit = 43456;
console.log(codeProduit);

var codeProduit2= codeProduit + 1;
var codeProduit3= codeProduit2 + 1;
var codeProduit4= codeProduit3 + 1;
var codeProduit5= codeProduit4 + 1;
var codeProduit6= codeProduit5 + 1;

var tableauProduit = [codeProduit,codeProduit2,codeProduit3,codeProduit4,codeProduit5,codeProduit6];

for(i = 0; i < tableauProduit.length; i++){
    select[5].innerHTML+= "<option>#" + tableauProduit[i] + "</option>" 
    select[6].innerHTML+= "<option>#" + tableauProduit[i] + "</option>" 
    select[7].innerHTML+= "<option>#" + tableauProduit[i] + "</option>" 
}
var libelle = document.getElementsByTagName('td'); 
console.log(libelle);

function remplissage2(element, code, libelle, prix, valeur, valeur2, valeur3, comparateur) {
    if (element[index].value == comparateur) {
        // remlir le texte de chaque option
        code.value = valeur;
        libelle.value = valeur2;
        prix.value = valeur3;

    }
}
    select[5].onclick = function () {
        remplissage2("43456", 'stylos', "7€");
    }





