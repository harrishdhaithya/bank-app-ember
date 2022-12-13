import Route from '@ember/routing/route';
import {inject as service} from '@ember/service'
export default Route.extend({
    ajax: service(),
    beforeModel(){
        this.get('ajax').request('/bank1/api/auth/isloggedin')
        .then(resp=>{
            let role = resp.role;
            if(!role){
                this.transitionTo('login-route');
            }else if(role != 'user'){
                alert('You are not authorized to access this page...');
                history.back();
            }
        }).catch(err=>{
            this.transitionTo('login-route')
        });
    }
});
