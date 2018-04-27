class Enemy {
    constructor (enemyConfig){
        this.avatar = new Image();   // Create new img element
        this.avatar.src = 'assets/enemyGreen1.png'
        this.goLeft = true;
        this.position = {
            x: enemyConfig.position.x,
            y: enemyConfig.position.y
        }
        this.destroyed = false;
        ctx.drawImage(this.avatar,this.position.x,this.position.y, 62,56);
    }
    update (){
        ctx.clearRect(this.position.x, this.position.y, 62,56);
        if(this.destroyed){
            return;
        }
        if (this.goLeft){
            this.position.x = this.position.x - 3;
            if (this.position.x <= 0){
                this.position.y = this.position.y + 60;
                this.goLeft = false;
            }
        } else {
            this.position.x = this.position.x + 3;
            if(this.position.x >= window.innerWidth){
                this.position.y = this.position.y + 60;
                this.goLeft = true;
            }
        }
        ctx.drawImage(this.avatar,this.position.x,this.position.y, 62,56);
    }
    destroy () {
        this.destroyed = true;
        ctx.clearRect(this.position.x, this.position.y, 62,56);
    }
}