import Route from '@ember/routing/route';
import Ember from 'ember';
import {inject as service} from '@ember/service';

export default Route.extend({
    ajax: service(),
    beforeModel(){
        this.get('ajax').request('/bank1/api/auth/isloggedin')
        .then(resp=>{
            let role = resp.role;
            if(!role){
                this.transitionTo('login-route');
            }else if(role != 'admin'){
                alert('You are not authorized to access this page...');
                history.back();
            }
            return;
        }).catch(err=>{
            console.log(err);
            this.transitionTo('login-route');
        });
    },
    model(){
        return this.get('store').findAll('user');
    }
});
