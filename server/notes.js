Meteor.publish('notes', function (text, category) {
    var textFilter = {
        text: {
            $regex: text
        }
    };
    if (typeof category === 'undefined' || category === null) {
        return Notes.find(textFilter);
    }
    return Notes.find({
        $and: [
            textFilter,
            {category: category}
        ]
    });
});

Notes.allow({
    insert: function(userId, doc) {
        return true;
    },
    update:  function(userId, doc, fieldNames, modifier) {
        return false;
    },
    remove:  function(userId, doc) {
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