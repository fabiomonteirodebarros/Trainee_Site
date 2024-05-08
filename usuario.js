function menuShow(){
    let menuMobile = document.querySelector('.mobile-menu')
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.querySelector('icon-menu').src="img/menu-aberto.png"
    } else{
        menuMobile.classList.add('open');
        document.querySelector('icon-menu').src="img/marca-cruzada"
    }
}

const isLeapYear=(year)=>{
    return(
        (year %4 === 0 && year % 100 !== 0 && year %400 !==0) ||
        (year % 100 === 0 && year %400 ===0)
    );
}
  
const getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28;
};

let calendar = document.querySelector('.calendar');
const month_names = [
    'Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro',
];

let month_picker = document.querySelector('#month-picker');
const dayTextFormate = document.querySelector('.day-text-formate');
const timeFormate = document.querySelector('.time-formate');
const dateFormate = document.querySelector('.date-formate');
  
month_picker.onclick = () => {
    month_list.classList.remove('hideonce');
    month_list.classList.remove('hide');
    month_list.classList.add('show');
    dayTextFormate.classList.remove('showtime');
    dayTextFormate.classList.add('hidetime');
    timeFormate.classList.remove('showtime');
    timeFormate.classList.add('hideTime');
    dateFormate.classList.remove('showtime');
    dateFormate.classList.add('hideTime');
};
  
const generateCalendar = (month, year) => {
    let calendar_days = document.querySelector('.calendar-days');
    calendar_days.innerHTML = '';
    let calendar_header_year = document.querySelector('#year');
    let days_of_month = [
      31,
      getFebDays(year),
      31,
      30,
      31,
      30,
      31,
      31,
      30,
      31,
      30,
      31,
    ];
    
    let currentDate = new Date();
    month_picker.innerHTML = month_names[month];
    calendar_header_year.innerHTML = year;
    let first_day = new Date(year, month);
  
  for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
      let day = document.createElement('div');
        if (i >= first_day.getDay()) {
            day.innerHTML = i - first_day.getDay() + 1;

            if (i - first_day.getDay() + 1 === currentDate.getDate() &&
          year === currentDate.getFullYear() &&
          month === currentDate.getMonth()
        ) {
                day.classList.add('current-date');
            }
        }
      calendar_days.appendChild(day);
    }
};
  
let month_list = calendar.querySelector('.month-list');
month_names.forEach((e, index) => {
    let month = document.createElement('div');
    month.innerHTML = `<div>${e}</div>`;
    month_list.append(month);
    month.onclick = () => {
      currentMonth.value = index;
      generateCalendar(currentMonth.value, currentYear.value);
      month_list.classList.replace('show', 'hide');
      dayTextFormate.classList.remove('hideTime');
      dayTextFormate.classList.add('showtime');
      timeFormate.classList.remove('hideTime');
      timeFormate.classList.add('showtime');
      dateFormate.classList.remove('hideTime');
      dateFormate.classList.add('showtime');
    };
});
  
(function () {
    month_list.classList.add('hideonce');
})();
document.querySelector('#pre-year').onclick = () => {
    --currentYear.value;
    generateCalendar(currentMonth.value, currentYear.value);
};
document.querySelector('#next-year').onclick = () => {
    ++currentYear.value;
    generateCalendar(currentMonth.value, currentYear.value);
};
  
let currentDate = new Date();
let currentMonth = { value: currentDate.getMonth() };
let currentYear = { value: currentDate.getFullYear() };
generateCalendar(currentMonth.value, currentYear.value);

const todayShowTime = document.querySelector('.time-formate');
const todayShowDate = document.querySelector('.date-formate');
  
const currshowDate = new Date();
const showCurrentDateOption = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    weekday: 'long',
};
const currentDateFormate = new Intl.DateTimeFormat(
    'pt-BR',
    showCurrentDateOption
).format(currshowDate);

todayShowDate.textContent = currentDateFormate;
setInterval(() => {
    const timer = new Date();
    const option = {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    };
    const formateTimer = new Intl.DateTimeFormat('en-us', option).format(timer);
    let time = `${`${timer.getHours()}`.padStart(
      2,
      '0'
    )}:${`${timer.getMinutes()}`.padStart(
      2,
      '0'
    )}: ${`${timer.getSeconds()}`.padStart(2, '0')}`;
    todayShowTime.textContent = formateTimer;
}, 1000);


