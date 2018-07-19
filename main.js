// function open(){
//   page3 = document.getElementById('lastpage');
//
//   page3.classList.add('hidden');
// }

allPokemon = [];

function createPokemon(name, hp, attack, defense, abilities) {

  for (each in allPokemon) {
    if (allPokemon[each]['name'] == iChooseYou) {
      return;
    }
  }
  var pokemon = {
    name: name,
    hp: hp,
    attack: attack,
    defense: defense,
    abilities: abilities
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


jolteon = "https://pokeapi.co/api/v2/pokemon/135/"
sharpedo = "https://pokeapi.co/api/v2/pokemon/319/"
primeape = "https://pokeapi.co/api/v2/pokemon/057"

function loadDoc(pokemon) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var header = document.createElement('h1');
      header.id = 'pokemonName'
      header.style.color = 'white';
      var pic = document.createElement('img');
      pic.id = 'pic';
      var screen = document.getElementById('screen');
      var myObj = JSON.parse(this.responseText);

      var name = myObj.name;
      var hp = myObj.stats[5]['base_stat'];
      var attack = myObj.stats[4]['base_stat'];
      var defense = myObj.stats[3]['base_stat'];
      var abilities = [myObj.abilities[0].ability.name, myObj.abilities[1].ability.name]

      createPokemon(name, hp, attack, defense, abilities)
      pic.src = myObj.sprites["front_shiny"];

      console.log(trainer);
      // pic.src = 'https://orig00.deviantart.net/5c45/f/2015/311/a/9/mega_sharpedo2_by_mz15-d9ftc9p.png'
      screen.appendChild(pic);
      screen.style.backgroundColor = 'blue';
      var txt = document.createTextNode(myObj.name);
      header.appendChild(txt);
      screen.appendChild(header);

      console.log(document.getElementById('list'))

      if (document.getElementById('list') === null) {
        updateInfoScreen(myObj);
      } else {
        clearScreen();
        updateInfoScreen(myObj);
      }


    }
  };
  xhttp.open("GET", pokemon, true);
  xhttp.send();
}






// loadDoc("https://pokeapi.co/api/v2/pokemon/319/");

// loadDoc('https://pokeapi.co/api/v2/pokemon/320/');
