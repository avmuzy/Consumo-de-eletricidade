function calcfridge() {
  var fridgeuse = document.getElementById('fridgeUse');
  var fridgNum = Number(fridgeuse.value);
  var result = (fridgNum * 300) / 1000;
  var res1 = document.getElementById('res1');
  res1.innerHTML = `${result}`;
}
function calctv() {
  var tv = document.getElementById('tvUse');
  var tvNum = Number(tv.value);
  var result = (tvNum * 200) / 1000;
  var res2 = document.getElementById('res2');
  res2.innerHTML = `${result}`;
}
function calcac() {
  var ac = document.getElementById('air_conditioningUse');
  var acNum = Number(ac.value);
  var result = (acNum * 1300) / 1000;
  var res3 = document.getElementById('res3');
  res3.innerHTML = `${result}`;
}
function calcMicroWave() {
  var microwave = document.getElementById('hoursmicrowave');
  var microNum = Number(microwave.value);
  var result = (microNum * 750) / 1000;
  var res4 = document.getElementById('res4');
  res4.innerHTML = `${result}`;
}
function calcWashM() {
  var washm = document.getElementById('washingMAchUse');
  var washmNum = Number(washm.value);
  var result = (washmNum * 1000) / 1000;
  var res5 = document.getElementById('res5');
  res5.innerHTML = `${result}`;
}
function total() {
  var daily = res1 + res2 + res3 + res4 + res5;
  var dailyNum = Number(daily.value);
  var dailyres = document.getElementById('daily');
  dailyres.innerHTML = `${dailyNum}`;
}
