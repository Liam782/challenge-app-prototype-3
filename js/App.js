class App{
    constructor(){
        
    }

    hide(){
        
    }

    getState(){
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
       gameState = data.val();
      })
    }

    update(state){
        database.ref('/').update({
        gameState: state
      });
    }

    //in the start function we need to allow the user to create a challenge, with funtions like time,

    async start(){
        if(gameState === 0){ //wait
            player = new Player();

            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
                playerCount = playerCountRef.val();
                player.getCount();
            }

            

            //this.addFriend.position(displayWidth/2 + 200,displayHeight/2 - 400)

            form = new Form();
            form.display();
             

            //new player is created and added to the database 
            //Enter your name (new form object and display the form )
            //enter button
           // player count gets updated. 

            kid1 = createSprite(100 ,100);
            kid1.addImage("kid1",kid1Img);
            kid1.scale = 2;
            //kid1.addImage("kid1",kid1.png);

            kid2 = createSprite(120,100);
            kid2.addImage("kid2",kid2Img);
            kid2.scale = 2;
            //kid2.addImage("kid2",kid2.png);

            kid3 = createSprite(140,100);
            kid3.addImage("kid3",kid3Img);
            kid3.scale = 2;
            //kid3.addImage("kid3",kid3.png);

            kid4 = createSprite(160,100);
            kid4.addImage("kid4",kid4Img);
            kid4.scale = 2;
            //kid4.addImage("kid4",kid4.png);

            kids = [kid1,kid2,kid3,kid4];

            //endMessage = createSprite(displayWidth/2,200);
            //endMessage.visible = false;

            //home page of the user

            //list all your challenges 
            //create challenge 
        }

    }

    play(){
        form.hide();

        Player.getPlayerInfo();

        if(allPlayers !== undefined){
            background(rgb(240,135,103));
            
            //var display_position = 100;
            
            //index of the array
            var index = 0;
      
            //x and y position of the cars
            var x = 175 ;
            var y;


      
            for(var plr in allPlayers){
              //add 1 to the index for every loop
              index = index + 1 ;
      
              //position the cars a little away from each other in x direction
              x = x + 200;
              //use data form the database to display the cars in y direction

              y = displayHeight - allPlayers[plr].distance;
              kids[index-1].x = x;
              kids[index-1].y = y;

              text(allPlayers[plr].username,x,y - 50);
              

             // console.log(index, player.index)
      
             
              if (index === player.index){
                stroke(10);
                fill("red");
                ellipse(x,y,60,60);
                kids[index - 1].shapeColor = "red";
                camera.position.x = displayWidth/2;
                camera.position.y = kids[index-1].y;
              }
             
              //textSize(15);
              //text(allPlayers[plr].name + ": " + allPlayers[plr].distance, 120,display_position)
            }
      
          }

          if(keyDown(UP_ARROW) && player.index !== null){
            distance += 10;
            player.updatePlayerInfo();
          }

          drawSprites();
      
      
          /*if(player.distance > 3860){
            gameState = 2;
          }
         */
         
        }

        end(){
            endMessage.visible = true;
        }
      
    


}

//0 when you are entering uyour name
//1 home page state you'll challenges 
//2 inside a challlenge 
