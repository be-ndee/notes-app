Meteor.publish('notes', function () {
    return Notes.find({});
});

Notes.allow({
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

Notes.deny({
});