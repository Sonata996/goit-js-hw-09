
const elemenForm = {
  form: document.querySelector('.form'),
  delay: document.querySelector('[name="delay"]'),
  step: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]')
}
elemenForm.form.addEventListener('submit', onClickGeneratorPromises)







function createPromise(position, delay) {
  return new Promise((res, rej) => {
      const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        // Fulfill
        res({ position, delay })
      } else {
        // Reject
        rej({ position, delay })
      }
    },delay)
    })
}
  
function onClickGeneratorPromises(event) {
  event.preventDefault()
  let  valueDelay= Number(elemenForm.delay.value)
  let  valueStep= Number(elemenForm.step.value)
  let valueAmount = Number(elemenForm.amount.value)
  let counterPosition = 0
  

  for (let i = 1; i <= valueAmount; i += 1) {
    const foo = valueDelay + valueStep * (i -1);
    createPromise(i, foo)
      .then(({ position, delay }) => {
        console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
    
  }
  
}






























// function onClickGeneratorPromissory(event) {
//   event.preventDefault()
//   let counterPosition = 0
//   let valueDelay = Number(elemenForm.delay.value)
//   const valueStep = Number(elemenForm.step.value)
//   const valueAmount = elemenForm.amount.value
//   for (let i = 0; i < valueAmount; i += 1) {
//   timeOut = setTimeout(() => {
//       valueDelay += valueStep
//       counterPosition += 1
//       // createPromise(counterPosition, valueDelay)
//       createPromise(counterPosition[2], valueDelay)
  
  

    
//     },valueStep)
//   }
// }
//   function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   if (shouldResolve) {
//     // Fulfil
//     // console.log('fgbfdg');
//   Promise.then(({ position, delay }) => {
//   console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   } else {
//     // Reject
//     console.log('dsgfsdgf');
//     Promise.catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
//   }
//   }
//  createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   })