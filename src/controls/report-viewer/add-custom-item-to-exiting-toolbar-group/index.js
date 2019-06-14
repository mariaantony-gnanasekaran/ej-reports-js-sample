//Toolbar click event handler
function ontoolBarItemClick(args) {
    if (args.value === "CustomGroup") {
        //Implement the code to CustomGroup toolbar option
        alert("CustomGroup toolbar option clicked");
    }
    if (args.value === "subCustomGroup") {
        //Implement the code to subCustomGroup toolbar option
        alert("SubCustomGroup toolbar option clicked");
    }
}

$(function () {
        $("#viewer").ejReportViewer({
            reportServiceUrl: "https://reports.syncfusion.com/demos/services/api/ReportViewer",
            reportPath: '~/Resources/docs/sales-order-detail.rdl',
            toolbarSettings: {
                showToolbar: true,
                items: ej.ReportViewer.ToolbarItems.All & ~ej.ReportViewer.ToolbarItems.Print,
                customGroups: [{
                    items: [{
                        type: 'Default',
                        cssClass: "e-icon e-mail e-reportviewer-icon CustomGroup",
                        id: 'CustomGroup',
                        tooltip: { header: 'CustomGroup', content: 'toolbargroups'}
                    },
                    {
                        type: 'Default',
                        cssClass: "e-icon e-mail e-reportviewer-icon subCustomGroup",
                        id: 'subCustomGroup',
                        tooltip: { header: 'subCustomGroup', content: 'subtoolbargroups'}
                    }],
                    groupIndex: 3
                }]
            },
            toolBarItemClick: ontoolBarItemClick
        });
    });