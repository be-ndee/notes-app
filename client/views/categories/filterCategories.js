Template.filterCategories.events({
    'submit form[name=search-category]': function (event) {
        var text = event.target.text.value;
        event.target.text.value = '';
        Session.set('categoryName', text);
        return false;
    },
    'keyup form[name=search-category]': function (event) {
        var text = event.target.value;
        Session.set('categoryName', text);
    }
});