// Creo un array con la lista della spesa

const listaSpesa = ['pane',
'uova',
'zucchero',
'frutta',
'verdura',
'farina',
'affettati',
'pasta'];

// Prendo l'UL

const ulLista = document.getElementById('lista');

// Creo il contatore per la lista

let contatore = 0;

// Ciclo while per stampare gli elementi della lista

while (contatore < listaSpesa.length) {
  
  ulLista.innerHTML += '<li>' + listaSpesa[contatore] + '</li>';

  contatore++;
}