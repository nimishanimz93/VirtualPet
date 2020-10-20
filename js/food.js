class Food {
  constructor() {
    this.foodStock = 0;
    this.lastFed;
    this.image = loadImage('images/Milk.png');
  }
  
  updateFoodStock(foodStock) {
    this.foodStock=foodStock;
  }
  
  getFedTime(lastFed) {
    this.lastFed=lastFed;
  }
  
  deductFood() {
    if(this.foodStock>0) {
      this.foodStock = this.foodStock-1;
    }
  }
  
  getFoodStock() {
    return this.foodStock;
  }

  bedroom(){
    background(bedRoom, 550, 500);
  }

  garden(){
    background(garden, 550, 500);
  }

  washroom(){
    background(washRoom, 550, 500);
  }

  livingroom(){
    background(livingRoom, 550, 500);
  }

  currentTime = hour();
  if(currentTime == (lastFed + 1)){
     update("playing");
     foodObj.garden();
  }
  else if(currentTime = (lastFed + 2)){
          update("sleeping");
          foodObj.bedroom();
  }
  else if(currentTime > (lastFed + 2) && currentTime <= (lastFed + 4)){
          update("bathing");
          foodObj.washroom();
  }
  else if(curretTime = (lastFed + 3)){
          update("casual");
          foodObj.livingRoom();
  }
  else{
    update("hungry");
    foodObj.display();
  }
  
  display() {

    var x = 80;
    var y = 100;

    imageMode(CENTER);
    image(this.image, 720, 220, 70, 70);

    if(this.foodStock != 0) {
      for(var i = 0; i < this.foodStock; i++) {
        if(i % 10 == 0){
          x = 80;
          y = y + 50;
        }
        image(this.image, x, y, 50, 50);
        x = x + 30;
      }
    }
  }
}