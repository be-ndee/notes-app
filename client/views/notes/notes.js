Session.set('noteName', '');
Session.set('category', null);

Meteor.autorun(function () {
    Meteor.subscribe('notes', Session.get('noteName'), Session.get('category'));
});

Template.notes.created = function () {
};

Template.notes.helpers({
    categories: function () {
        return Categories.find();
    },
    notes: function () {
        return Notes.find();
    }
});

Template.notes.rendered = function () {
};

Template.notes.events({
    'submit form': function (event) {
        var text = event.target.text.value;
        event.target.text.value = '';
        // fetch category
        var categoryId = event.target.category.value;
        var category = null;
        if (categoryId != -1) {
            category = Categories.findOne(categoryId);
        }

        var form = event.target.name;
        // create or search
        if (form === 'new-note') {
            Notes.insert({
                text: text,
                date: new Date(),
                category: category
            });
        } else if (form === 'search-note') {
            Session.set('noteName', text);
            Session.set('category', category);
        }
        return false;
    },
    'keyup form[name=search-note] input': function (event) {
        var text = event.target.value;
        Session.set('noteName', text);
    },
    'change form[name=search-note] select': function (event) {
        var categoryId = event.target.value;
        var category = null;
        if (categoryId != -1) {
            category = Categories.findOne(categoryId);
        }
        Session.set('category', category);
    },
    'click button.delete': function (event) {
        Notes.remove(this._id);
    }
});