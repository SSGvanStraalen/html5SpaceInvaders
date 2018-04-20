class Bullet {
    constructor (bulletConfig){
        this.avatar = new Image();   // Create new img element
        this.avatar.src = 'assets/laserBlue06.png'
        this.position = {
            x: bulletConfig.position.x,
            y: bulletConfig.position.y
        }
        ctx.drawImage(this.avatar,this.position.x,this.position.y, 13,37);

        this.gameLoopIndex = pubSub.subscribe('gameLoop', () =>{
            ctx.clearRect(this.position.x, this.position.y, 13,37);
            this.position.y = this.position.y - 5;
            if (this.position.y >=  0){
                ctx.drawImage(this.avatar,this.position.x,this.position.y, 13,37);
            } else {
                pubSub.unSubscribe(gameLoop, this.gameLoopIndex);
            }
        })
    }
}