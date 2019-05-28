$(function () {
    $("#viewer").ejReportViewer({
                    reportServiceUrl: "https://reports.syncfusion.com/demos/services/api/ReportViewer",
					reportPath: '~/Resources/docs/sales-order-detail.rdl',
                    printMode: true,
                    pageSettings: {
                        height: 11.69,
                        width: 8.27
                    }
                });
});