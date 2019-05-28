$(function () {
    $("#viewer").ejReportViewer({
                    reportServiceUrl: "https://reports.syncfusion.com/demos/services/api/ReportViewer",
                    processingMode: ej.ReportViewer.ProcessingMode.Local,
                    reportPath: '~/Resources/docs/product-list.rdlc',
                    reportLoaded: "onReportLoaded"
                });
});

function onReportLoaded(args) {
                var dataSource = [
                    {
                        ProductName: "Baked Chicken and Cheese", OrderId: "323B60", Price: 55, Category: "Non-Veg", Ingredients: "Grilled chicken, Corn and Olives.", ProductImage: ""
                    },
                    {
                        ProductName: "Chicken Delite", OrderId: "323B61", Price: 100, Category: "Non-Veg", Ingredients: "Cheese, Chicken chunks, Onions & Pineapple chunks.", ProductImage: ""
                    },
                    {
                        ProductName: "Chicken Tikka", OrderId: "323B62", Price: 64, Category: "Non-Veg", Ingredients: "Onions, Grilled chicken, Chicken salami & Tomatoes.", ProductImage: ""
                    }];

                var reportObj = $('#viewer').data("ejReportViewer");
                reportObj.model.dataSources = [{
                    value: ej.DataManager(dataSource).executeLocal(ej.Query()),
                    name: "list"
                }];
            }