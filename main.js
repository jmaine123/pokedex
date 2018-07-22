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
  var space = document.createElement('br');
  var listabilities = document.createElement('li');
  var abilities = document.createTextNode('Abilities include ' + myObj.abilities[0].ability.name + ' ' + 'and ' + myObj.abilities[1].ability.name)
  var trainerName = document.createTextNode('Trainer: ' + 'Jermaine');
  var trainer = document.createElement('li');
  var weight = document.createTextNode('weight: ' + myObj.weight + ' lb');
  var PokeWeight = document.createElement('li');


  pokeHeader.appendChild(infoTxt)
  info.appendChild(pokeHeader);
  trainer.appendChild(trainerName);
  list.appendChild(trainer);
  listhp.appendChild(hp);
  list.appendChild(listhp);
  listattack.appendChild(attack);
  list.appendChild(listattack);
  listdefense.appendChild(defense);
  list.appendChild(listdefense)
  PokeWeight.appendChild(weight);
  list.appendChild(PokeWeight);
  list.appendChild(space);
  listabilities.appendChild(abilities);
  list.appendChild(listabilities)
  info.appendChild(list);
}


function updatePicScreen(myObj){
  screen = document.getElementById('screen');
  screen.style.backgroundImage = 'url(images/elements.jpg)';
  var light = document.getElementById('blueLight');
  var header = document.createElement('h1');
  header.id = 'pokemonName'
  header.style.color = 'white';
  var pic = document.createElement('img');
  pic.id = 'pic';
  var screen = document.getElementById('screen');
    if (myObj.name ==='primeape'){
      pic.src = 'images/primeape_punching.gif';
    }
    else if(myObj.name ==='sharpedo'){
      pic.src = 'images/sharpedo_swimming.gif';
    }
    else if(myObj.name ==='scizor'){
      pic.src = 'images/scizor.gif';
    }
    else if(myObj.name ==='jolteon'){
      pic.src = 'images/jolteon_shock.gif';
    }
    else{
    pic.src = myObj.sprites["front_shiny"];
    }
  screen.appendChild(pic);
  var txt = document.createTextNode(myObj.name);
  header.appendChild(txt);
  screen.appendChild(header);
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

        updatebackground(myObj);
        updatePicScreen(myObj);


      if (document.getElementById('list') === null) {
        updateInfoScreen(myObj);
      } else {
        clearScreen();
        updateInfoScreen(myObj);
      }

      console.log(myObj.types[0].type.name)
    }
  };
  xhttp.open("GET", url+number, true);
  xhttp.send();
}

function newPokemon(){
  value = document.getElementById('searchPokemonNumber').value;
  loadDoc(value);
}

function updatebackground(myObj){
  html = document.getElementById('background');
  if (myObj.name === 'sharpedo'){
    html.style.backgroundImage = "url('images/ocean.gif')";
  }
  else if (myObj.name === 'scizor') {
    html.style.backgroundImage = "url('https://avatars.mds.yandex.net/get-pdb/480866/c37ee6c5-e8c8-4e2e-9563-29e2cebd40a7/orig')";
  }

  else if(myObj.types[0].type.name === 'fighting'){
    html.style.backgroundImage = "url('https://media.istockphoto.com/photos/boxing-empty-professional-ring-with-crowd-picture-id619736822?k=6&m=619736822&s=612x612&w=0&h=Plr-dFepxe5gYAhJusL7Z6SebTi1IluFjEGhCXOUxz8=')"
  }
  else if(myObj.types[0].type.name === 'electric') {
    html.style.backgroundImage = "url('http://bestanimations.com/Nature/Storms/animated-lighning-bolt-strike-storm-gif-1.gif')"
  }

  else if (myObj.types[0].type.name === 'fire'){
    console.log(myObj.types)
      html.style.backgroundImage = "url('https://thumbs.gfycat.com/SeriousSpiritedAmericanrobin-max-1mb.gif')"
  }
  else if (myObj.types[0].type.name === 'water'){
    console.log(myObj.types)
      html.style.backgroundImage = "url('images/ocean.gif')"
  }
  else if (myObj.types[0].type.name === 'ground'){
    console.log(myObj.types)
      html.style.backgroundImage = "url('https://1x.com/images/user/0c7c41b495981ad727d168574967697b-hd2.jpg')"
  }
  else if (myObj.types[0].type.name === 'flying'){
    console.log(myObj.types)
      html.style.backgroundImage = "url('https://i.imgur.com/QUd1Q2E.gif')"
  }
  else if (myObj.types[0].type.name === 'grass'){
    console.log(myObj.types)
      html.style.backgroundImage = "url('https://avatars.mds.yandex.net/get-pdb/480866/c37ee6c5-e8c8-4e2e-9563-29e2cebd40a7/orig')"
  }
  else{
    html.style.backgroundImage = "url('images/photo-1448375240586-882707db888b.jpeg')"
  }


}






// loadDoc("https://pokeapi.co/api/v2/pokemon/319/");

// loadDoc('https://pokeapi.co/api/v2/pokemon/320/');
