// Função para exibir todos os jogos na página
document.addEventListener("DOMContentLoaded", () => {
    const gamesContainer = document.getElementById("games-container");
    displayGames(games, gamesContainer);
});

// Função para exibir os jogos
function displayGames(gamesList, container) {
    container.innerHTML = ""; // Limpa o container
    gamesList.forEach(game => {
        const gameElement = document.createElement("div");
        gameElement.classList.add("game-card");

        gameElement.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
            <p>Ano: ${game.year}</p>
            <p>Plataforma: ${game.platform}</p>
        `;

        // Adicionar evento de clique para abrir o modal com a descrição do jogo
        gameElement.addEventListener('click', () => showGameDetails(game));

        container.appendChild(gameElement);
    });
}

// Função para exibir os detalhes do jogo no modal
function showGameDetails(game) {
    const modal = document.getElementById("game-modal");
    const gameTitle = document.getElementById("game-title");
    const gameDescription = document.getElementById("game-description");
    const gameYear = document.getElementById("game-year");
    const gamePlatform = document.getElementById("game-platform");

    // Preencher os dados do modal
    gameTitle.textContent = game.title;
    gameDescription.textContent = game.description;
    gameYear.textContent = game.year;
    gamePlatform.textContent = game.platform;

    // Exibir o modal
    modal.style.display = "block";
}

// Fechar o modal ao clicar no "X"
const closeModal = document.querySelector(".close");
closeModal.addEventListener("click", () => {
    const modal = document.getElementById("game-modal");
    modal.style.display = "none";
});

// Fechar o modal ao clicar fora da área do modal
window.addEventListener("click", (event) => {
    const modal = document.getElementById("game-modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Função de busca
function searchGame() {
    const query = document.getElementById("search-bar").value.toLowerCase();
    const filteredGames = games.filter(game =>
        game.title.toLowerCase().includes(query)
    );
    
    const gamesContainer = document.getElementById("games-container");
    displayGames(filteredGames, gamesContainer);
}

// Rolagem suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
