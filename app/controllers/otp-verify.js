import Controller from '@ember/controller';
import {inject as service} from '@ember/service';
export default Controller.extend({
    ajax: service(),
    router: service(),
    loading: service(),
    actions:{
        verifyOTP(event){
            event.preventDefault();
            this.get('loading').set('isLoading',true);
            let otpVal = otp.value;
            let param = new URLSearchParams({otp:otpVal});
            this.get('ajax')
            .request('/bank1/api/auth/otpverify?'+param.toString())
            .then(resp=>{
                this.get('loading').set('isLoading',false);
                alert('Signup successfull...');
                console.log(resp.secret);
                this.get('router').transitionTo('show-secret',{
                    queryParams: {
                        secret: resp.secret
                    }
                })
            }).catch(err=>{
                this.get('loading').set('isLoading',false);
                alert('Signup Failed...Please Try Again...');
                this.get('router').transitionTo('home-route');
            });
        }
    }
});
