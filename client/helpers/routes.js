Router.configure({
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound',
    layoutTemplate: 'layout'
})

Router.map(function () {
    this.route('categories', { path: '/categories' });
});