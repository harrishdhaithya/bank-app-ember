import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
export default Controller.extend({
    router: service(),
    ajax: service(),
    auth: service(),
    actions:{
        evalAuth(event){
            event.preventDefault();
            let codeVal = code.value;
            let params = new URLSearchParams({code:codeVal});
            this.get('ajax').request('/bank1/api/auth/mfa?'+params.toString()).then((resp)=>{
                this.get('auth').set('isLoggedIn',true);       
                if(resp.role==='admin'){
                    this.get('router').transitionTo('admin.admin-menu');
                }else{
                    this.get('router').transitionTo('user.usermenu');
                }     
            }).catch(err=>{
                alert('Login Failed... Please Try Again...');
                this.get('router').transitionTo('login-route');
            })
        }
    }
});