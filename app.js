// https://www.omnicalculator.com/health/quicki

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const QUICKIRadio = document.getElementById('QUICKIRadio');
const insulinRadio = document.getElementById('insulinRadio');
const glucoseRadio = document.getElementById('glucoseRadio');

let QUICKI;
let insulin = v1;
let glucose = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

QUICKIRadio.addEventListener('click', function() {
  variable1.textContent = 'Insulin';
  variable2.textContent = 'Glucose';
  insulin = v1;
  glucose = v2;
  result.textContent = '';
});

insulinRadio.addEventListener('click', function() {
  variable1.textContent = 'QUICKI';
  variable2.textContent = 'Glucose';
  QUICKI = v1;
  glucose = v2;
  result.textContent = '';
});

glucoseRadio.addEventListener('click', function() {
  variable1.textContent = 'QUICKI';
  variable2.textContent = 'Insulin';
  QUICKI = v1;
  insulin = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(QUICKIRadio.checked)
    result.textContent = `QUICKI = ${computeQUICKI().toFixed(2)}`;

  else if(insulinRadio.checked)
    result.textContent = `Insulin = ${computeinsulin().toFixed(2)}`;

  else if(glucoseRadio.checked)
    result.textContent = `Glucose = ${computeglucose().toFixed(2)}`;
})

// calculation

// QUICKI = 1 / [log(FI) + log(FG)]

function computeQUICKI() {
  return 1 / (Math.log10(Number(insulin.value)) + Math.log10(Number(glucose.value)));
}

function computeinsulin() {
  return Number(QUICKI.value) / Number(glucose.value);
}

function computeglucose() {
  return Number(QUICKI.value) / Number(insulin.value);
}