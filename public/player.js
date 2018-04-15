class Player {
    constructor (playerConfig){
        if(playerConfig === undefined){
            console.error('missing playerConfig');
            return;
        }
        this.left = false;
        this.down =  false;
        this.up = false;
        this.right = false;
        
        this.cntrl = {};
        this.cntrl.left = playerConfig.cntrl.left;
        this.cntrl.up = playerConfig.cntrl.up;
        this.cntrl.down = playerConfig.cntrl.down;
        this.cntrl.right = playerConfig.cntrl.right;

        this.playerPosition = {
            x: playerConfig.startPosition.x,
            y: playerConfig.startPosition.y
        }

        this.avatar = new Image();   // Create new img element
        this.avatar.src = playerConfig.avatar;
        document.addEventListener("keydown",(evt) =>{
            switch(evt.keyCode) {
                case this.cntrl.left:
                this.left = true;
                    break;
                case this.cntrl.up:
                this.up = true;
                    break;
                case this.cntrl.right:
                this.right = true;
                    break;
                case this.cntrl.down:
                this.down = true;
                    break;
            }
        });
        
        document.addEventListener("keyup",(evt) =>{
            switch(evt.keyCode) {
                case this.cntrl.left:
                this.left = false;
                    break;
                case this.cntrl.up:
                this.up = false;
                    break;
                case this.cntrl.right:
                this.right = false;
                    break;
                case this.cntrl.down:
                this.down = false;
                    break;
            }
        });
    }

    updatePlayer() {
        ctx.clearRect(this.playerPosition.x, this.playerPosition.y, 66,50);
        if(this.right){
            this.playerPosition.x = this.playerPosition.x + 5 ;
        }
        if(this.left){
            this.playerPosition.x = this.playerPosition.x - 5 ;
        }
        if(this.up){
            this.playerPosition.y = this.playerPosition.y - 5 ;
        }
        if(this.down){
            this.playerPosition.y = this.playerPosition.y + 5 ;
        }
        ctx.drawImage(this.avatar,this.playerPosition.x,this.playerPosition.y, 66,50);
    }
}