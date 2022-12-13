import Controller from '@ember/controller';

export default Controller.extend({
    transactions: [],
    actions:{
        searchByDate(event){
            event.preventDefault();
            let dateVal = date.value;
            this.get('store').query('transaction',{
                date: dateVal
            }).then(data=>{
                this.set('transactions',data);
            });
        }
    }
});
