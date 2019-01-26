
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('methods').del()
    .then(function () {
      // Inserts seed entries
      return knex('methods').insert([
        {id: 1, name: 'push', description:'Add items to the end of an array'},
        {id: 2, name: 'pop', description:'Remove an item from the end of an array'},
        {id: 3, name: 'splice', description:'Adds/removes items to/from an array, and returns the removed items'}
      ]);
    });
};
