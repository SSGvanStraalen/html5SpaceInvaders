class PubSub {
    constructor (){
        this.subscribers = {};
    }
    subscribe(event, callback){
        if(!this.subscribers[event]){
            this.subscribers[event] = []
        }
        this.subscribers[event].push(callback);
        return this.subscribers[event].length - 1;
    }
    publish(event){

        if(!this.subscribers[event]){
            return;
        }
        this.subscribers[event].forEach(cb => {
            cb();
        });
    }
    unSubscribe(event, index){
        if(!this.subscribers[event] || index){
            return;
        }
        this.subscribers[event].splice(index, 1);
    }
}