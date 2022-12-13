import DS from 'ember-data';

export default DS.Model.extend({
    src: DS.attr(),
    dest: DS.attr(),
    amount: DS.attr(),
    date: DS.attr(),
    time: DS.attr()
});
