import Controller from '@ember/controller';

export default Controller.extend({
    transactions:[],
    isnull: true,
    actions:{
        getTrans(event){
            event.preventDefault();
            let accnoVal = accno.value;
            this.get('store').query('transaction',{
                accno: accnoVal
            }).then(resp=>{
                this.set('transactions',resp);
                accno.value='';
            });
        }
    }
});
