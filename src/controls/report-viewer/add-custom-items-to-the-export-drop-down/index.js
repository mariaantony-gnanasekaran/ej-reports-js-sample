//Export click event handler
function onExportItemClick(args) {
    if (args.value === "Text File") {
        //Implement the code to export report as Text
            alert("Text File export option clicked");
    } else if (args.value === "DOT") {
        //Implement the code to export report as DOT
        alert("DOT export option clicked");
    }
}

$(function () {
        $("#viewer").ejReportViewer({
            reportServiceUrl: "https://reports.syncfusion.com/demos/services/api/ReportViewer",
            reportPath: '~/Resources/docs/sales-order-detail.rdl',
            exportSettings: {
                excelFormat: ej.ReportViewer.ExcelFormats.Excel2013,
                wordFormat: ej.ReportViewer.WordFormats.Word2013,
                exportOptions: ej.ReportViewer.ExportOptions.All & ~ej.ReportViewer.ExportOptions.Html,
                customItems: [{
                    index: 2,
                    cssClass: '',
                    value: 'Text File'
                },
                {
                    index: 4,
                    cssClass: '',
                    value: 'DOT'
                }]
            },
            exportItemClick: onExportItemClick
        });
    });