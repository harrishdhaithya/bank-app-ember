import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    namespace:'/bank1/api',
    urlForFindAll(model,snapshot){
        return this.namespace+"/admin/users";
    },
    urlForFindRecord(id,model,snapshot){
        const param = new URLSearchParams({accno:id});
        return this.namespace+"/admin/searchuser?"+param.toString();
    }
});
