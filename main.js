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





function loadDoc(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var pic = document.getElementsByTagName('img');
      var screen = document.getElementById('screen');
      var myObj = JSON.parse(this.responseText);
      pic.src = myObj.sprites["front_shiny"]
      screen.appendChild(pic);
      console.log(screen);
    }
  };
  xhttp.open("GET", 'https://pokeapi.co/api/v2/pokemon/319/', true);
  xhttp.send();
}

loadDoc();
