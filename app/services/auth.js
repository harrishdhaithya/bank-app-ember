import Service from '@ember/service';
import {inject as service} from '@ember/service';
export default Service.extend({
    isLoggedIn: false,
    ajax: service(),
    init(){
        this.get('ajax').request('/bank1/api/auth/isloggedin')
        .then(data=>{
            this.set('isLoggedIn',true);
        }).catch(err=>{
            this.set('isLoggedIn',false);
        })
    }
});
