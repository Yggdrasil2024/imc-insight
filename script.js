// Le pont JS -> page. À recopier tel quel dans chaque projet S7 à S9.
const sortie = document.querySelector("#sortie");
function afficher(html) {
  sortie.innerHTML += html;
}
// Exemple d'utilisation :
afficher(`<p class="resultat">Votre IMC est de <strong>22.5</strong></p>`);
