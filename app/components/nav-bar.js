import Component from '@ember/component';
import {inject as service} from '@ember/service'

export default Component.extend({
    ajax: service(),
    router: service(),
    auth: service(),
    actions:{
        logout(event){
            event.preventDefault();
            this.get('ajax').request('/bank1/api/auth/logout').then(resp=>{
                if(resp.error){
                    alert(resp.error);
                    return;
                }
                this.get('auth').set('isLoggedIn',false);
                this.get('router').transitionTo('home-route');
            })
        }
    }
});
