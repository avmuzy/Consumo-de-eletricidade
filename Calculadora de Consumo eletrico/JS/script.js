function calcfridge() {
  var fridgeuse = document.getElementById('fridgeUse');
  var fridgNum = Number(fridgeuse.value);
  var result1 = (fridgNum * 300) / 1000;
  var res1 = document.getElementById('res1');
  res1.innerHTML = `${result1}`;
}
function calctv() {
  var tv = document.getElementById('tvUse');
  var tvNum = Number(tv.value);
  var result2 = (tvNum * 200) / 1000;
  var res2 = document.getElementById('res2');
  res2.innerHTML = `${result2}`;
}
function calcac() {
  var ac = document.getElementById('air_conditioningUse');
  var acNum = Number(ac.value);
  var power = document.getElementById('power');
  var powerNum = Number(power.value);
  var result3 = (acNum * powerNum) / 1000;
  var res3 = document.getElementById('res3');
  res3.innerHTML = `${result3}`;
}
function calcMicroWave() {
  var microwave = document.getElementById('hoursmicrowave');
  var microNum = Number(microwave.value);
  var result4 = (microNum * 750) / 1000;
  var res4 = document.getElementById('res4');
  res4.innerHTML = `${result4}`;
}
function calcWashM() {
  var washm = document.getElementById('washingMAchUse');
  var washmNum = Number(washm.value);
  var result5 = (washmNum * 1000) / 1000;
  var res5 = document.getElementById('res5');
  res5.innerHTML = `${result5}`;
}
function calcShower() {
  var shower = document.getElementById('shower');
  var showeNum = Number(shower.value);
  var result6 = (showeNum * 4400) / 1000;
  var res6 = document.getElementById('res6');
  res6.innerHTML = `${result6}`;
}

function total() {
  var daily = res1 + res2 + res3 + res4 + res5;
  var dailyNum = Number(daily.value);
  var dailyres = document.getElementById('daily');
  dailyres.innerHTML = `${dailyNum}`;
}
