// Le pont JS -> page. À recopier tel quel dans chaque projet S7 à S9.
const sortie = document.querySelector("#sortie");
function afficher(html) {
  sortie.innerHTML += html;
}

//les variables
let personWeight = 40; // le poids de la personne
let Size = 1.77; //la taille de la personne
let IMCResult = 0;

function calcuLIMC(wgt, sz) {
  //on realise le calcule de imc
  let IMC = wgt / (sz * sz);

  //on aroundis à 2 chiffres après la virgule
  return Math.round(IMC * 100) / 100;
}

IMCResult = calcuLIMC(personWeight, Size);

// on afficher un recap des infos de la personne avec sont imc:
afficher(
  `<p class="resultat">Votre poid : <strong>${personWeight}kg</strong> et votre taille : <strong>${Size}m</strong></p>
  <p class="resultat maigreur-text">Votre IMC est de : <strong>${IMCResult}</strong></p>`,
);

//normal
personWeight = 36;
Size = 1.8;

IMCResult = calcuLIMC(personWeight, Size);

afficher(
  `<p class="resultat">Votre poid : <strong>${personWeight}kg</strong> et votre taille : <strong>${Size}m</strong></p>
  <p class="resultat normal-text">Votre IMC est de : <strong>${IMCResult}</strong></p>`,
);

//surpoids
personWeight = 89;
Size = 1.79;

IMCResult = calcuLIMC(personWeight, Size);

afficher(
  `<p class="resultat">Votre poid : <strong>${personWeight}kg</strong> et votre taille : <strong>${Size}m</strong></p>
  <p class="resultat surpoids-text">Votre IMC est de : <strong>${IMCResult}</strong></p>`,
);

//obesité
personWeight = 150;
Size = 1.9;

IMCResult = calcuLIMC(personWeight, Size);

afficher(
  `<p class="resultat">Votre poid : <strong>${personWeight}kg</strong> et votre taille : <strong>${Size}m</strong></p>
  <p class="resultat obese-text">Votre IMC est de : <strong>${IMCResult}</strong></p>`,
);
