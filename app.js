var mois = ["janvier", "février", "février", "avril", "mai", "juin", "juillet"];

//Retirer le dernière valeur du tableau moi
// console.log(mois.pop());
document.querySelector(".fs-2").innerHTML = mois.pop();

//Afficher les valeurs du tableau en utilisant la méthode document.write
document.write(
  `<p class="container fs-2 fw-semibold bg-info text-center">${mois}</p>`
);

// Ajouter la valeur ‘août’ à la fin du tableau
// console.log(mois.push('août'));
document.querySelector(".fs-4").innerHTML = mois.push("août");

// Remplacer la valeur 'février' par ‘février’
/* 1er Methode */
let monthreplace = "février";
// console.log(monthreplace.replace("février", "Février")); Ou console.log(monthreplace.toString().replace("février", "Février"));
document.querySelector(".fs-5").innerHTML = monthreplace
  .toString()
  .replace("février", "Février");

// Afficher le nombre de valeurs du tableau en utilisant la méthode document.write
document.write(
  `<p class="container fs-2 fw-semibold bg-dark-subtle text-center">${mois.length}</p>`
);

// Afficher la troisième valeur du tableau
document.write(
  `<p class="container fs-2 fw-semibold bg-warning text-center">${mois[3]}</p>`
);
