function onPrintProgressChanged(args) {
        if (args.stage === "beginPrint") {
            $('#viewer').ejWaitingPopup({ showOnInit: true, cssClass: "customStyle", text: "Preparing print data.. Please wait..." });
        }
        if (args.stage === "printStarted") {
            var popupObj1 = $('#viewer').data('ejWaitingPopup');
            popupObj1.hide();
        }
        else if (args.stage === "preparation") {
            console.log(args.stage);
            if (args.preparationStage === "dataPreparation") {
                console.log(args.preparationStage);
                console.log(args.totalPages);
                console.log(args.currentPage);
                if (args.totalPages > 1 && args.currentPage > 1) {
                    var progressPercentage = Math.floor((args.currentPage / args.totalPages) * 100);
                    if (progressPercentage > 0) {
                        var popupObj2 = $('#viewer').data('ejWaitingPopup');
                        popupObj2.setModel({ text: "Preparing print data.." + progressPercentage + " % completed.. Please wait..." });
                    }
                }
            }
        }

        args.handled = true;
    }

$(function () {
    $("#viewer").ejReportViewer({
                    reportServiceUrl: "https://reports.syncfusion.com/demos/services/api/ReportViewer",
                    reportPath: '~/Resources/docs/product-details.rdl',
                    printProgressChanged: onPrintProgressChanged
                });
});            