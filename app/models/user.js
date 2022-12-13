import DS from 'ember-data';

export default DS.Model.extend({
    accno: DS.attr(),
    name: DS.attr(),
    email: DS.attr(),
    phone: DS.attr(),
    balance: DS.attr()
});
