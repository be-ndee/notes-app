Session.set('noteName', '');

Meteor.autorun(function () {
    Meteor.subscribe('notes', Session.get('noteName'));
});

Template.notes.created = function () {
};

Template.notes.helpers({
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

        var form = event.target.name;
        // create or search
        if (form === 'new-note') {
            Notes.insert({
                text: text,
                date: new Date()
            });
        } else if (form === 'search-note') {
            Session.set('noteName', text);
        }
        return false;
    },
    'keyup form[name=search-note]': function (event) {
        var text = event.target.value;
        Session.set('noteName', text);
    },
    'click button.delete': function (event) {
        Notes.remove(this._id);
    }
});