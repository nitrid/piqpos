function PosSatisRaporCtrl ($scope,$window,db)
{
    let StartDate = moment();
    let EndDate = moment();
    let TmpPopUp;
    let TmpPopUpContent;

    $('#Date').on('apply.daterangepicker', function(ev, picker) 
    {
        StartDate = picker.startDate;
        EndDate = picker.endDate;
    });
    function DateTitle(start, end) 
    {
        $('#Date span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    }
    function InitReportPivot()
    {
        $("#salesgrid").dxPivotGrid(
        {
            allowSortingBySummary: true,
            allowFiltering: true,
            showColumnGrandTotals: false,
            showRowGrandTotals: true,
            showRowTotals: true,
            showColumnTotals: false,
            showBorders: true,
            height: 800,            
            fieldChooser: 
            {
                enabled: true,
                height: 400
            },
            dataSource: 
            {
                retrieveFields: false,
                fields: 
                [
                    {
                        caption: "TARIH",
                        width: 80,
                        dataField: "DOC_DATE",
                        dataType: "date",
                        format: "dd/MM/yyyy",
                        area: "row",
                        expanded: true
                    }, 
                    {
                        caption: "VAT",
                        dataField: "VAT",
                        width: 50,
                        area: "row",
                    },
                    {
                        caption: "KASA",
                        dataField: "DEVICE",
                        width: 80,
                        area: "row",
                    },
                    {
                        caption: "TIP",
                        width: 80,
                        dataField: "TYPE",
                        area: "row",
                    }, 
                    {
                        dataField: "TITLE",
                        caption: "TITLE",
                        width: 80,
                        area: "column"
                    },
                    {
                        caption: "HT",
                        dataField: "HT",
                        dataType: "number",
                        summaryType: "sum",
                        format: 
                        {
                            style: "currency", currency: "EUR",
                        },
                        area: "data"
                    },
                    {
                        caption: "TVA",
                        dataField: "TVA",
                        dataType: "number",
                        summaryType: "sum",
                        format: 
                        {
                            style: "currency", currency: "EUR",
                        },
                        area: "data"
                    },
                    {
                        caption: "TTC",
                        dataField: "TTC",
                        dataType: "number",
                        summaryType: "sum",
                        format: 
                        {
                            style: "currency", currency: "EUR",
                        },
                        area: "data"
                    }
                ],
                store: $scope.SaleData
            },
            export: 
            {
                enabled: true
            },
            onCellPrepared: function(e) 
            {        
                if(e.cell.columnType === "GT" || e.cell.rowType === "GT")
                {
                    e.cellElement.css("backgroundColor", "#ea863e")
                    e.cellElement.css("font-weight", "bold") 
                    e.cellElement.css("color", "white") 
                }
                if(e.cell.columnType === "T" || e.cell.rowType === "T")
                {
                    e.cellElement.css("backgroundColor", "#488ce4")
                    e.cellElement.css("font-weight", "bold") 
                    e.cellElement.css("color", "white") 
                }                    
            },
            onExporting: function(e) 
            {
                var workbook = new ExcelJS.Workbook();
                var worksheet = workbook.addWorksheet('Sales');
                
                DevExpress.excelExporter.exportPivotGrid(
                {
                    component: e.component,
                    worksheet: worksheet
                }).then(function() 
                {
                    workbook.xlsx.writeBuffer().then(function(buffer) 
                    {
                        //DOSYA ADINA İLERİDE FİRMA ADI EKLENECEK
                        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Detaille Ventes.xlsx');
                    });
                });
                e.cancel = true;
            }
        })
    }
    function InitPayDetailReportPivot()
    {
        $("#paymentdetailgrid").dxPivotGrid(
        {
            allowSortingBySummary: true,
            allowFiltering: true,
            showBorders: true,
            showColumnGrandTotals: true,
            showRowGrandTotals: true,
            showRowTotals: true,
            showColumnTotals: true,
            showBorders: true,
            height: 800,
            fieldChooser: 
            {
                enabled: true,
                height: 400
            },
            dataSource: 
            {
                retrieveFields: false,
                fields: 
                [
                    {
                        caption: "TARIH",
                        width: 80,
                        dataField: "DOC_DATE",
                        dataType: "date",
                        format: "dd/MM/yyyy",
                        area: "row",
                        expanded: true
                    }, 
                    {
                        caption: "KASA",
                        dataField: "DEVICE",
                        width: 80,
                        area: "row",
                        expanded: true
                    },
                    {
                        caption: "TIP",
                        width: 80,
                        dataField: "DOC_TYPE",
                        area: "row",
                    }, 
                    {
                        dataField: "TYPE",
                        caption: "TYPE",
                        width: 80,
                        area: "column",
                    },
                    {
                        caption: "AMOUNT",
                        dataField: "AMOUNT",
                        dataType: "number",
                        summaryType: "sum",
                        format: 
                        {
                            style: "currency", currency: "EUR",
                        },
                        area: "data",
                    }
                ],
                store: $scope.PayDetailData
            },
            export: 
            {
                enabled: true
            },
            onCellPrepared: function(e) 
            {        
                if(e.cell.text == 'Espece' || e.cell.text == 'TPE' || e.cell.text == 'Cheque' || e.cell.text == 'CHEQue' || e.cell.text == "B.D'Avoir" || e.cell.text == "Surplus T.R.")
                {
                    e.cellElement.css("font-weight", "bold") 
                }
                if(e.cell.columnType === "GT" || e.cell.rowType === "GT")
                {
                    e.cellElement.css("backgroundColor", "#ea863e")
                    e.cellElement.css("font-weight", "bold") 
                    e.cellElement.css("color", "white") 
                }
                if(e.cell.columnType === "T" || e.cell.rowType === "T")
                {
                    e.cellElement.css("backgroundColor", "#488ce4")
                    e.cellElement.css("font-weight", "bold") 
                    e.cellElement.css("color", "white") 
                }                    
            },
            onExporting: function(e) 
            {
                var workbook = new ExcelJS.Workbook();
                var worksheet = workbook.addWorksheet('Sales');
                
                DevExpress.excelExporter.exportPivotGrid(
                {
                    component: e.component,
                    worksheet: worksheet
                }).then(function() 
                {
                    workbook.xlsx.writeBuffer().then(function(buffer) 
                    {
                        //DOSYA ADINA İLERİDE FİRMA ADI EKLENECEK
                        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Detaille Ventes.xlsx');
                    });
                });
                e.cancel = true;
            }
        })
    }
    function InitReportPaymentPivot()
    {
        $("#paymentgrid").dxPivotGrid(
        {
            allowSortingBySummary: true,
            allowSorting: true,
            allowFiltering: true,
            showBorders: true,
            showColumnGrandTotals: false,
            showRowGrandTotals: true,
            showRowTotals: true,
            showColumnTotals: false,
            showBorders: true,
            height: 800,
            fieldChooser: 
            {
                enabled: true,
                height: 400
            },
            dataSource: 
            {
                retrieveFields: false,
                fields: 
                [
                    {
                        caption: db.Language($scope.Lang,"TARIH"),
                        dataField: "DOC_DATE",
                        dataType: "date",
                        format: "dd/MM/yyyy",
                        width: 80,        
                        area: "row",
                    },  
                    {
                        caption: db.Language($scope.Lang,"KASA"),
                        dataField: "DEVICE",
                        width: 80,                        
                        area: "row",
                    },     
                    {
                        caption: db.Language($scope.Lang,"TİP"),
                        dataField: "PAY_TYPE",
                        width: 80,                        
                        area: "row",
                        expanded: true
                    },                     
                    {
                        dataField: "TITLE",
                        caption: db.Language($scope.Lang,"TITLE"),
                        width: 80,
                        area: "column"
                    },
                    {
                        caption: db.Language($scope.Lang,"TUTAR"),
                        dataField: "PAY_AMOUNT",
                        dataType: "number",
                        summaryType: "sum",
                        format: 
                        {
                            style: "currency", currency: "EUR",
                        },
                        area: "data"
                    },
                    {
                        caption: db.Language($scope.Lang,"ADET"),
                        dataField: "PAY_AMOUNT",
                        dataType: "number",
                        summaryType: "count",
                        area: "data"
                    },
                    {
                        caption: "TICKET",
                        dataField: "TICKET",
                        dataType: "number",
                        // summaryType: "max",
                        area: "data",
                        summaryType: 'custom',
                        calculateCustomSummary: function (options) 
                        {
                            if (options.summaryProcess == 'start') 
                            {
                                options.totalValue = 0; //Sum
                                options.lastvalue = 0;
                            }
                            if (options.summaryProcess == 'calculate') 
                            {
                                if(options.lastvalue != options.value)
                                {
                                    options.lastvalue = options.value;
                                    options.totalValue += options.value;
                                }
                            }
                            if (options.summaryProcess == 'finalize') 
                            {

                            }
                            
                        }
                    }
                ],
                store: $scope.PaymentData
            },
            export: 
            {
                enabled: true
            },
            onCellPrepared: function(e) 
            {        
                if(e.cell.columnType === "GT" || e.cell.rowType === "GT")
                {
                    e.cellElement.css("backgroundColor", "#ea863e")
                    e.cellElement.css("font-weight", "bold") 
                    e.cellElement.css("color", "white") 
                }
                if(e.cell.columnType === "T" || e.cell.rowType === "T")
                {
                    e.cellElement.css("backgroundColor", "#488ce4")
                    e.cellElement.css("font-weight", "bold") 
                    e.cellElement.css("color", "white") 
                }                    
            },
            onExporting: function(e) 
            {
                var workbook = new ExcelJS.Workbook();
                var worksheet = workbook.addWorksheet('Sales');
                
                DevExpress.excelExporter.exportPivotGrid(
                {
                    component: e.component,
                    worksheet: worksheet
                }).then(function() 
                {
                    workbook.xlsx.writeBuffer().then(function(buffer) 
                    {
                        //DOSYA ADINA İLERİDE FİRMA ADI EKLENECEK
                        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Detaille Ventes.xlsx');
                    });
                });
                e.cancel = true;
            }
        })
    }
    function InitPopUp()
    {
        TmpPopUpContent = function(pData) 
        {
            let TmpHtml = ""
            let TmpTitlePark = db.Language($scope.Lang,"Park da Bekleyen")
            let TmpTitleSatir = db.Language($scope.Lang,"Satır Silinen")
            let TmpTitleTicket = db.Language($scope.Lang,"Ticket Silinen")
            for (let i = 0; i < Object.keys(db.ToGroupBy(pData,"TIP")).length; i++) 
            {
                if(Object.keys(db.ToGroupBy(pData,"TIP"))[i] == "0")
                {
                    TmpHtml += "<p style='font-size: 18px;font-weight: bold;'>" + TmpTitlePark + "</p>";

                    let TmpData = db.ToGroupBy(pData,"TIP")[Object.keys(db.ToGroupBy(pData,"TIP"))[i]];

                    for (let x = 0; x < TmpData.length; x++) 
                    {
                        TmpHtml += "<p>" + TmpData[x].LUSER + " - " + TmpData[x].COUNT + "</p>"                       
                    }
                }   
                else if(Object.keys(db.ToGroupBy(pData,"TIP"))[i] == "1")
                {
                    TmpHtml += "<p style='font-size: 18px;font-weight: bold;'>" + TmpTitleSatir + "</p>";

                    let TmpData = db.ToGroupBy(pData,"TIP")[Object.keys(db.ToGroupBy(pData,"TIP"))[i]];

                    for (let x = 0; x < TmpData.length; x++) 
                    {
                        TmpHtml += "<p>" + TmpData[x].LUSER + " - " + TmpData[x].COUNT + "</p>"                       
                    }
                }       
                else if(Object.keys(db.ToGroupBy(pData,"TIP"))[i] == "2")
                {
                    TmpHtml += "<p style='font-size: 18px;font-weight: bold;'>" + TmpTitleTicket + "</p>";

                    let TmpData = db.ToGroupBy(pData,"TIP")[Object.keys(db.ToGroupBy(pData,"TIP"))[i]];

                    for (let x = 0; x < TmpData.length; x++) 
                    {
                        TmpHtml += "<p>" + TmpData[x].LUSER + " - " + TmpData[x].COUNT + "</p>"                       
                    }
                }                 
            }
            
            return $("<div>").append(TmpHtml);
        };
        TmpPopUp = $("#popup").dxPopup(
            {
                contentTemplate: TmpPopUpContent,
                width: 500,
                height: 580,
                container: ".dx-viewport",
                showTitle: true,
                title: db.Language($scope.Lang,"Bilgi"),
                visible: false,
                dragEnabled: false,
                closeOnOutsideClick: true,
                showCloseButton: false,
                position: 
                {
                    at: "center",
                    my: "center",
                },
                toolbarItems: 
                [
                    {
                        widget: "dxButton",
                        toolbar: "bottom",
                        location: "after",
                        options: 
                        {
                            text: "Close",
                            onClick: function(e) 
                            {
                                TmpPopUp.hide();
                            }
                        }
                    }
                ]
            }
        ).dxPopup("instance");
    }
    $scope.Init = async function()
    {        
        InitPopUp();

        if(typeof localStorage.Lang != 'undefined')
        {
            $scope.Lang = localStorage.Lang;
        }
        else
        {
            $scope.Lang = "TR";
        }

        $('#Date').daterangepicker(
        {
            startDate: StartDate,
            endDate: EndDate,
            alwaysShowCalendars: true,
            ranges: 
            {
                [db.Language($scope.Lang,"Bugün")] : [moment(), moment()],
                [db.Language($scope.Lang,"Dün")]: [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                [db.Language($scope.Lang,"Bu Hafta")] : [moment().startOf('week'), moment().endOf('week')],
                [db.Language($scope.Lang,"Geçen Hafta")]: [moment().subtract(1, 'week').startOf('week'), moment().subtract(1, 'week').endOf('week')],
                [db.Language($scope.Lang,"Bu Ay")]: [moment().startOf('month'), moment().endOf('month')],
                [db.Language($scope.Lang,"Geçen Ay")]: [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')],
                [db.Language($scope.Lang,"Bu Yıl")]: [moment().startOf('year'), moment().endOf('year')],
                [db.Language($scope.Lang,"Geçen Yıl")]: [moment().subtract(1, 'year').startOf('year'), moment().subtract(1, 'year').endOf('year')]
            }
        }, DateTitle);

        DateTitle(StartDate, EndDate);      

        // InitReportPivot();          
        $scope.SaleData = [];
        $scope.PaymentData = [];
        $scope.PayDetailData = [];

        $scope.BtnRunReport()

        let TmpQuery = 
        {
            db : $scope.Firma,
            query:  "SELECT LUSER,COUNT(LUSER) AS [COUNT],0 AS TIP FROM (SELECT ISNULL((SELECT TOP 1 NAME FROM USERS WHERE CODE = MAX(LUSER)),'') AS LUSER FROM POS_SALES WHERE STATUS = 0 GROUP BY REF,REF_NO) AS TMP GROUP BY LUSER " +
                    "UNION ALL " +
                    "SELECT LUSER,COUNT(LUSER) AS [COUNT],1 AS TIP FROM (SELECT ISNULL((SELECT TOP 1 NAME FROM USERS WHERE CODE = MAX(LUSER)),'') AS LUSER FROM POS_SALES WHERE STATUS = -1 AND DOC_DATE >= CONVERT(NVARCHAR(10),GETDATE(),112) GROUP BY REF,REF_NO) AS TMP GROUP BY LUSER " +
                    "UNION ALL " +
                    "SELECT LUSER,COUNT(LUSER) AS [COUNT],2 AS TIP FROM (SELECT ISNULL((SELECT TOP 1 NAME FROM USERS WHERE CODE = MAX(LUSER)),'') AS LUSER FROM POS_SALES WHERE STATUS = -2 AND DOC_DATE >= CONVERT(NVARCHAR(10),GETDATE(),112) GROUP BY REF,REF_NO) AS TMP GROUP BY LUSER",
        }

        let TmpData = await db.GetPromiseQuery(TmpQuery);

        TmpPopUp.option(
        {
            contentTemplate: () => TmpPopUpContent(TmpData)
        });
        TmpPopUp.show();  
    }
    $scope.BtnRunReport = async function()
    {
        let TmpQuery = 
        {
            db : $scope.Firma,
            query:  "SELECT " +
                    "MAX(SALES.DOC_DATE) AS DOC_DATE," +
                    "'CAISSE ' + CONVERT(NVARCHAR,MAX(SALES.DEVICE)) AS DEVICE," +
                    "CASE WHEN SALES.TYPE = 0 THEN 'VENTE' ELSE 'REMB.MNT' END AS TYPE," +
                    "'DETAILLE' AS TITLE, " +
                    "CASE WHEN SALES.TYPE = 0 THEN SUM(SALES.HT) ELSE SUM(SALES.HT) * -1 END AS HT, " +
                    "VAT AS VAT, " +
                    "CASE WHEN SALES.TYPE = 0 THEN SUM(SALES.TVA) ELSE SUM(SALES.TVA) * -1 END AS TVA," +
                    "CASE WHEN SALES.TYPE = 0 THEN SUM(SALES.TTC) ELSE SUM(SALES.TTC) * -1 END AS TTC, " +
                    "'' AS TITLE_BLANK, " + 
                    "ISNULL((SELECT CASE WHEN MAX(DOC_TYPE) = 0 THEN SUM(AMOUNT) ELSE SUM(AMOUNT) * -1 END FROM POS_PAYMENT_VW_01 AS PAYMENT WHERE PAYMENT.REF = SALES.REF AND PAYMENT.REF_NO = SALES.REF_NO AND PAYMENT.DOC_TYPE = SALES.TYPE AND PAYMENT.TYPE = 0 AND PAYMENT.STATUS = 1),0) AS [Espece], " + 
                    "ISNULL((SELECT SUM(AMOUNT) FROM POS_PAYMENT_VW_01 AS PAYMENT WHERE PAYMENT.REF = SALES.REF AND PAYMENT.REF_NO = SALES.REF_NO AND PAYMENT.DOC_TYPE = SALES.TYPE AND PAYMENT.TYPE = 1 AND PAYMENT.STATUS = 1),0) AS [Carte Bancaire TPE], " + 
                    "ISNULL((SELECT SUM(AMOUNT) FROM POS_PAYMENT_VW_01 AS PAYMENT WHERE PAYMENT.REF = SALES.REF AND PAYMENT.REF_NO = SALES.REF_NO AND PAYMENT.DOC_TYPE = SALES.TYPE AND PAYMENT.TYPE = 2 AND PAYMENT.STATUS = 1),0) AS [Cheque], " + 
                    "ISNULL((SELECT SUM(AMOUNT) FROM POS_PAYMENT_VW_01 AS PAYMENT WHERE PAYMENT.REF = SALES.REF AND PAYMENT.REF_NO = SALES.REF_NO AND PAYMENT.DOC_TYPE = SALES.TYPE AND PAYMENT.TYPE = 3 AND PAYMENT.STATUS = 1),0) AS [CHEQue], " + 
                    "ISNULL((SELECT CASE WHEN MAX(DOC_TYPE) = 0 THEN SUM(AMOUNT) ELSE SUM(AMOUNT) * -1 END FROM POS_PAYMENT_VW_01 AS PAYMENT WHERE PAYMENT.REF = SALES.REF AND PAYMENT.REF_NO = SALES.REF_NO AND PAYMENT.DOC_TYPE = SALES.TYPE AND PAYMENT.TYPE = 4 AND PAYMENT.STATUS = 1),0) AS [Bon D''Avoir], " +
                    "ISNULL((SELECT SUM(TICKET_PLUS) FROM POS_PAYMENT_VW_01 AS PAYMENT WHERE PAYMENT.REF = SALES.REF AND PAYMENT.REF_NO = SALES.REF_NO AND PAYMENT.DOC_TYPE = SALES.TYPE AND PAYMENT.STATUS = 1),0) AS [Ticket Plus] " +  
                    "FROM POS_SALES_VW_01 AS SALES " +
                    "WHERE SALES.DOC_DATE >= @ILKTARIH AND SALES.DOC_DATE <= @SONTARIH AND SALES.STATUS = 1 " +
                    "GROUP BY SALES.REF,SALES.REF_NO,SALES.TYPE,SALES.VAT ORDER BY MAX(SALES.DOC_DATE) ASC",
            param:  ['ILKTARIH','SONTARIH'],
            type:   ['date','date'],
            value:  [moment(StartDate).format("DD.MM.YYYY"),moment(EndDate).format("DD.MM.YYYY")]            
        }
        
        let TmpData = await db.GetPromiseQuery(TmpQuery)
        $scope.SaleData = TmpData;

        TmpQuery = 
        {
            db : $scope.Firma,
            query:  "SELECT " +
                    "PAYMENT.REF, " +
                    "PAYMENT.REF_NO, " +
                    "'CAISSE ' + CONVERT(NVARCHAR,MAX(PAYMENT.DEVICE)) AS DEVICE, " +
                    "'' AS TITLE, " +
                    "(SELECT COUNT(REF_NO) FROM (SELECT P1.REF_NO FROM POS_PAYMENT_VW_01 AS P1 WHERE P1.DOC_DATE >= @ILKTARIH AND P1.DOC_DATE <= @SONTARIH AND P1.STATUS = 1 AND P1.REF = PAYMENT.REF GROUP BY P1.REF,P1.REF_NO) AS TBL) AS TICKET, " +
                    "MAX(PAYMENT.DOC_DATE) AS DOC_DATE, " +
                    "MAX(PAYMENT.TYPE_NAME) AS PAY_TYPE, " +
                    "SUM(CASE WHEN PAYMENT.DOC_TYPE = 0 THEN PAYMENT.AMOUNT ELSE PAYMENT.AMOUNT * -1 END) AS PAY_AMOUNT " +
                    "FROM POS_PAYMENT_VW_01 AS PAYMENT " +
                    "WHERE PAYMENT.DOC_DATE >= @ILKTARIH AND PAYMENT.DOC_DATE <= @SONTARIH AND PAYMENT.STATUS = 1 " +
                    "GROUP BY PAYMENT.REF,PAYMENT.REF_NO,PAYMENT.TYPE,PAYMENT.DOC_TYPE ORDER BY MAX(PAYMENT.DOC_DATE) ASC",
            param:  ['ILKTARIH','SONTARIH'],
            type:   ['date','date'],
            value:  [moment(StartDate).format("DD.MM.YYYY"),moment(EndDate).format("DD.MM.YYYY")]            
        }
        
        TmpData = await db.GetPromiseQuery(TmpQuery)
        $scope.PaymentData = TmpData;

        TmpQuery = 
        {
            db : $scope.Firma,
            query:  "SELECT " + 
                    "MAX(DOC_DATE) AS DOC_DATE,  " + 
                    "'CAISSE ' + CONVERT(NVARCHAR,MAX(DEVICE)) AS DEVICE, " + 
                    "CASE WHEN DOC_TYPE = 0 THEN 'VENTE' ELSE 'REMB.MNT' END AS DOC_TYPE, " + 
                    "CASE WHEN TYPE = 0 THEN 'ESC' WHEN TYPE = 1 THEN 'CB' WHEN TYPE = 2 THEN 'Chq' WHEN TYPE = 3 THEN 'CHQe' WHEN TYPE = 4 THEN 'B.D''AVOIR' END AS TYPE, " + 
                    "CASE WHEN DOC_TYPE = 0 THEN SUM(AMOUNT) ELSE SUM(AMOUNT) * -1 END AS AMOUNT " + 
                    "FROM POS_PAYMENT_VW_01 WHERE DOC_DATE >= @ILKTARIH AND DOC_DATE <= @SONTARIH AND STATUS = 1 GROUP BY REF,REF_NO,TYPE,DOC_TYPE " + 
                    "UNION ALL " + 
                    "SELECT  " + 
                    "MAX(DOC_DATE) AS DOC_DATE, " + 
                    "'CAISSE ' + CONVERT(NVARCHAR,MAX(DEVICE)) AS DEVICE, " + 
                    "CASE WHEN DOC_TYPE = 0 THEN 'VENTE' ELSE 'REMB.MNT' END AS DOC_TYPE, " + 
                    "'TICKET PLUS' AS TYPE, " + 
                    "CASE WHEN DOC_TYPE = 0 THEN SUM(TICKET_PLUS) ELSE SUM(TICKET_PLUS) * -1 END AS AMOUNT " + 
                    "FROM POS_PAYMENT_VW_01 WHERE DOC_DATE >= @ILKTARIH AND DOC_DATE <= @SONTARIH AND STATUS = 1 AND TICKET_PLUS <> 0 GROUP BY REF,REF_NO,TYPE,DOC_TYPE ORDER BY DOC_TYPE ASC",
            param:  ['ILKTARIH','SONTARIH'],
            type:   ['date','date'],
            value:  [moment(StartDate).format("DD.MM.YYYY"),moment(EndDate).format("DD.MM.YYYY")]            
        }
        
        TmpData = await db.GetPromiseQuery(TmpQuery)
        $scope.PayDetailData = TmpData;

        InitReportPivot();
        InitReportPaymentPivot();
        InitPayDetailReportPivot();
    }
}