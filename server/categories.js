Meteor.publish('categories', function (text) {
    return Categories.find({
        $or: [
            {name: { $regex: text }},
            {description: { $regex: text }}
        ]
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