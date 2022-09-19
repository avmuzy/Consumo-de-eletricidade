function calcfridge() {
  var fridgeuse = document.getElementById('fridgeUse');
  var power = 300;
  var result = (fridgeuse * power) / 1000;
  var res = document.getElementById('res');
  res.innerHTML = `${result}`;
}
