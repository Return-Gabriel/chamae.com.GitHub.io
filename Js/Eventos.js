    'use strict';

//Enabling Mobile Menu

const menuToggleBtn = document.querySelector('[data-navbar-toggle-btn]');
const navbar = document.querySelector('[data-navbar]');

const elemToggleFunc = function(elem) { elem.classList.toggle("active"); }
menuToggleBtn.addEventListener("click", function() { elemToggleFunc(navbar); });

//Enabling Go to Top

const goTopBtn = document.querySelector('[data-go-top]');

window.addEventListener('scroll', function() {
    if(window.scrollY >= 800) {
        goTopBtn.classList.add('active');
    } else {
        goTopBtn.classList.remove('active');
    }
})


const video = document.getElementById("video");
const circlePlayButton = document.getElementById("circle-play-b");

function togglePlay() {
	if (video.paused || video.ended) {
		video.play();
	} else {
		video.pause();
	}
}

circlePlayButton.addEventListener("click", togglePlay);
video.addEventListener("playing", function () {
	circlePlayButton.style.opacity = 0;
});
video.addEventListener("pause", function () {
	circlePlayButton.style.opacity = 1;
});







'use strict';

const carouselItems = document.querySelectorAll('.carousel__item');
console.log(carouselItems)
let currentItem = document.querySelector('.carousel__item--main');
const leftBtn = document.querySelector('#leftBtn');
const rightBtn = document.querySelector('#rightBtn');


rightBtn.addEventListener('click', function() {
    currentItem = document.querySelector('.carousel__item--right');
    const leftItem = document.querySelector('.carousel__item--main');
    carouselItems.forEach((item,i) => {
        item.classList = 'carousel__item';
    });
    currentItem.classList.add('carousel__item--main');
    leftItem.classList.add('carousel__item--left');
    const currentId = Array.from(carouselItems).indexOf(currentItem);
    const rightItem = currentId === carouselItems.length -1 ? carouselItems[0] : carouselItems[currentId +1];
    rightItem.classList.add('carousel__item--right');
});

leftBtn.addEventListener('click', function() {
    currentItem = document.querySelector('.carousel__item--left');
    const rightItem = document.querySelector('.carousel__item--main');
    carouselItems.forEach((item,i) => {
        item.classList = 'carousel__item';
    });
    currentItem.classList.add('carousel__item--main');
    rightItem.classList.add('carousel__item--right');
    const currentId = Array.from(carouselItems).indexOf(currentItem);
    const leftItem = currentId === 0 ? carouselItems[carouselItems.length-1] : carouselItems[currentId-1];
    leftItem.classList.add('carousel__item--left');
});



