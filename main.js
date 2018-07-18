class Pokemon{
  constructor(name){
    this.name = name;
    this.hp = hp;
    this.defense = defense;
    this.abilities = []
    this.type;
    this.display = function(){
    }

    loadDoc(url);
  }
}

class Trainer{
  constructor(name){
    this.name;
    this.age;
    this.pokemon ={

    };
    this.all = function(){

    }

  }
}

function updateScreen(){}





function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var header = document.createElement('h1');
      header.style.color = 'white';
      var pic = document.createElement('img');
      var screen = document.getElementById('screen');
      var myObj = JSON.parse(this.responseText);
      // pic.src = myObj.sprites["front_shiny"];
      pic.src = 'https://orig00.deviantart.net/5c45/f/2015/311/a/9/mega_sharpedo2_by_mz15-d9ftc9p.png'
      screen.appendChild(pic);
      screen.style.backgroundColor = 'blue';
      var txt = document.createTextNode(myObj.name);
      header.appendChild(txt);
      screen.appendChild(header);
      console.log(pic);
    }
  };
  xhttp.open("GET", 'https://pokeapi.co/api/v2/pokemon/319/', true);
  xhttp.send();
}

loadDoc();
