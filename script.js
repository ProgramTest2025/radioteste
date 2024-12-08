// Obtém todos os botões de rádio, o player de áudio, e o status
const radioButtons = document.querySelectorAll('.radio-btn');
const radioPlayer = document.getElementById('radio-player');
const radioSource = document.getElementById('radio-source');
const statusDiv = document.getElementById('status');

// Função para alterar o áudio da estação e atualizar o status
function playRadioStation(event) {
    const radioUrl = event.target.getAttribute('data-url'); // Pega o URL da estação
    const stationName = event.target.textContent; // Pega o nome da estação
    
    // Atualiza a fonte do áudio
    radioSource.src = radioUrl;

    // Atualiza o status com o nome da estação
    statusDiv.textContent = `Reproduzindo: ${stationName}`;

    // Recarrega o player de áudio e começa a reprodução
    radioPlayer.load();
    radioPlayer.play().catch(error => {
        statusDiv.textContent = 'Erro ao tentar reproduzir a rádio.';
    });
}

// Adiciona o evento de clique a cada botão de rádio
radioButtons.forEach(button => {
    button.addEventListener('click', playRadioStation);
});
