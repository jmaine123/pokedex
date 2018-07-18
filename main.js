// function open(){
//   page3 = document.getElementById('lastpage');
//
//   page3.classList.add('hidden');
// }

allPokemon = []
function createPokemon(name,hp,attack,defense){
  var pokemon = {
    name: name,
    hp:hp,
    attack: attack,
    defense: defense,
  }
  allPokemon.push(pokemon);
}

var trainer= {
  name: 'Jermaine',
  age: 27,
  pokeballs: allPokemon,
  all: function() {
    return allPokemon;
  },
  get: function(name) {
    for(i = 0; i < 3; i++){
      return this.pokeballs;
    }

  }
}




function updateInfoScreen(myObj){
  var pokeHeader = document.createElement('h1');
  var info = document.getElementById('info');
  var infoTxt = document.createTextNode(myObj.name);
  var list = document.createElement('ol');
  list.id = 'list';
  var listhp = document.createElement('li');
  var hp = document.createTextNode('hp: ' + myObj.stats[5]['base_stat']);
  var attack = document.createTextNode('attack: ' + myObj.stats[4]['base_stat']);
  var listattack = document.createElement('li');
  var defense = document.createTextNode('defense: ' + myObj.stats[3]['base_stat']);
  var listdefense = document.createElement('li');
  var space = document.createElement('br')
  var listabilities = document.createElement('li');
  var abilities = document.createTextNode('Abilities include ' + myObj.abilities[0].ability.name + ' '+ 'and ' + myObj.abilities[1].ability.name)

  console.log(abilities)


  pokeHeader.appendChild(infoTxt)
  info.appendChild(pokeHeader);
  listhp.appendChild(hp);
  list.appendChild(listhp);
  listattack.appendChild(attack);
  list.appendChild(listattack);
  listdefense.appendChild(defense);
  list.appendChild(listdefense)
  list.appendChild(space);
  listabilities.appendChild(abilities);
  list.appendChild(listabilities)
  info.appendChild(list);




}


jolteon = "https://pokeapi.co/api/v2/pokemon/135/"
sharpedo = "https://pokeapi.co/api/v2/pokemon/319/"
primeape = "https://pokeapi.co/api/v2/pokemon/057"

function loadDoc(primeape) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var header = document.createElement('h1');
      header.style.color = 'white';
      var pic = document.createElement('img');
      pic.id = 'pic'
      var screen = document.getElementById('screen');
      var myObj = JSON.parse(this.responseText);
      pic.src = myObj.sprites["front_shiny"];
      // pic.src = 'https://orig00.deviantart.net/5c45/f/2015/311/a/9/mega_sharpedo2_by_mz15-d9ftc9p.png'
      screen.appendChild(pic);
      screen.style.backgroundColor = 'blue';
      var txt = document.createTextNode(myObj.name);
      header.appendChild(txt);
      screen.appendChild(header);

      updateInfoScreen(myObj);

    }
  };
  xhttp.open("GET", primeape, true);
  xhttp.send();
}

function clear(){
  x = document.getElementsById('img')
  x.remove();

}


// loadDoc("https://pokeapi.co/api/v2/pokemon/319/");

// loadDoc('https://pokeapi.co/api/v2/pokemon/320/');
