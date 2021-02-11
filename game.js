class game{
    constructor(){

    }
    getState(){
        var gameStateref = database.ref('gameState')
        gameStateref.on("value", (data)=>{
            gameState = data.val()
        })
    }
    update(state){
        database.ref('/').update({
            gameState:state
        })
    }
    async start(){
        if(gameState==0){
            player1=new player()
            var playerCountRef=await database.ref('playerCount').once("value")
            if(playerCountRef.exists()){
                playerCount=playerCountRef.val()
                player1.getCount()

            }
            player1.getCount()
            form1 = new form()
            form1.display()
        }
    }
    play(){
        form1.hide()
        textSize(30)
        text("gameStart", 120, 100)
        player.getPlayerInfo()
        if(allPlayers!=undefined){
            var displayPosition=130
            for(var p1 in allPlayers){
                if(p1=="player"+player1.index)
                fill("red")
                else
                fill("black")
                displayPosition+=20
                textSize(15)
                text(allPlayers[p1].name+":"+allPlayers[p1].distance, 120, displayPosition)

            }
        }
        if(keyIsDown(UP_ARROW)&&player1.index!=null){
            player1.distance+=50
            player1.update()
        }
 
    }
}