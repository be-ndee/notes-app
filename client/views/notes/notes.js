Meteor.autorun(function () {
    Meteor.subscribe('notes');
});

Template.notes.created = function () {
};

Template.notes.helpers({
    notes: function () {
        return Notes.find({});
    }
});

Template.notes.rendered = function () {
};

Template.notes.events({
});