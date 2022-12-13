import Route from '@ember/routing/route';
import {inject as service} from '@ember/service';

export default Route.extend({
    ajax: service(),
    beforeModel(){
        this.get('ajax').request('/bank1/api/auth/isloggedin')
        .then(resp=>{
            let role = resp.role;
            if(role=='admin'){
                this.transitionTo('admin.admin-menu');
            }else if(role=='user'){
                this.transitionTo('user.usermenu');
            }
        })
    }
});
