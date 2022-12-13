import Controller from '@ember/controller';
import {inject as service} from '@ember/service'
export default Controller.extend({
    ajax: service(),
    actions:{
        makeTransaction(event){
            let accnoVal = accno.value;
            let amountVal = amount.value;
            event.preventDefault();
            this.get('ajax').request('/bank1/api/user/maketransaction',{
                method:'POST',
                data: JSON.stringify({accno:accnoVal,amount: amountVal})
            }).then(data=>{
                alert('Transaction Successfull...');
                accno.value="";
                amount.value="";
            }).catch(err=>{
                alert('Transaction Failed...');
                accno.value="";
                amount.value="";
            });
        }
    }
});