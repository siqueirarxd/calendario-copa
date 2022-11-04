// /n = quebra de linha

let delay = -0.4

function createCard(date, day, games) {
  delay += 0.4
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>

      <ul>
           ${games}    
      </ul>
    </div>
  `
}

function createGame(player1, hour, player2) {
  return `
  <li>
          <img src="./assets/icon-${player1}.svg" alt="icon-${player1}" />
          <strong>${hour}</strong>
          <img src="./assets/icon-${player2}.svg" alt="icon-${player2}" />
        </li>
  `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "24/11",
    "Quinta",
    createGame("suica", "07:00", "camaroes") +
      createGame("portugal", "13:00", "gana") +
      createGame("brasil", "16:00", "servia")
  ) +
  createCard("28/11", "Segunda", createGame("brasil", "13:00", "suica")) +
  createCard("02/12", "Sexta", createGame("camaroes", "16:00", "brasil"))
