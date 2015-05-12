Router.configure({
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    layoutTemplate: 'layout'
});

Router.map(function () {
    this.route('home', {
        path: '/'
    });
    this.route('categories', {
        path: '/categories'
    });
    this.route('notes', {
        path: '/notes'
    });
});

Router.onBeforeAction(function() {
    if (! Meteor.userId()) {
        this.render('login');
    } else {
        this.next();
    }
});
