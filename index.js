function getMonthName(date) {
    var ShortMonthNames = [
        "Jan", "Feb", "Mar",
        "Apr", "May", "Jun", "Jul",
        "Aug", "Sep", "Oct",
        "Nov", "Dec"
    ];
    var day = date.getDate();
    var monthIndex = date.getMonth();
    var year = date.getFullYear();
    return ShortMonthNames[monthIndex] + " " + year;
}

module.exports =getMonthName