# POSTECH - FULLSTACK

Projeto front-end de formulário para envio de informações de grupo.

## Descrição

Esta aplicação coleta:
- 5 nomes de integrantes
- histórico do grupo

Ao enviar, os dados são validados e enviados via `POST` para uma API externa.

## Nomes
Luiz Davi
Felipe Souza
Richard
Igor Charles
Victoria

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)

## Estrutura

- `index.html`: estrutura da página e formulário
- `style.css`: estilos do layout, card e responsividade
- `script.js`: validação, envio `POST` e feedback visual

## Como executar

1. Abra a pasta do projeto.
2. Execute o arquivo `index.html` no navegador.

Opcional (recomendado): usar extensão Live Server no VS Code para facilitar testes.

## Fluxo do formulário

1. Usuário preenche os 5 campos de nome e o histórico.
2. JavaScript valida se os dados obrigatórios foram preenchidos.
3. É montado o objeto enviado para a API:

```json
{
  "names": ["Nome 1", "Nome 2", "Nome 3", "Nome 4", "Nome 5"],
  "message": "Texto do histórico"
}
```

4. A aplicação envia para:
- `https://fsdt-contact.onrender.com/contact`

5. Em caso de sucesso, exibe mensagem de sucesso.
6. Em caso de erro, exibe alerta de falha.

## Layout

- Cabeçalho escuro com conteúdo alinhado ao card.
- Card do formulário sobreposto ao cabeçalho.
- Área do botão separada por faixa cinza suave com divisor.
- Responsivo para telas menores.

## Melhorias futuras

- Exibir estado de carregamento no botão durante envio.
- Validar quantidade mínima de caracteres no histórico.
- Melhorar tratamento de erro com mensagens mais detalhadas.
- Adicionar testes de interface e integração da requisição.

