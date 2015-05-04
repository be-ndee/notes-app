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
    'keyup form[name=search-note]': function (event) {
        var text = event.target.value;
        Session.set('noteName', text);
    },
    'click button.delete': function (event) {
        Notes.remove(this._id);
    }
});