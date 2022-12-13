import Controller from '@ember/controller';
import {inject as service} from '@ember/service'
export default Controller.extend({
    ajax: service(),
    actions:{
        withdraw(event){
            event.preventDefault();
            let amountVal = amount.value;
            this.get('ajax').request('/bank1/api/user/withdraw',{
                method:'POST',
                data: JSON.stringify({amount: amountVal})
            }).then(data=>{
                alert('Withdraw Successfull...');
            }).catch(err=>{
                alert('Withdrawal Failed...');
            });
            amount.value = "";
        }
    }
});
