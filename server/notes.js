Meteor.publish('notes', function (text) {
    return Notes.find({
        $or: [
            {text: { $regex: text }}
        ]
    });
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
    insert: function (userId, doc) {
        return (
            typeof doc.text === 'undefined'
            || doc.text.length < 3
            || !(doc.date instanceof Date)
        );
    }
});