// Le pont JS -> page. À recopier tel quel dans chaque projet S7 à S9.
const sortie = document.querySelector("#sortie");
function afficher(html) {
  sortie.innerHTML += html;
}

//les variables
let personWeight = 40; // le poids de la personne
let Size = 1.77; //la taille de la personne
let IMCResult = 0;
let categorie = "";

function calcuLIMC(wgt, sz) {
  //on realise le calcule de imc
  let IMC = wgt / (sz * sz);

  //on aroundis à 2 chiffres après la virgule
  return Math.round(IMC * 100) / 100;
}

function return_category(imc) {
  if (imc <= 18.5) {
    return "Maigreur";
  } else if (imc > 18.5 && imc <= 25) {
    return "Normal";
  } else if (imc > 25 && imc <= 30) {
    return "Surpoids";
  } else if (imc > 30) {
    return "Obesité";
  } else {
    return "erreur";
  }
}

IMCResult = calcuLIMC(personWeight, Size);
categorie = return_category(IMCResult);

// on afficher un recap des infos de la personne avec sont imc:
afficher(
  `<p class="resultat">Votre poid : <strong>${personWeight}kg</strong> et votre taille : <strong>${Size}m</strong></p>
  <p class="resultat maigreur-text">Votre IMC est de : <strong>${IMCResult} </strong><br><em>Categorie: </em> (${categorie})</p>`,
);

//normal
personWeight = 76;
Size = 1.8;

IMCResult = calcuLIMC(personWeight, Size);
categorie = return_category(IMCResult);

afficher(
  `<p class="resultat">Votre poid : <strong>${personWeight}kg</strong> et votre taille : <strong>${Size}m</strong></p>
  <p class="resultat normal-text">Votre IMC est de : <strong>${IMCResult} </strong><br><em>Categorie: </em> (${categorie})</p>`,
);

//surpoids
personWeight = 89;
Size = 1.79;

IMCResult = calcuLIMC(personWeight, Size);
categorie = return_category(IMCResult);

afficher(
  `<p class="resultat">Votre poid : <strong>${personWeight}kg</strong> et votre taille : <strong>${Size}m</strong></p>
  <p class="resultat surpoids-text">Votre IMC est de : <strong>${IMCResult} </strong><br><em>Categorie: </em> (${categorie})</p>`,
);

//obesité
personWeight = 150;
Size = 1.9;

IMCResult = calcuLIMC(personWeight, Size);
categorie = return_category(IMCResult);
afficher(
  `<p class="resultat">Votre poid : <strong>${personWeight}kg</strong> et votre taille : <strong>${Size}m</strong></p>
  <p class="resultat obese-text">Votre IMC est de : <strong>${IMCResult} </strong><br><em>Categorie: </em> (${categorie})</p>`,
);
