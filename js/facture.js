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

var joursDeMois = new Date(date.getFullYear(), date.getMonth(), 0).getDate() - 1;
console.log(joursDeMois);

var joursRestant = joursDeMois - j;

console.log(joursRestant);
for (var i = 1; i <= joursRestant; i++) {
    var jj = j + i;
    jour.innerHTML += "<option>" + jj + '</option>';
}

