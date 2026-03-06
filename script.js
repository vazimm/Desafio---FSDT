// Seleciona o formulário
const form = document.getElementById('groupForm');

// Evento de envio do formulário
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Coleta os dados do formulário
    const nomes = [];
    for (let i = 1; i <= 5; i++) {
        const nome = document.getElementById(`nome${i}`).value.trim();
        if (nome) {
            nomes.push(nome);
        }
    }

    const historico = document.getElementById('historico').value.trim();

    // Validação básica
    if (nomes.length === 0 || !historico) {
        alert('Por favor, preencha todos os campos!');
        return;
    }

    // Objeto com os dados do grupo
    const groupData = {
        names: nomes,
        message: historico
    };

    // Requisição POST para a API
    fetch('https://fsdt-contact.onrender.com/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(groupData)
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`Erro na requisição: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            alert('✓ Formulário enviado com sucesso!');
            showSuccessMessage();
        })
        .catch((error) => {
            alert('✗ Erro ao enviar formulário. Tente novamente.');
        });

    form.reset();
});

// Função para exibir mensagem de sucesso
function showSuccessMessage() {
    // Remove mensagem anterior se existir
    const existingMessage = document.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }

    // Cria elemento de mensagem
    const message = document.createElement('div');
    message.className = 'success-message';
    message.textContent = '✓ Formulário enviado com sucesso!';

    // Insere a mensagem no DOM
    const formCard = document.querySelector('.form-card');
    formCard.insertBefore(message, formCard.firstChild);

    // Remove a mensagem após 3 segundos
    setTimeout(() => {
        message.remove();
    }, 3000);
}

// Validação em tempo real
const inputs = document.querySelectorAll('input[type="text"], textarea');
inputs.forEach(input => {
    input.addEventListener('focus', function () {
        this.style.borderColor = '#c41e3a';
    });

    input.addEventListener('blur', function () {
        if (!this.value.trim()) {
            this.style.borderColor = '#ddd';
        }
    });

    input.addEventListener('input', function () {
        // Opcional: Remove a borda vermelha quando o usuário começa a digitar
        if (this.value.trim()) {
            this.style.borderColor = '#ddd';
        }
    });
});

// Função para limpar o formulário
function clearForm() {
    form.reset();
    inputs.forEach(input => {
        input.style.borderColor = '#ddd';
    });
}

// Exporta a função clearForm para uso global
window.clearForm = clearForm;
