function calc() {
  var fridgeuse = document.getElementById('fridgeUse');
  var fridgNum = Number(fridgeuse.value);
  var result1 = (fridgNum * 300) / 1000;
  var res1 = document.getElementById('res1');
  res1.innerHTML = `${result1}`;

  var tv = document.getElementById('tvUse');
  var tvNum = Number(tv.value);
  var result2 = (tvNum * 200) / 1000;
  var res2 = document.getElementById('res2');
  res2.innerHTML = `${result2}`;

  var ac = document.getElementById('air_conditioningUse');
  var acNum = Number(ac.value);
  var power = document.getElementById('power');
  var powerNum = Number(power.value);
  var result3 = (acNum * powerNum) / 1000;
  var res3 = document.getElementById('res3');
  res3.innerHTML = `${result3}`;

  var microwave = document.getElementById('hoursmicrowave');
  var microNum = Number(microwave.value);
  var result4 = (microNum * 750) / 1000;
  var res4 = document.getElementById('res4');
  res4.innerHTML = `${result4}`;

  var washm = document.getElementById('washingMAchUse');
  var washmNum = Number(washm.value);
  var result5 = (washmNum * 1000) / 1000;
  var res5 = document.getElementById('res5');
  res5.innerHTML = `${result5}`;

  var shower = document.getElementById('shower');
  var showeNum = Number(shower.value);
  var showerPower = document.getElementById('showerPower');
  var powerNum = Number(showerPower.value);
  var result6 = (showeNum * powerNum) / 1000;
  var res6 = document.getElementById('res6');
  res6.innerHTML = `${result6}`;

  let grill = document.getElementById('grill');
  let grillNum = Number(grill.value);
  let result7 = (grillNum * 1200) / 1000;
  let res7 = document.getElementById('res7');
  res7.innerHTML = `${result7}`;

  let daily =
    result1 + result2 + result3 + result4 + result5 + result6 + result7;
  let dailyres = document.querySelector('div#daily');
  dailyres.innerHTML = `Total daily: ${daily}`;

  let monthly = daily * 30;
  let monthlyres = document.querySelector('div#monthly');
  monthlyres.innerHTML = `Total monthly (30days): ${monthly}`;
  let consumption = [
    result1,
    result2,
    result3,
    result4,
    result5,
    result6,
    result7,
  ];
  let hightCons = consumption[6];
  let lowCons = consumption[0];
  let resConsumo = document.querySelector('div#consumption');
  resConsumo.innerHTML = `The highest consumption was: ${hightCons} and the lower was: ${lowCons}`;
}
