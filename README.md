# 📬 Newsletter Sign-up Form with Success Message

Solução desenvolvida para o desafio **Newsletter Sign-up Form with Success Message**, do [Frontend Mentor](https://www.frontendmentor.io).

🔗 **Site:** [anaclarissi.github.io/newsletter-sign-up](https://anaclarissi.github.io/newsletter-sign-up/)

🎯 **Desafio:** [Frontend Mentor — Newsletter sign-up form with success message](https://www.frontendmentor.io/challenges/newsletter-signup-form-with-success-message-3FC1AZbNrv)

> ⚠️ **Aviso:** este projeto foi desenvolvido **exclusivamente para fins de estudo e prática de frontend**, sem qualquer fim lucrativo. Todo o conteúdo (textos, ilustrações e marca fictícia) pertence ao desafio original do Frontend Mentor e é utilizado apenas como referência de aprendizado.

![Preview do projeto](./preview.jpg)

---

## 📋 Índice

- [Visão geral](#-visão-geral)
  - [O desafio](#o-desafio)
  - [Screenshots](#screenshots)
  - [Links](#links)
- [Meu processo](#-meu-processo)
  - [Construído com](#construído-com)
  - [O que aprendi](#o-que-aprendi)
  - [Recursos úteis](#recursos-úteis)
- [Autora](#-autora)

---

## 🔎 Visão geral

### O desafio

Os usuários devem ser capazes de:

- ✅ Inserir o e-mail e enviar o formulário;
- ✅ Visualizar uma mensagem de sucesso com o e-mail informado após o envio;
- ✅ Ver mensagens de validação caso:
  - o campo seja deixado em branco;
  - o e-mail informado não esteja em um formato válido;
- ✅ Visualizar o layout ideal de acordo com o tamanho da tela do dispositivo;
- ✅ Ver os estados de **hover** e **focus** em todos os elementos interativos da página.

### Screenshots

<p align="center">
  <img src="./screenshot-desktop.jpg" alt="Versão desktop do projeto" width="700"><br><br>
  <img src="./screenshot-mobile.jpg" alt="Versão mobile do projeto" width="300">
</p>

### Links

- 🌐 Solução: [github.com/anaclarissi/newsletter-sign-up](https://github.com/anaclarissi/newsletter-sign-up)
- 🚀 Live Site: [anaclarissi.github.io/newsletter-sign-up](https://anaclarissi.github.io/newsletter-sign-up/)

---

## ⚙️ Meu processo

### Construído com

- 🏗️ HTML5 semântico
- 🎨 CSS customizado, com [Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) e `@font-face`
- 📱 Flexbox
- 📐 Design Mobile-first
- ⚡ JavaScript Vanilla (sem frameworks ou bibliotecas)

### O que aprendi

Este projeto foi uma ótima oportunidade para reforçar a manipulação do DOM com JavaScript puro, especialmente no controle de estados da interface — alternando entre o formulário, a mensagem de erro e a mensagem de sucesso sem recarregar a página.

Para a validação do e-mail, utilizei uma expressão regular simples para checar o formato do endereço informado:

```js
const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if (regex.test(email)) {
  setEmailMessage(email);
  showSuccessMessage();
  closeContainer();
} else {
  showMessageError();
}
```

Também organizei a lógica em pequenas funções com responsabilidades únicas (`showMessageError`, `showSuccessMessage`, `closeContainer`, `cleanInput`, etc.), o que deixou o código mais legível e fácil de manter.

No CSS, usei a tag `<picture>` com diferentes `<source>` para servir as ilustrações mais adequadas a cada breakpoint (mobile, tablet e desktop), garantindo uma experiência responsiva sem comprometer a qualidade visual:

```html
<picture id="img">
  <source media="(max-width: 450px)" srcset="./src/assets/images/illustration-sign-up-mobile.svg">
  <source media="(max-width: 768px)" srcset="./src/assets/images/illustration-sign-up-tablet.svg">
  <img src="./src/assets/images/illustration-sign-up-desktop.svg" alt="Illustration Sign Up">
</picture>
```

### Recursos úteis

- [MDN Web Docs — Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions) — ajudou a entender melhor a validação do e-mail via regex.
- [MDN Web Docs — `<picture>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture) — referência para a implementação de imagens responsivas.
- [Frontend Mentor](https://www.frontendmentor.io) — pela proposta de desafios realistas que ajudam a praticar HTML, CSS e JS na prática.

---

## 👩‍💻 Autora

- GitHub — [@anaclarissi](https://github.com/anaclarissi)
- Frontend Mentor — [@anaclarissi](https://www.frontendmentor.io/profile/anaclarissi)

---

<p align="center">Feito com 💜 para fins de estudo e prática de frontend.</p>