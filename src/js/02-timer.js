import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const HTMLElement = {
  inputTimer: document.querySelector('#datetime-picker'),
  startBtnInput: document.querySelector('[data-start]'),
  dataDays: document.querySelector('[data-days]'),
  dataHours: document.querySelector('[data-hours]'),
  dataMinutes: document.querySelector('[data-minutes]'),
  dataSeconds: document.querySelector('[data-seconds]'),
}
let selectedDate = undefined;
let currentDate = undefined;
let countdownInterval = null;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      HTMLElement.startBtnInput.disabled = false;
  
  },
};
HTMLElement.startBtnInput.addEventListener('click', () => {
  onDataSelection(options.selectedDates);
});
// HTMLElement.inputTimer.addEventListener('input', onDataSelection)

HTMLElement.startBtnInput.disabled = true;


const picker = flatpickr(HTMLElement.inputTimer, options);
function onDataSelection(selectedDates) {
  if (selectedDates || picker.selectedDates.length > 0) {
    selectedDate = selectedDates ? selectedDates[0].getTime() : picker.selectedDates[0].getTime();
    currentDate = new Date().getTime();
    if (selectedDate > currentDate) {
      clearInterval(countdownInterval);
      const result = selectedDate - currentDate;
      const timeObj = convertMs(result);
      onAdditionTimerMarkup(timeObj);
      countdownInterval = setInterval(() => {
        currentDate = new Date().getTime();
        const remainingTime = selectedDate - currentDate;
        if (remainingTime <= 1000) {
          clearInterval(countdownInterval);
          onAdditionTimerMarkup({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
          HTMLElement.startBtnInput.disabled = true;
          const timeObj = convertMs(remainingTime);
          onAdditionTimerMarkup(timeObj);
        }
      }, 1000);
    } else {
      window.alert("Please choose a date in the future");
    }
  }
}
function onAdditionTimerMarkup({ days, hours, minutes, seconds }) {
  HTMLElement.dataDays.textContent = addLeadingZero(days);
  HTMLElement.dataHours.textContent = addLeadingZero(hours);
  HTMLElement.dataMinutes.textContent = addLeadingZero(minutes);
  HTMLElement.dataSeconds.textContent = addLeadingZero(seconds);
}


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;
  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  return { days, hours, minutes, seconds };
}
function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}




















// import flatpickr from "flatpickr";
// import "flatpickr/dist/flatpickr.min.css";
// const HTMLElement = {
//   inputTimer: document.querySelector('#datetime-picker'),
//   startBtnInput: document.querySelector('[data-start]'),
//   dataDays: document.querySelector('[data-days]'),
//   dataHours: document.querySelector('[data-hours]'),
//   dataMinutes: document.querySelector('[data-minutes]'),
//   dataSeconds: document.querySelector('[data-seconds]'),
// };
// let selectedDate = undefined;
// let currentDate = undefined;
// let countdownInterval = null;
// const options = {
//   enableTime: true,
//   time_24hr: true,
//   defaultDate: new Date(),
//   minuteIncrement: 1,
//   onClose(selectedDates) {
//     onDataSelection(selectedDates);
//   },
// };
// HTMLElement.startBtnInput.addEventListener('click', () => {
//   onDataSelection(null);
// });
// const picker = flatpickr(HTMLElement.inputTimer, options);
// function onDataSelection(selectedDates) {
//   if (selectedDates || picker.selectedDates.length > 0) {
//     selectedDate = selectedDates ? selectedDates[0].getTime() : picker.selectedDates[0].getTime();
//     currentDate = new Date().getTime();
//     if (selectedDate > currentDate) {
//       clearInterval(countdownInterval);
//       const result = selectedDate - currentDate;
//       const timeObj = convertMs(result);
//       onAdditionTimerMarkup(timeObj);
//       countdownInterval = setInterval(() => {
//         currentDate = new Date().getTime();
//         const remainingTime = selectedDate - currentDate;
//         if (remainingTime <= 0) {
//           clearInterval(countdownInterval);
//           onAdditionTimerMarkup({ days: 0, hours: 0, minutes: 0, seconds: 0 });
//         } else {
//           const timeObj = convertMs(remainingTime);
//           onAdditionTimerMarkup(timeObj);
//         }
//       }, 1000);
//     } else {
//       window.alert("Please choose a date in the future");
//     }
//   }
// }
// function onAdditionTimerMarkup({ days, hours, minutes, seconds }) {
//   HTMLElement.dataDays.textContent = addLeadingZero(days);
//   HTMLElement.dataHours.textContent = addLeadingZero(hours);
//   HTMLElement.dataMinutes.textContent = addLeadingZero(minutes);
//   HTMLElement.dataSeconds.textContent = addLeadingZero(seconds);
// }
// function convertMs(ms) {
//   const second = 1000;
//   const minute = second * 60;
//   const hour = minute * 60;
//   const day = hour * 24;
//   const days = Math.floor(ms / day);
//   const hours = Math.floor((ms % day) / hour);
//   const minutes = Math.floor(((ms % day) % hour) / minute);
//   const seconds = Math.floor((((ms % day) % hour) % minute) / second);
//   return { days, hours, minutes, seconds };
// }
// function addLeadingZero(value) {
//   return value.toString().padStart(2, '0');
// }