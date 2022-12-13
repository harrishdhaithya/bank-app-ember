import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login-route',{path:'/login'});
  this.route('signup-route',{path:'/signup'});
  this.route('home-route',{path:'/home'});
  this.route('admin', function() {
    this.route('admin-menu',{path:'/menu'});
    this.route('allusers',{path:'/users'});
    this.route('alltransactions',{path:'/transactions'});
    this.route('transbydate');
    this.route('transbyaccno',{path:'/transbyaccno'});
    this.route('exttrans',{path:'/transactions/extract'});
    this.route('searchuser');
  });
  this.route('user', function() {
    this.route('viewbalance',{path:'/balance/view'});
    this.route('transaction',{path:'/transaction'});
    this.route('viewtrans',{path:'/transactions/view'});
    this.route('withdraw',{path:'/withdraw'});
    this.route('usermenu',{path:'/menu'});
  });
  this.route('mfa');
  this.route('otp-verify');
  this.route('show-secret',{path:'/secret'});
});

export default Router;
