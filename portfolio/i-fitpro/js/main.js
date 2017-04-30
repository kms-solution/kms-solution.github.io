//DatePicket Bootstrap

$(function () {
    $('#datetimepicker4').datetimepicker({
        viewMode: 'years',
        format: 'DD MMMM YYYY год',
        locale: 'ru',
        minDate: '1902-01-01',
        maxDate: moment()
    });
});
