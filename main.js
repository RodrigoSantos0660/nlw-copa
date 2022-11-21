function creatGame(player1, hour, player2) {
  return `
     <li>
        <img src="./assets/icon_${player1}.svg" alt="bandeira do ${player1}"/>
            <strong>${hour}</strong>
         <img src="./assets/icon_${player2}.svg"alt="bandeira da ${player2}"/>
     </li> `;
}
let delay = -0.3;
function creatCard(date, day, Games) {
  delay = delay + 0.3;
  return `<div class="cards" style="animation-delay:${delay}s">
                <h2>${date}<span>${day}</span></h2>
                <ul>
                   ${Games}
                </ul>
            </div>
    `;
}
document.querySelector("#cards").innerHTML =
  creatCard("20/11", "domingo", creatGame("catar", "13:00", "equador")) +
  creatCard(
    "21/11",
    "segunda",
    creatGame("inglaterra", "10:00", "ira") +
      creatGame("senegal", "13:00", "holanda") +
      creatGame("estados_unidos", "16:00", "gales")
  ) +
  creatCard(
    "22/11",
    "terca",
    creatGame("argentina", "07:00", "arabia_saudita") +
      creatGame("dinamarca", "10:00", "tunisia") +
      creatGame("mexico", "13:00", "polonia") +
      creatGame("franca", "16:00", "australia")
  ) +
  creatCard(
    "23/11",
    "quarta",
    creatGame("marrocos", "07:00", "croacia") +
      creatGame("alemanha", "10:00", "japao") +
      creatGame("espanha", "13:00", "costa_rica") +
      creatGame("belgica", "16:00", "canada")
  ) +
  creatCard(
    "24/11",
    "quinta",
    creatGame("suica", "07:00", "camaroes") +
      creatGame("uruguai", "10:00", "coreia_sul") +
      creatGame("portugal", "13:00", "gana") +
      creatGame("brasil", "16:00", "servia")
  ) +
  creatCard(
    "25/11",
    "sexta",
    creatGame("gales", "07:00", "ira") +
      creatGame("catar", "10:00", "senegal") +
      creatGame("holanda", "13:00", "equador") +
      creatGame("inglaterra", "16:00", "estados_unidos")
  ) +
  creatCard(
    "26/11",
    "sabado",
    creatGame("tunisia", "07:00", "australia") +
      creatGame("polonia", "10:00", "arabia_saudita") +
      creatGame("franca", "13:00", "dinamarca") +
      creatGame("argentina", "16:00", "mexico")
  ) +
  creatCard(
    "27/11",
    "domingo",
    creatGame("japao", "07:00", "costa_rica") +
      creatGame("belgica", "10:00", "marrocos") +
      creatGame("croacia", "13:00", "canada") +
      creatGame("espanha", "16:00", "alemanha")
  ) +
  creatCard(
    "28/11",
    "segunda",
    creatGame("camaroes", "07:00", "servia") +
      creatGame("coreia_sul", "10:00", "gana") +
      creatGame("brasil", "13:00", "suica") +
      creatGame("portugal", "16:00", "uruguai")
  ) +
  creatCard(
    "29/11",
    "terça",
    creatGame("equador", "07:00", "senegal") +
      creatGame("holanda", "10:00", "catar") +
      creatGame("ira", "13:00", "estados_unidos") +
      creatGame("catar", "16:00", "inglaterra")
  ) +
  creatCard(
    "30/11",
    "quarta",
    creatGame("tunisia", "07:00", "franca") +
      creatGame("australia", "10:00", "dinamarca") +
      creatGame("polonia", "13:00", "argentina") +
      creatGame("arabia_saudita", "16:00", "mexico")
  ) +
  creatCard(
    "01/12",
    "quinta",
    creatGame("croacia", "07:00", "belgica") +
      creatGame("canada", "10:00", "marrocos") +
      creatGame("japao", "13:00", "espanha") +
      creatGame("costa_rica", "16:00", "alemanha")
  ) +
  creatCard(
    "02/12",
    "sexta",
    creatGame("coreia_sul", "07:00", "portugal") +
      creatGame("gana", "10:00", "uruguai") +
      creatGame("servia", "13:00", "suica") +
      creatGame("camaroes", "16:00", "brasil")
  );
