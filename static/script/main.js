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

function saveTime() {
    let selectedTime = timePicker.value;
    if (selectedTime) {
        alert("Horário salvo: " + selectedTime);
        popup.style.display = "none";
    } else {
        alert("Por favor, selecione um horário.");
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
  
function fecharPopup() {
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



/// calendario 

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