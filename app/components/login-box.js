import Component from '@ember/component';
import {inject as service} from '@ember/service'

export default Component.extend({
    router: service(),
    ajax: service(),
    loading: service(),
    actions:{
        login(event){
            event.preventDefault();
            this.get('loading').set('isLoading',true);
            let emailval = email.value;
            let passwordval = password.value;
            this.get('ajax').request('/bank1/api/auth/login',{
                method:'POST',
                data: JSON.stringify({email:emailval,password:passwordval})
            }).then((resp)=>{
                this.get('loading').set('isLoading',false);
                this.get('router').transitionTo('mfa');
            }).catch(err=>{
                alert(err.error?err.error:'Something went wrong');
                email.value="";
                password.value="";
            })
        }
    }
});
