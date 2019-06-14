function onHyperlink(args) {
    args.cancel = true;
    //You can modify the URL here
    window.open(args.actionInfo.Hyperlink);
}

$(function () {
    $("#viewer").ejReportViewer({
                    reportServiceUrl: "https://reports.syncfusion.com/demos/services/api/ReportViewer",
                    reportPath: '~/Resources/docs/customer-support-analysis.rdl',
                    hyperlink: onHyperlink
                });
});