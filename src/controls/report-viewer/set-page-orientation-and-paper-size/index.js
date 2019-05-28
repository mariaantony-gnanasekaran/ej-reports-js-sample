$(function () {
    $("#viewer").ejReportViewer({
                    reportServiceUrl: "https://reports.syncfusion.com/demos/services/api/ReportViewer",
                    reportPath: '~/Resources/docs/sales-order-detail.rdl',
					printMode: true,
                    pageSettings: {
                        orientation: ej.ReportViewer.Orientation.Landscape,
                        paperSize: ej.ReportViewer.PaperSize.Letter
                    }
                });
});