function onShowError(args) {
                alert("Error code : " + args.errorCode + "\n" +
                    "Error Detail : " + args.errorDetail + "\n" +
                    "Error Message : " + args.errorMessage);

                args.cancel = true;
            }

$(function () {
    $("#viewer").ejReportViewer({
                    reportServiceUrl: "https://reports.syncfusion.com/demos/services/api/ReportViewer",
                    processingMode: ej.ReportViewer.ProcessingMode.Local,
                    //reportPath: '~/Resources/docs/product-list.rdlc',
                    showError: onShowError
                });
});