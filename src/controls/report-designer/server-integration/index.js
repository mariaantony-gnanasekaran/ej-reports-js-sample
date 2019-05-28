var isSubmit = true;
function formSubmit(args) {
    isSubmit = false;
}

function windowUnload(args) {
    var designer = $('#designer').data('ejReportDesigner');
    if (designer && designer.hasReportChanges() && isSubmit) {
        return 'Changes you made may not be saved';
    }
    isSubmit = true;
}
$(function () {
    $(document.body).bind('submit', $.proxy(formSubmit, this));
    $(window).bind('beforeunload', $.proxy(windowUnload, this));
    var dataValue = "";
    var apiRequest = new Object({
        password: "demo",
        userid: "guest"
    });

    $.ajax({
        type: "POST",
        url: "https://reportserver.syncfusion.com/api/get-user-key",
        data: apiRequest,
        success: function (data) {
            dataValue = data.Token;
            var token = JSON.parse(dataValue);

            $("#designer").ejReportDesigner(
                {
                    serviceUrl: "https://reportserver.syncfusion.com/ReportService/api/Designer",
                    serviceAuthorizationToken: token.token_type + " " + token.access_token
                });
        }
    });
});
