$(function () {
    $("#viewer").ejReportViewer({
                    reportServiceUrl: "https://reports.syncfusion.com/demos/services/api/SharePointReports",
					reportPath: "http://mvc.syncfusion.com/dev_report/SSRSSamples/Territory Sales.rdl",
                    reportServerUrl: "http://mvc.syncfusion.com/dev_report/reportserver"
                });
});