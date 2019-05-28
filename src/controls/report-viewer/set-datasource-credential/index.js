$(function () {
    $("#viewer").ejReportViewer({
                    reportServiceUrl: "https://reports.syncfusion.com/demos/services/api/SSRSDataSourceCredentials",
                    reportPath: "/SSRSSamples/Territory Sales",
                    reportServerUrl: "http://mvc.syncfusion.com/reportserver"
                });
});