import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    namespace:'/bank1/api',
    urlForQuery(query,model){
        if(query.accno){
            const params = new URLSearchParams({accno:query.accno});
            return this.namespace+'/admin/transactionbyaccno?'+params.toString();
        }else{
            const params = new URLSearchParams({date:query.date});
            return this.namespace+'/admin/transactionbydate?'+params.toString();
        }
    },
    urlForFindAll(model,snapshot){
        return this.namespace +'/admin/transactions';
    }
});
