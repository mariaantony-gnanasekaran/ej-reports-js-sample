
/**
 * Barcode - This sample demonstrates the types of barcode and qrcode
 */
$(function () {
    $("#container").ejReportViewer({
        // Specifies the report Web API service URL. It is used to process the reports.
        reportServiceUrl: 'https://reports.syncfusion.com/demos/services/api/SamplesReportViewer',
        // Specifies the path of the RDL report file
        reportPath: 'barcode-sample'
    });
});