// ***********************************************************************
//                  JS DO CHATBOOT INICIO 
// ***********************************************************************
var $messages, etapa = 0, nomeUsuario = '';


  
$(document).ready(function () {
  const $chatBox = $('#chatBox');
  const $chatBody = $('.chat-body');

  // Hover no avatar mostra o balão
  $('#chat-avatar').hover(function () {
    $('#chat-tooltip').fadeIn();
  }, function () {
    $('#chat-tooltip').fadeOut();
  });

  // Abrir chat
  $('#chat-avatar').click(() => {
    $chatBox.fadeIn();
    $('#chat-button-container').fadeOut();
    iniciarChat();
  });

  // Fechar chat e limpar mensagens
  $('#btnFecharChat').click(() => {
    $chatBox.fadeOut();
    $('#chat-button-container').fadeIn();
    $('.chat-body').empty();
  });

  // Enviar mensagem
  $('.message-submit').click(insertMessage);
  $(window).on('keydown', function (e) {
    if (e.which == 13) insertMessage();
  });

  function insertMessage() {
    const msg = $('.message-input').val().trim();
    if (!msg) return;
    addMessage(msg, 'user');
    $('.message-input').val('');

    if (etapa === 1) {
      setTimeout(() => {
        addMessage("Legal! Qual o seu nome?");
        etapa = 2;
      }, 1000);

    } else if (etapa === 2) {
      nomeUsuario = msg;
      setTimeout(() => {
        addMessage(`Prazer, ${nomeUsuario}! Escolha uma das opções abaixo:`);
        mostrarOpcoesPrincipais();
        etapa = 3;
      }, 1000);

    } else if (etapa === 4) {
      setTimeout(() => {
        addMessage(`Poxa, ${nomeUsuario}, infelizmente não será possível te ajudar com esse assunto agora.`);
        setTimeout(() => {
          addMessage("Agradecemos seu contato! Foi um prazer falar com você. Abraços 🤗");
        }, 1500);
      }, 1000);
    }
  }

  function addMessage(content, who = 'bot') {
  const div = $('<div>').addClass(`message ${who}`);

  // Se o conteúdo parecer HTML (ex: contém uma tag <button>), usamos html(), senão usamos text()
  if (/<[a-z][\s\S]*>/i.test(content)) {
    div.html(content);
  } else {
    div.text(content);
  }

  $chatBody.append(div);
  $chatBody.scrollTop($chatBody[0].scrollHeight);
}


  function iniciarChat() {
    setTimeout(() => {
      addMessage("Olá! Eu sou a Sofia 🤖");
      setTimeout(() => {
        addMessage("Como posso te ajudar hoje?");
        etapa = 1;
      }, 1000);
    }, 500);
  }

  function mostrarOpcoesPrincipais() {
    const html = `
      <div style="display: flex; flex-direction: column; gap: 5px;">
        <button onclick="escolherOpcaoPrincipal(1)" style="padding: 8px; background: #2ecc71; color: white; border: none; border-radius: 5px;">1 - Dúvida sobre sistema</button>
        <button onclick="escolherOpcaoPrincipal(2)" style="padding: 8px; background: #3498db; color: white; border: none; border-radius: 5px;">2 - Falar com comercial</button>
        <button onclick="escolherOpcaoPrincipal(3)" style="padding: 8px; background: #e67e22; color: white; border: none; border-radius: 5px;">3 - Outros</button>
      </div>
    `;
    $chatBody.append(`<div class="message bot">${html}</div>`);
    $chatBody.scrollTop($chatBody[0].scrollHeight);
  }

  window.escolherOpcaoPrincipal = function (opcao) {
    if (opcao === 1) {
      addMessage("1 - Dúvida sobre sistema", "user");
      setTimeout(() => {
        const html = `
          <div style="display: flex; flex-direction: column; gap: 5px;">
            <button onclick="responderSistema(1)" style="padding: 8px; background: #1abc9c; color: white; border: none; border-radius: 5px;">1 - Sobre o sistema</button>
            <button onclick="responderSistema(2)" style="padding: 8px; background: #9b59b6; color: white; border: none; border-radius: 5px;">2 - Plataformas disponíveis</button>
          </div>
        `;
        addMessage(html, "bot");
      }, 800);

    } else if (opcao === 2) {
      addMessage("2 - Falar com comercial", "user");
      setTimeout(() => {
        const html = `
          <div style="display: flex; flex-direction: column; gap: 5px;">
            <button onclick="responderComercial(1)" style="padding: 8px; background: #16a085; color: white; border: none; border-radius: 5px;">1 - Falar com um atendente</button>
            <button onclick="responderComercial(2)" style="padding: 8px; background: #2980b9; color: white; border: none; border-radius: 5px;">2 - Seguir com atendimento Sofia</button>
          </div>
        `;
        addMessage(html, "bot");
      }, 800);

    } else if (opcao === 3) {
      addMessage("3 - Outros", "user");
      setTimeout(() => {
        addMessage(`Tudo bem, ${nomeUsuario}, qual assunto você gostaria de saber?`);
        etapa = 4;
      }, 800);
    }
  }

  window.responderSistema = function (opcao) {
    if (opcao === 1) {
      addMessage("1 - Sobre o sistema", "user");
      setTimeout(() => {
        addMessage("Somos uma empresa focada na gestão de chamados que facilita muito a vida dos trabalhadores e aumenta a produtividade.");
      }, 800);
    } else if (opcao === 2) {
      addMessage("2 - Plataformas disponíveis", "user");
      setTimeout(() => {
        addMessage("Nossa empresa fornece sistemas mobile, desktop e web.");
      }, 800);
    }
  }

  window.responderComercial = function (opcao) {
    if (opcao === 1) {
      addMessage("1 - Falar com um atendente", "user");
      setTimeout(() => {
        addMessage("Em breve um atendente humano entrará em contato com você, aguarde um momento.");
      }, 800);
    } else if (opcao === 2) {
      addMessage("2 - Seguir com atendimento Sofia", "user");
      setTimeout(() => {
        addMessage(`Perfeito, ${nomeUsuario}, vamos continuar! 😊`);
      }, 800);
    }
  }

});
// ***********************************************************************
//                  FIM DO CHATBOOT INICIO 
// ***********************************************************************

