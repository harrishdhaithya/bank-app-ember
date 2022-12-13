import Component from '@ember/component';
import {inject as service} from '@ember/service';
export default Component.extend({
    ajax: service(),
    router: service(),
    loading: service(),
    actions:{
        signUp(event){
            event.preventDefault();
            this.get('loading').set('isLoading',true);
            let fnameVal = fname.value;
            let lnameVal = lname.value;
            let emailVal = email.value;
            let phoneVal = phone.value;
            let depositVal = deposit.value;
            let passwordVal = password.value;
            this.get('ajax').request('/bank1/api/auth/signup',{
                method:'POST',
                data: JSON.stringify({fname: fnameVal, lname: lnameVal, email: emailVal, phone: phoneVal, deposit: depositVal,password: passwordVal})
            }).then(resp=>{
                this.get('loading').set('isLoading',false);
                alert('Complete OTP verification');
                this.get('router').transitionTo('otp-verify');
            }).catch(err=>{
                this.get('loading').set('isLoading',false);
                alert(err.error)
            });
        }
    }
});
