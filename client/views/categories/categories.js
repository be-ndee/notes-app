Session.set('categoryName', '');

Meteor.autorun(function () {
    Meteor.subscribe('categories', Session.get('categoryName'));
});

Template.categories.created = function () {
};

Template.categories.helpers({
    categories: function () {
        return Categories.find();
    }
});

Template.categories.rendered = function () {
};

Template.categories.events({
    'click button.delete': function (event) {
        Categories.remove(this._id);
    }
});