$(function () {
    $("#viewer").ejReportViewer({
                    reportServiceUrl: "https://reports.syncfusion.com/demos/services/api/ReportViewer",
                    reportPath: '~/Resources/docs/sales-order-detail.rdl',
					exportSettings: {
                        excelFormat: ej.ReportViewer.ExcelFormats.Excel2013,
                        wordFormat: ej.ReportViewer.WordFormats.Word2013
                    }
                });
});