Meteor.publish('categories', function (name) {
    return Categories.find({
        name: { $regex: name }
    });
});

Categories.allow({
    insert: function(userId, doc){
        return true;
    },
    update:  function(userId, doc, fieldNames, modifier){
        return false;
    },
    remove:  function(userId, doc){
        return true;
    }
});