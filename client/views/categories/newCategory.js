Template.newCategory.events({
    'submit form[name=new-category]': function (event) {
        var text = event.target.text.value;
        event.target.text.value = '';

        var description = event.target.description.value;
        event.target.description.value = '';
        Categories.insert({
            name: text,
            description: description
        });
        return false;
    }
});