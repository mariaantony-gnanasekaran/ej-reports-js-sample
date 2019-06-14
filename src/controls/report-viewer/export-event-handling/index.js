function onExportProgressChanged(args) {
        if (args.stage === "beginExport") {
            console.log(args.stage);
            args.format =
                $('#viewer').ejWaitingPopup({ showOnInit: true, cssClass: "customStyle", text: "Preparing exporting document.. Please wait..." });
        }
        else if (args.stage === "exportStarted") {
            console.log(args.stage);
            var popupObj1 = $('#viewer').data('ejWaitingPopup');
            popupObj1.hide();
        }
        else if (args.stage === "preparation") {
            console.log(args.stage);
            console.log(args.format);
            console.log(args.preparationStage);
            if (args.format === "PDF" && args.preparationStage === "documentPreparation") {
                console.log(args.totalPages);
                console.log(args.currentPage);
                if (args.totalPages > 1 && args.currentPage > 1) {
                    var progressPercentage = Math.floor((args.currentPage / args.totalPages) * 100);
                    if (progressPercentage > 0) {
                        var popupObj2 = $('#viewer').data('ejWaitingPopup');
                        popupObj2.setModel({ text: "Preparing exporting document.." + progressPercentage + " % completed.. Please wait..." });
                    }
                }
            }
        }

        args.handled = true;
    }

$(function () {
    $("#viewer").ejReportViewer({
                    reportServiceUrl: "https://reports.syncfusion.com/demos/services/api/ReportViewer",
                    reportPath: '~/Resources/docs/sales-order-detail.rdl',
                    exportProgressChanged: onExportProgressChanged
                });
});