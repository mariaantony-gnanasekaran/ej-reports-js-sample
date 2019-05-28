$(function () {
    $("#viewer").ejReportViewer({
                    reportServiceUrl: "https://reports.syncfusion.com/demos/services/api/ReportViewer",
                    reportPath: '~/Resources/docs/sales-order-detail.rdl',
					printMode: true,
                    pageSettings: {
                        margins: {
                            top: 0.5,
                            right: 0.25,
                            bottom: 0.25,
                            left: 0.25
                        }
                    }
                });
});