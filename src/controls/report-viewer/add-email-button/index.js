//Toolbar click event handler
function ontoolBarItemClick(args) {
        if (args.value === "E-Mail") {
            var proxy = $('#viewer').data('ejReportViewer');
            var Report = proxy.model.reportPath;
            var lastsIndex = Report.lastIndexOf("/");
            var reportName = Report.substring(lastsIndex + 1);
            var requrl = proxy.model.reportServiceUrl + '/SendEmail';
            var _json = {
                exportType: "PDF", reportViewerToken: proxy._reportViewerToken, ReportName: reportName
            };
            $.ajax({
                type: "POST",
                contentType: "application/json; charset=utf-8",
                url: requrl,
                data: JSON.stringify(_json),
                dataType: "json",
                crossDomain: true
            })
        }
    }

$(function () {
    $("#viewer").ejReportViewer({
        reportServiceUrl: "https://reports.syncfusion.com/demos/services/api/ReportViewer",
        reportPath: '~/Resources/docs/sales-order-detail.rdl',
        toolbarSettings: {
            showToolbar: true,
            items: ej.ReportViewer.ToolbarItems.All & ~ej.ReportViewer.ToolbarItems.Print,
            customItems: [{
                groupIndex: 1,
                index: 1,
                type: 'Default',
                cssClass: "e-icon e-mail e-reportviewer-icon",
                id:'E-Mail',
                tooltip: {
                    header: 'E-Mail',
                    content: 'Send rendered report as mail attachment'
                }
            }]
        },
        toolBarItemClick: ontoolBarItemClick
    });
});