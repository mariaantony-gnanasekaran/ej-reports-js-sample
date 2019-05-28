$(function () {
    $("#viewer").ejReportViewer({
                    reportServiceUrl: "https://reports.syncfusion.com/demos/services/api/ReportViewer",
                    reportPath: '~/Resources/docs/sales-order-detail.rdl',
					exportSettings: { exportOptions: ej.ReportViewer.ExportOptions.All & ~ej.ReportViewer.ExportOptions.Html & ~ej.ReportViewer.ExportOptions.Word }
                });
});