window.addEventListener("load", function() {
  // canvas setup
  const canvas = document. getElementById("canvas1");
  const ctx = canvas. getContext("2d");
  canvas.width =  500;
  canvas.height = 500;

  class IntuputHandler {
  }

  class Projectile {
  }

  class Particle {
  }
  
  class Player {
     constructor(game){
         this.game = game;
         this.width = 120;
         this.height = 190;
         this.x = 20;
         this.y = 100;
         this.speedY = 0;
     }
     update(){
        this.y += this.speedY;
     }
     draw(context){
         context.fillRect(this.x, this.y, this.width, this.height);
     }
  }
  class Enemy {

  }
  class Layer {

  }
  class Background {

  }
  class UI {

  }
  class Game {
     constructor(width, height){
        this.width = width; 
        this.height = height; 
        this.Player = new Player(this);
    }
    update(){
        this.Player.update();
    } 
    draw();
}

});