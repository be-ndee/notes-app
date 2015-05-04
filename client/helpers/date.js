Template.registerHelper("prettifyDate", function(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return year + '-' + ((month < 10) ? '0' : '') + month + '-' + ((day < 10) ? '0' : '') + day;
});