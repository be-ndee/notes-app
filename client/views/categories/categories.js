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
    'submit form': function (event) {
        var text = event.target.text.value;
        event.target.text.value = '';
        var form = event.target.name;
        // create or search
        if (form === 'new-category') {
            Categories.insert({
                name: text
            });
        } else if (form === 'search-category') {
            Session.set('categoryName', text);
        }
        return false;
    },
    'click button.delete': function (event) {
        Categories.remove(this._id);
    }
});