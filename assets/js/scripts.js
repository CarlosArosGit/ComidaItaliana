var items = [];
var valores = [];
var valorTotal = 0;
let itemCuenta = document.getElementById('comidaT');
let valorCuenta = document.getElementById('valorT');
let pValorTotal = document.getElementById('total');

//TRAGOS
var martini = document.getElementById("martini");
martini.addEventListener('change', function () {
  items.push('Martini');
  valores.push('2.550');
  let busqueda = '2.550';
  let indice = valores.indexOf(busqueda);
  var busquedaN = 'Martini';
  var indiceN = items.indexOf(busquedaN);
  let pnombre = document.createElement('p');
  let pvalor = document.createElement('p');
  if (martini.checked) {
    pnombre.innerText = items[indiceN];
    pnombre.setAttribute("id", "idMartini");
    itemCuenta.appendChild(pnombre);
    pvalor.innerText = '$' + valores[indice];
    pvalor.setAttribute("id", "idMartiniValor");
    valorCuenta.appendChild(pvalor);
    valorTotal = parseFloat(valorTotal) + parseFloat(valores[indice]);
    pValorTotal.innerHTML = '$' + valorTotal.toFixed(3);
  } else {
    if (items.includes(busquedaN)) {
      var tNombre = document.getElementById("idMartini");
      var tValor = document.getElementById("idMartiniValor");
      itemCuenta.removeChild(tNombre);
      valorCuenta.removeChild(tValor);
      valorTotal = parseFloat(valorTotal) - parseFloat(valores[indice]);
      if (isNaN(valorTotal) || valorTotal == 0) {
        pValorTotal.innerHTML = '$0';
      } else {
        if (valorTotal < 0) {
          pValorTotal.innerHTML = '$0';
        } else {
          pValorTotal.innerHTML = '$' + valorTotal.toFixed(3);
        }
      }
      items = items.filter(prod => prod != itemCuenta[indiceN]);
      valores = valores.filter(value => value != valores[indice]);
    }
  }
});


var cappuccino = document.getElementById("cappuccino");
cappuccino.addEventListener('change', function () {
  items.push('Cappuccino');
  valores.push('1.370');
  let busqueda = '1.370';
  let indice = valores.indexOf(busqueda);
  let busquedaN = 'Cappuccino';
  let indiceN = items.indexOf(busquedaN);
  let pnombre = document.createElement('p');
  let pvalor = document.createElement('p');
  if (cappuccino.checked) {
    pnombre.innerText = items[indiceN];
    pnombre.setAttribute("id", "idCappuccino");
    itemCuenta.appendChild(pnombre);
    pvalor.innerText = '$' + valores[indice];
    pvalor.setAttribute("id", "idCappuccinoValor");
    valorCuenta.appendChild(pvalor);
    valorTotal = parseFloat(valorTotal) + parseFloat(valores[indice]);
    pValorTotal.innerHTML = '$' + valorTotal.toFixed(3);
  } else {
    if (items.includes(busquedaN)) {
      var tNombre = document.getElementById("idCappuccino");
      var tValor = document.getElementById("idCappuccinoValor");
      itemCuenta.removeChild(tNombre);
      valorCuenta.removeChild(tValor);
      valorTotal = parseFloat(valorTotal) - parseFloat(valores[indice]);
      if (isNaN(valorTotal) || valorTotal == 0) {
        pValorTotal.innerHTML = '$0';
      } else {
        if (valorTotal < 0) {
          pValorTotal.innerHTML = '$0';
        } else {
          pValorTotal.innerHTML = '$' + valorTotal.toFixed(3);
        }
      }
      items = items.filter(prod => prod != itemCuenta[indiceN]);
      valores = valores.filter(value => value != valores[indice]);
    }
  }

});
var latte = document.getElementById("latte");
latte.addEventListener('change', function () {
  items.push('Latte');
  valores.push('1.350');
  let busqueda = '1.350';
  let indice = valores.indexOf(busqueda);
  let busquedaN = 'Latte';
  let indiceN = items.indexOf(busquedaN);
  let pnombre = document.createElement('p');
  let pvalor = document.createElement('p');
  if (latte.checked) {
    pnombre.innerText = items[indiceN];
    pnombre.setAttribute("id", "idLatte");
    itemCuenta.appendChild(pnombre);
    pvalor.innerText = '$' + valores[indice];
    pvalor.setAttribute("id", "idLatteValor");
    valorCuenta.appendChild(pvalor);
    valorTotal = parseFloat(valorTotal) + parseFloat(valores[indice])
    pValorTotal.innerHTML = '$' + valorTotal.toFixed(3);
  } else {
    if (items.includes(busquedaN)) {
      var tNombre = document.getElementById("idLatte");
      var tValor = document.getElementById("idLatteValor");
      itemCuenta.removeChild(tNombre);
      valorCuenta.removeChild(tValor);
      valorTotal = parseFloat(valorTotal) - parseFloat(valores[indice]);
      if (isNaN(valorTotal) || valorTotal == 0) {
        pValorTotal.innerHTML = '$0';
      } else {
        if (valorTotal < 0) {
          pValorTotal.innerHTML = '$0';
        } else {
          pValorTotal.innerHTML = '$' + valorTotal.toFixed(3);
        }
      }
      items = items.filter(prod => prod != itemCuenta[indiceN]);
      valores = valores.filter(value => value != valores[indice]);
    }
  }
});

