import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const HTMLElement = {
  inputTimer: document.querySelector('#datetime-picker'),
  startBtnInput: document.querySelector('[data-start]'),
  dataDays: document.querySelector('#data-days'),
  dataHours: document.querySelector('#data-hours'),
  dataMinutes: document.querySelector('#data-minutes'),
  dataSeconds: document.querySelector('#data-seconds'),
}
let selectedDate = undefined
let currentData = undefined
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    
    onDataSelection(selectedDates)
  },
};
HTMLElement.startBtnInput.addEventListener('click', onDataSelection)
 
flatpickr(HTMLElement.inputTimer, options)
// HTMLElement.startBtnInput.disabled = true;

function onDataSelection(selectedDates) {
  selectedDate = selectedDates[0].getTime();
  currentData = new Date().getTime() 

  if (selectedDate > currentData) {
   const result =  selectedDate - currentData
    convertMs(result)
  } else {
    window.alert("Please choose a date in the future")
  }
}
function onAdditionTimerMarcup({ days, hours, minutes, seconds }) {
  HTMLElement.dataDays.textContent = days
  HTMLElement.dataHours.textContent = hours
  HTMLElement.dataMinutes.textContent = minutes
  HTMLElement.dataSeconds.textContent = seconds
}


function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  console.log(days)
  const hours = Math.floor((ms % day) / hour);
  console.log(hours)
  const minutes = Math.floor(((ms % day) % hour) / minute);
  console.log(minutes)
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  console.log(seconds)
  onAdditionTimerMarcup()
  return { days, hours, minutes, seconds };
}

