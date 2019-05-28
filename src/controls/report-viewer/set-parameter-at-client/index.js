$(function () {
    $("#viewer").ejReportViewer({
                    reportServiceUrl: "https://reports.syncfusion.com/demos/services/api/ReportViewer",
                    reportPath: '~/Resources/docs/sales-order-detail.rdl',
                    parameters: [{ name: 'SalesOrderNumber', labels: ['SO50751'], values: ['SO50751'] }]
                });
});