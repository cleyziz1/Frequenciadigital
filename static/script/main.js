let popup = document.getElementById("popup");
let openBtn = document.getElementById("openBtn");
let closeBtn = document.getElementById("closeBtn");
let timePicker = document.getElementById("timePicker");

openBtn.onclick = function() {
    popup.style.display = "block";
}

closeBtn.onclick = function() {
    popup.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = "none";
    }
}

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    if (sidebar.style.right === '0px' || sidebar.style.right === '') {
        sidebar.style.right = '-50%';
    } else {
        sidebar.style.right = '0px';
    }
}

// backbutton 

document.getElementById('backButton').addEventListener('click', function(e) {
    e.preventDefault();
    
    window.history.back();
});

// popup confirmation

function saveTime() {

    document.getElementById('confirmationPopup').style.display = 'flex';

    setTimeout(function() {
        document.getElementById('confirmationPopup').style.display = 'none';
    }, 2000);
}

//// meses anteriores

function toggleMonths() {
    const months = document.getElementById('months');
    if (months.style.display === "none" || months.style.display === "") {
        months.style.display = "block";
    } else {
        months.style.display = "none";
    }
}

/// popup relatório
function mostrarPopupRelatorio() {
    const reportPopup = document.getElementById('reportPopupId');
    reportPopup.style.display = 'flex';
    
    setTimeout(function() {
      const reportGeradoPopup = document.getElementById('reportGeradoPopup');
      reportPopup.style.display = 'none'; 
      reportGeradoPopup.style.display = 'flex';
    }, 3000);
}
  
function fechaPopup() {
    const reportPopup = document.getElementById('reportPopupId');
    const reportGeradoPopup = document.getElementById('reportGeradoPopup');
    
    reportPopup.style.display = 'none';
    reportGeradoPopup.style.display = 'none';

}

////

function showCustomPopup() {
    const customPopup = document.getElementById('customPopupId');
    customPopup.style.display = 'block';
}

function closeCustomPopup() {
    const customPopup = document.getElementById('customPopupId');
    customPopup.style.display = 'none';
}

/// calendário 

function updateCalendar() {
    const currentDate = new Date();
    const months = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    const daysOfWeek = [
        "Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"
    ];

    const currentMonth = months[currentDate.getMonth()];
    const currentDay = currentDate.getDate();
    const currentDayOfWeek = daysOfWeek[currentDate.getDay()];

    const currentMonthElement = document.getElementById('currentMonth');
    currentMonthElement.textContent = currentMonth;

    const currentDateElement = document.getElementById('currentDate');
    currentDateElement.textContent = currentDay;

    const currentDayOfWeekElement = document.getElementById('currentDayOfWeek');
    currentDayOfWeekElement.textContent = currentDayOfWeek;

    console.log('Atualização em tempo real:');
    console.log('Mês:', currentMonth);
    console.log('Dia:', currentDay);
    console.log('Dia da Semana:', currentDayOfWeek);
}

setInterval(updateCalendar, 1000);

updateCalendar();

//////

function obterHorarios() {
    const horarioEntrada = localStorage.getItem('horarioEntrada');
    const horarioSaida = localStorage.getItem('horarioSaida');

    if (horarioEntrada) {
        document.querySelectorAll('.time')[0].textContent = horarioEntrada;
    }

    if (horarioSaida) {
        document.querySelectorAll('.time')[1].textContent = horarioSaida;
    }
}

obterHorarios();

function verificarTeclaEnter(event) {
    if (event.key === 'Enter') {
        confirmarEdicao();
    }
}

function abrirPopupEdicao(botao) {
    const popupEdicao = document.getElementById('popupEdicao');
    popupEdicao.style.display = 'block';
}

function confirmarEdicao() {
    const novoHorarioEntradaInput = document.getElementById('novoHorarioEntrada');
    const novoHorarioSaidaInput = document.getElementById('novoHorarioSaida');

    const horarioEntrada = document.querySelectorAll('.time')[0];
    const horarioSaida = document.querySelectorAll('.time')[1];

    horarioEntrada.textContent = novoHorarioEntradaInput.value;
    horarioSaida.textContent = novoHorarioSaidaInput.value;

    // Salvar os horários no localStorage
    localStorage.setItem('horarioEntrada', novoHorarioEntradaInput.value);
    localStorage.setItem('horarioSaida', novoHorarioSaidaInput.value);


    fecharPopup('popupEdicao');
}


function abrirPopupDeletar(button) {
    const popupDeletar = document.getElementById('popupDeletar');
    popupDeletar.style.display = 'block';

    // Define a div "info-day" atual para deleção
    const infoDay = button.closest('.info-day');
    popupDeletar.dataset.currentInfoDay = infoDay;
}

function deletarInfoDay() {
    const popupDeletar = document.getElementById('popupDeletar');
    const infoDay = popupDeletar.dataset.currentInfoDay;

    if (infoDay) {
        infoDay.remove(); // Remove a div "info-day"
    }

    fecharPopup('popupDeletar'); // Fecha o popup de confirmação
}

function confirmarDelecao() {
    const infoDayContainer = document.getElementById('infoDayContainer');
    const currentInfoDay = infoDayContainer.dataset.currentInfoDay;

    if (currentInfoDay) {
        infoDayContainer.removeChild(currentInfoDay);
    }

    fecharPopup('popupDeletar');
}

function fecharPopup(idPopup) {
    const popup1 = document.getElementById(idPopup);
    popup1.style.display = 'none';
}