const optionMenu = document.querySelector(".select-menu"),
        selectBtn = optionMenu.querySelector(".select-btn"),
        options = optionMenu.querySelectorAll(".option"),
        sBtn_text = optionMenu.querySelector(".sBtn-text");

selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

options.forEach(option=>{
    option.addEventListener("click", ()=>{
        let selectedOption = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOption;
        
        optionMenu.classList.toggle("active")
    })
})

const optionMenut = document.querySelector(".tratamentos-menu"),
        selectBtnt = optionMenut.querySelector(".select-btn-tra"),
        optionst = optionMenut.querySelectorAll(".option-tra"),
        sBtn_textt = optionMenut.querySelector(".sBtn-text-tra");

selectBtnt.addEventListener("click", () => optionMenut.classList.toggle("active"));

optionst.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOptiont = option.querySelector(".option-textt").innerText;
        sBtn_textt.innerText = selectedOptiont;
        optionMenut.classList.remove("active"); 
    });
});

const optionMenuti = document.querySelector(".time-menu"),
        selectBtnti = optionMenuti.querySelector(".select-btn-time"),
        optionsti = optionMenuti.querySelectorAll(".option-time"),
        sBtn_textti = optionMenuti.querySelector(".sBtn-text-time");

selectBtnti.addEventListener("click", () => optionMenuti.classList.toggle("active"));

optionsti.forEach(option => {
    option.addEventListener("click", () => {
        let selectedOptionti = option.querySelector(".option-texttt").innerText;
        sBtn_textti.innerText = selectedOptionti;
        optionMenuti.classList.remove("active"); 
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const optionsTime = document.querySelectorAll('.options-time .option-time');

    // Número mínimo e máximo de horários disponíveis para exibir
    const minAvailableSlots = 2;
    const maxAvailableSlots = 5;

    // Determinar aleatoriamente a quantidade de horários disponíveis a serem exibidos
    const numAvailableSlots = Math.floor(Math.random() * (maxAvailableSlots - minAvailableSlots + 1)) + minAvailableSlots;

    // Array para armazenar os índices dos horários disponíveis
    const availableSlotsIndices = [];

    // Preencher o array com índices aleatórios únicos
    while (availableSlotsIndices.length < numAvailableSlots) {
        const randomIndex = Math.floor(Math.random() * optionsTime.length);
        if (!availableSlotsIndices.includes(randomIndex)) {
            availableSlotsIndices.push(randomIndex);
        }
    }

    // Exibir apenas os horários disponíveis
    optionsTime.forEach((option, index) => {
        if (!availableSlotsIndices.includes(index)) {
            option.style.display = 'none';
        }
    });

    // Adicionar evento de clique para cada opção
    optionsTime.forEach(option => {
        option.addEventListener('click', () => {
            // Remover a classe 'selected' de todas as opções de horário
            optionsTime.forEach(opt => opt.classList.remove('selected'));

            // Adicionar a classe 'selected' apenas à opção de horário clicada
            option.classList.add('selected');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const calendarDays = document.querySelectorAll('.calendar-days div');
    let selectedDay = null;

    calendarDays.forEach(day => {
        day.addEventListener('click', function() {
            // Remove a classe 'current-date' do dia atual, se houver
            const currentDate = document.querySelector('.current-date');
            if (currentDate) {
                currentDate.classList.remove('current-date');
            }

            // Adiciona a classe 'current-date' ao dia selecionado
            this.classList.add('current-date');
            selectedDay = this;
        });
    });
});


const hamburguer = document.querySelector(".hamburguer");
const navMenu = document.querySelector(".nav-menu");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.addEventListener('DOMContentLoaded', function() {
    const reserveButton = document.querySelector('.btn-reserva');
    const thankYouMessage = document.getElementById('thank-you-message');
    const closeButton = document.getElementById('close-thank-you');
    const contentToBlur = document.querySelectorAll('.content-to-blur'); // Selecione os elementos específicos para desfocar

    reserveButton.addEventListener('click', function() {
        thankYouMessage.classList.add('show');
        contentToBlur.forEach(element => {
            element.classList.add('blur-background'); // Adiciona desfoque apenas aos elementos selecionados
        });
    });

    closeButton.addEventListener('click', function() {
        thankYouMessage.classList.remove('show');
        contentToBlur.forEach(element => {
            element.classList.remove('blur-background'); // Remove o desfoque
        });
    });
});