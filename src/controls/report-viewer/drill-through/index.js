function onDrillThrough(args) {
    args.actionInfo.ReportName = "personal-details";
    args.actionInfo.Parameters = [{ name: 'EmployeeID', value: ['3'] }];
}

$(function () {
    $("#viewer").ejReportViewer({
                    reportServiceUrl: "https://reports.syncfusion.com/demos/services/api/ReportViewer",
                    reportPath: '~/Resources/docs/sales-person-details.rdl',
                    drillThrough: onDrillThrough
                });
});