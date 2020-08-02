class Player {
  constructor(){
    this.name = null;
    this.playerCount = 0;
    this.fitScore = 0;
    this.sportTime = 0;
    this.intensity = 0;
    this.distance = 0;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }
  
  updatePlayerInfo(){
    //updating kid info onto the database
      var playerIndex = "players/player" + this.index;

      database.ref(playerIndex).set({
      name:this.name,
      fitScore:this.fitScore,

      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');

    playerInfoRef.on("value",(data) =>{
      allPlayers = data.val();
    })
  }

  calculateFitScore(){
    var fScore = this.sportTime * this.intensity;
    return fScore;
  }

}