var mojito = document.getElementById("mojito");
mojito.addEventListener('change', function () {
  items.push('Mojito');
  valores.push('2.290');
  let busqueda = '2.290';
  let indice = valores.indexOf(busqueda);
  let busquedaN = 'Mojito';
  let indiceN = items.indexOf(busquedaN);
  let pnombre = document.createElement('p');
  let pvalor = document.createElement('p');
  if (mojito.checked) {
    pnombre.innerText = items[indiceN];
    pnombre.setAttribute("id", "idMojito");
    itemCuenta.appendChild(pnombre);
    pvalor.innerText = '$' + valores[indice];
    pvalor.setAttribute("id", "idMojitoValor");
    valorCuenta.appendChild(pvalor);
    valorTotal = parseFloat(valorTotal) + parseFloat(valores[indice]);
    pValorTotal.innerHTML = '$' + valorTotal.toFixed(3);
  } else {
    if (items.includes(busquedaN)) {
      var tNombre = document.getElementById("idMojito");
      var tValor = document.getElementById("idMojitoValor");
      itemCuenta.removeChild(tNombre);
      valorCuenta.removeChild(tValor);
      valorTotal = parseFloat(valorTotal) - parseFloat(valores[indice]);
      if (isNaN(valorTotal) || valorTotal == 0) {
        pValorTotal.innerHTML = '$0';
      } else {
        if (valorTotal < 0) {
          pValorTotal.innerHTML = '$0';
        } else {
          pValorTotal.innerHTML = '$' + valorTotal.toFixed(3);
        }
      }
      items = items.filter(prod => prod != itemCuenta[indiceN]);
      valores = valores.filter(value => value != valores[indice]);
    }
  }
});

//COMIDA
var riso = document.getElementById("riso");
riso.addEventListener('change', function () {
  items.push('Insalata de riso');
  valores.push('6.750');
  let busqueda = '6.750';
  let indice = valores.indexOf(busqueda);
  let busquedaN = 'Insalata de riso';
  let indiceN = items.indexOf(busquedaN);
  let pnombre = document.createElement('p');
  let pvalor = document.createElement('p');
  if (riso.checked) {
    pnombre.innerText = items[indiceN];
    pnombre.setAttribute("id", "idRiso");
    itemCuenta.appendChild(pnombre);
    pvalor.innerText = '$' + valores[indice];
    pvalor.setAttribute("id", "idRisoValor");
    valorCuenta.appendChild(pvalor);
    valorTotal = parseFloat(valorTotal) + parseFloat(valores[indice]);
    pValorTotal.innerHTML = '$' + valorTotal.toFixed(3);
  } else {
    if (items.includes(busquedaN)) {
      var tNombre = document.getElementById("idRiso");
      var tValor = document.getElementById("idRisoValor");
      itemCuenta.removeChild(tNombre);
      valorCuenta.removeChild(tValor);
      valorTotal = parseFloat(valorTotal) - parseFloat(valores[indice]);
      if (isNaN(valorTotal) || valorTotal == 0) {
        pValorTotal.innerHTML = '$0';
      } else {
        if (valorTotal < 0) {
          pValorTotal.innerHTML = '$0';
        } else {
          pValorTotal.innerHTML = '$' + valorTotal.toFixed(3);
        }
      }
      items = items.filter(prod => prod != itemCuenta[indiceN]);
      valores = valores.filter(value => value != valores[indice]);
    }
  }
});

