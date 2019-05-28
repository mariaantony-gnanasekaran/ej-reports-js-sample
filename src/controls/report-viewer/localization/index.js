$(function () {
                var dataValue = "";
                var apiRequest = new Object({
                    password: "demo",
                    userid: "guest"
                    });

                $.ajax({
                    type: "POST",
                    url: "https://reportserver.syncfusion.com/api/get-user-key",
                    data: apiRequest,
                    success: function (data) {
                        dataValue = data.Token;
                        var token = JSON.parse(dataValue);

                        $("#viewer").ejReportViewer(
                            {
                                reportServiceUrl: "https://reportserver.syncfusion.com/ReportService/api/Viewer",
                                serviceAuthorizationToken: token.token_type + " " + token.access_token,
                                reportPath: '/Sample Reports/Sales Order Detail',
								//Render Report Viewer in French locale
								locale: "fr-FR"
                            });
                    }
                });
            });