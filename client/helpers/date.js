errorIfNoDate = function (date) {
    if (!(date instanceof Date)) {
        throw "Object is not a Date.";
    }
};

getDateFormat = function (date) {
    errorIfNoDate(date);
    var day = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear();
    return year + '-' + ((month < 10) ? '0' : '') + month + '-' + ((day < 10) ? '0' : '') + day;
};

getDateTimeFormat = function (date) {
    errorIfNoDate(date);
    var formattedDate = getDateFormat(date);
    var hours = date.getHours();
    var minutes = date.getMinutes();
    formattedDate += ', ' + ((hours < 10) ? '0' : '') + hours + ':' + ((minutes < 10) ? '0' : '') + minutes;
    return formattedDate;
}

// format date with format 'yyyy-MM-dd'
Template.registerHelper('getDateFormat', function(date) {
    return getDateFormat(date);
});

// format date with format 'yyyy-MM-dd, HH:ii'
Template.registerHelper('getDateTimeFormat', function(date) {
    return getDateTimeFormat(date);
});