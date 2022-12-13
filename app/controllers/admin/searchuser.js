import Controller from '@ember/controller';
export default Controller.extend({
    user:null,
    actions:{
        getUser(event){
            event.preventDefault();
            this.get('store').findRecord("user",accno.value).then(user=>{
                this.set("user",user);
            })
        }
    }
});
