class Form {

  constructor() {
    this.username = createInput("User Name");

    this.letsGoButton = createButton('Lets Go!');
    this.greeting = createElement('h2');
    //this.title = createElement('h2');
    this.sportName = createInput('Name of sport');
    this.time = createSelect();
    this.intensity = createSelect();
    this.competeButton = createButton('Compete!');
    
    //this.addFriend = createInput('h2');
    //this.reset = createButton('RESET');
  }
  hide(){
    this.greeting.hide();
    this.username.hide();
    //this.title.hide();
    this.letsGoButton.hide();
    this.sportName.hide();
    this.time.hide();
    this.intensity.hide();
    this.competeButton.hide();
    //this.addFriend.hide();
  }

  display(){

    

    //this.title.html("Challenge App");
    //this.title.position(displayWidth/2 - 50, 180);

    logo = createSprite(displayWidth/2 - 50, displayHeight/2 - 80);
    logo.addImage("LOGO",logoImg);
    logo.scale = 0.6;
    
    this.username.position(displayWidth/2 - 50, displayHeight/2 - 120);
    this.letsGoButton.position(displayWidth/2, displayHeight/2 - 80);
    

    drawSprites();

    //this.reset.position(displayWidth/2 - 100,20);

      
        this.letsGoButton.mousePressed(()=>{
          
          player.name = this.username.value();
          this.username.hide();
          this.letsGoButton.hide();
          //this.title.hide();

          this.greeting.html("How active were you today, " + player.name + ".");

          this.greeting.position(displayWidth/2 - 50, displayHeight/2 - 100);


          this.competeButton.position(displayWidth/2,displayHeight/2 - 30);

          

          this.sportName.position(displayWidth/2, displayHeight/2 - 95);
          this.time.position(displayWidth/2,displayHeight/2 - 70);
          this.time.option(30);
          this.time.option(60);
          this.time.option(90);
          this.time.option(120);
          this.time.selected(30);
          this.time.changed(mySelectTimeEvent);

          function mySelectTimeEvent() {
           let item = this.time.value();
           console.log("sport time "+ item);
          }

         this.intensity.position(displayWidth/2 ,displayHeight/2 - 50);
          this.intensity.option(1);
          this.intensity.option(2);
          this.intensity.option(3);
          this.intensity.selected(1);
          this.intensity.changed(mySelectIntensityEvent);

          function mySelectIntensityEvent() {
            let item  = this.intensity.value();
            console.log("player intensity" + item);
            
          }

         
          
          //playerCount+=1;
          //player.index = playerCount;
          player.updatePlayerInfo();
          //player.updateCount(playerCount);
          this.greeting.html(player.name + " has succefully logged in!");
          this.greeting.position(displayWidth/2 - 120, 250);

     
    });

    this.competeButton.mousePressed(()=>{
      playerCount = playerCount + 1;
      player.index = playerCount;
      player.updatePlayerInfo();
      player.fitScore = player.calculateFitScore();
  
      player.updateCount(playerCount);
     
   });
    
      
  }


 
}
