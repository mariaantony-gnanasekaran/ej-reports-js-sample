function onReportError(args) {
    alert(args.errmsg);
    args.cancel = true;
}

$(function () {
    $("#viewer").ejReportViewer({
                    reportServiceUrl: "https://reports.syncfusion.com/demos/services/api/ReportViewer",
                    processingMode: ej.ReportViewer.ProcessingMode.Local,
					//reportPath: '~/Resources/docs/product-list.rdlc',
                    reportError: onReportError
                });
});