var cipollotti = document.getElementById("cipollotti");
cipollotti.addEventListener('change', function () {
  items.push('Insalata ai cipollotti');
  valores.push('5.990');
  let busqueda = '5.990';
  let indice = valores.indexOf(busqueda);
  let busquedaN = 'Insalata ai cipollotti';
  let indiceN = items.indexOf(busquedaN);
  let pnombre = document.createElement('p');
  let pvalor = document.createElement('p');
  if (cipollotti.checked) {
    pnombre.innerText = items[indiceN];
    pnombre.setAttribute("id", "idCipollotti");
    itemCuenta.appendChild(pnombre);
    pvalor.innerText = '$' + valores[indice];
    pvalor.setAttribute("id", "idCipollottiValor");
    valorCuenta.appendChild(pvalor);
    valorTotal = parseFloat(valorTotal) + parseFloat(valores[indice]);
    pValorTotal.innerHTML = '$' + valorTotal.toFixed(3);
  } else {
    if (items.includes(busquedaN)) {
      var tNombre = document.getElementById("idCipollotti");
      var tValor = document.getElementById("idCipollottiValor");
      itemCuenta.removeChild(tNombre);
      valorCuenta.removeChild(tValor);
      valorTotal = parseFloat(valorTotal) - parseFloat(valores[indice]);
      if (isNaN(valorTotal) || valorTotal == 0) {
        pValorTotal.innerHTML = '$0';
      } else {
        if (valorTotal < 0) {
          pValorTotal.innerHTML = '$0';
        } else {
          pValorTotal.innerHTML = '$' + valorTotal.toFixed(3);
        }
      }
      items = items.filter(prod => prod != itemCuenta[indiceN]);
      valores = valores.filter(value => value != valores[indice]);
    }
  }
});

var caprese = document.getElementById("caprese");
caprese.addEventListener('change', function () {
  items.push('Insalata caprese');
  valores.push('8.250');
  let busqueda = '8.250';
  let indice = valores.indexOf(busqueda);
  let busquedaN = 'Insalata caprese';
  let indiceN = items.indexOf(busquedaN);
  let pnombre = document.createElement('p');
  let pvalor = document.createElement('p');
  if (caprese.checked) {
    pnombre.innerText = items[indiceN];
    pnombre.setAttribute("id", "idCaprese");
    itemCuenta.appendChild(pnombre);
    pvalor.innerText = '$' + valores[indice];
    pvalor.setAttribute("id", "idCapreseValor");
    valorCuenta.appendChild(pvalor);
    valorTotal = parseFloat(valorTotal) + parseFloat(valores[indice]);
    pValorTotal.innerHTML = '$' + valorTotal.toFixed(3);
  } else {
    if (items.includes(busquedaN)) {
      var tNombre = document.getElementById("idCaprese");
      var tValor = document.getElementById("idCapreseValor");
      itemCuenta.removeChild(tNombre);
      valorCuenta.removeChild(tValor);
      valorTotal = parseFloat(valorTotal) - parseFloat(valores[indice]);
      if (isNaN(valorTotal) || valorTotal == 0) {
        pValorTotal.innerHTML = '$0';
      } else {
        if (valorTotal < 0) {
          pValorTotal.innerHTML = '$0';
        } else {
          pValorTotal.innerHTML = '$' + valorTotal.toFixed(3);
        }
      }
      items = items.filter(prod => prod != itemCuenta[indiceN]);
      valores = valores.filter(value => value != valores[indice]);
    }
  }
});