// function open(){
//   page3 = document.getElementById('lastpage');
//
//   page3.classList.add('hidden');
// }

allPokemon = [];

function createPokemon(name, hp, attack, defense, abilities) {

  var pokemon = {
    name: name,
    hp: hp,
    attack: attack,
    defense: defense,
    abilities: abilities
  }

  for (each in allPokemon) {
    if (allPokemon[each]['name'] == pokemon.name) {
      return;
    }
  }
  allPokemon.push(pokemon);
}

var trainer = {
  name: 'Jermaine',
  age: 27,
  pokeballs: allPokemon,
  all: function() {
    return allPokemon;
  },
  get: function(name) {
    for (i = 0; i < allPokemon.length; i++) {
      if (name === this.pokeballs[i].name) {
        console.log(this.pokeballs[i]);
      }
    }


  }
}

function clearScreen() {
  var parent2 = document.getElementById('info');
  var parent1 = document.getElementById('screen');
  var pic = document.getElementById('pic');
  var lis = document.getElementById("list");
  var header2 = document.getElementById('pokeHeader');
  var header1 = document.getElementById('pokemonName');

  parent2.removeChild(lis);
  parent2.removeChild(header2);
  parent1.removeChild(pic);
  parent1.removeChild(header1)

  // for(var i = 0;i < lis.length;i++) {
  //     parent.removeChild(lis[i]);
  // }
}


function updateInfoScreen(myObj) {
  var lights = document.getElementById('blueLight');
  lights.style.color = "white";
  var info = document.getElementById('info');
  var pokeHeader = document.createElement('h1');
  pokeHeader.id = 'pokeHeader'
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
  var abilities = document.createTextNode('Abilities include ' + myObj.abilities[0].ability.name + ' ' + 'and ' + myObj.abilities[1].ability.name)


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


jolteon = 135;
sharpedo = 319;
primeape = 57;
scizor = 212;


function loadDoc(number) {
  url = "https://pokeapi.co/api/v2/pokemon/"
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

      var myObj = JSON.parse(this.responseText);

      var name = myObj.name;
      var hp = myObj.stats[5]['base_stat'];
      var attack = myObj.stats[4]['base_stat'];
      var defense = myObj.stats[3]['base_stat'];
      var abilities = [myObj.abilities[0].ability.name, myObj.abilities[1].ability.name]

      createPokemon(name, hp, attack, defense, abilities)


      var header = document.createElement('h1');
      header.id = 'pokemonName'
      header.style.color = 'white';
      var pic = document.createElement('img');
      pic.id = 'pic';
      var screen = document.getElementById('screen');
      pic.src = myObj.sprites["front_shiny"];
      screen.appendChild(pic);
      screen.style.backgroundColor = 'blue';
      var txt = document.createTextNode(myObj.name);
      header.appendChild(txt);
      screen.appendChild(header);


      if (document.getElementById('list') === null) {
        updateInfoScreen(myObj);
      } else {
        clearScreen();
        updateInfoScreen(myObj);
      }


    }
  };
  xhttp.open("GET", url+number, true);
  xhttp.send();
}

function newPokemon(){
  value = document.getElementById('searchPokemonNumber').value;
  loadDoc(value);
}






// loadDoc("https://pokeapi.co/api/v2/pokemon/319/");

// loadDoc('https://pokeapi.co/api/v2/pokemon/320/');
