const form = document.querySelector('form')
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results')

  if(height === "" || isNaN(height) || height<0 ){
    results.innerHTML = 'Please enter valid height ' + height;
  }else if(weight === "" || isNaN(weight) || weight<0){
    results.innerHTML = 'Please enter valid weight ' + weight;
  }else{
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    //show the result
    results.innerHTML = `<span>${bmi}</span>`;
  }
})

//https://stackblitz.com/edit/dom-project-chaiaurcode?file=1-colorChanger%2Fchaiaurcode.js,2-BMICalculator%2Fchaiaurcode.js,3-DigitalClock%2Fchaiaurcode.js,4-GuessTheNumber%2Fchaiaurcode.js