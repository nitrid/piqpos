function SatisFisListesiCtrl ($scope,$window,db)
{
    let MusteriSecimSelectedRow = null;
    let UrunSecimSelectedRow = null;
    let KasaSecimSelectedRow = null;
    let KasiyerSecimSelectedRow = null;
    let SatisFisListeSelectedRow = null;
    let SatisFisTahDetaySelectedRow = null;

    function InitMusteriSecim(pData)
    {
        let db = {
            loadData: function(filter)
            {
                return $.grep(pData, function(client)
                {
                    return (!filter.CODE || client.CODE.toLowerCase().indexOf(filter.CODE.toLowerCase()) > -1)
                        && (!filter.NAME || client.NAME.toLowerCase().indexOf(filter.NAME.toLowerCase()) > -1)
                });
            }
        };

        $("#TblMusteriSecim").jsGrid
        ({
            width: "100%",
            updateOnResize: true,
            heading: true,
            selecting: true,
            filtering : true,
            data : pData,
            paging : true,
            pageSize: 20,
            pageButtonCount: 3,
            pagerFormat: "{pages} {next} {last}    {pageIndex} of {pageCount}",
            fields: 
            [
                {
                    name: "CODE",
                    type: "text",
                    align: "center",
                    width: 100
                    
                },
                {
                    title: "NAME",
                    name: "NAME",
                    type: "text",
                    align: "center",
                    width: 300
                }
            ],
            rowClick: function(args)
            {
                MusteriSecimRowClick(args.itemIndex,args.item,this);
                $scope.$apply();
            },
            controller:db,
        });
    }
    function InitUrunSecim(pData)
    {
        let db = {
            loadData: function(filter)
            {
                return $.grep(pData, function(produit)
                {
                    return (!filter.CODE || produit.CODE.toLowerCase().indexOf(filter.CODE.toLowerCase()) > -1)
                        && (!filter.NAME || produit.NAME.toLowerCase().indexOf(filter.NAME.toLowerCase()) > -1)
                });
            }
        };

        $("#TblUrunSecim").jsGrid
        ({
            width: "100%",
            updateOnResize: true,
            heading: true,
            selecting: true,
            filtering : true,
            data : pData,
            paging : true,
            pageSize: 20,
            pageButtonCount: 3,
            pagerFormat: "{pages} {next} {last}    {pageIndex} of {pageCount}",
            fields: 
            [
                {
                    name: "CODE",
                    type: "text",
                    align: "center",
                    width: 100
                    
                },
                {
                    title: "NAME",
                    name: "NAME",
                    type: "text",
                    align: "center",
                    width: 300
                }
            ],
            rowClick: function(args)
            {
                UrunSecimRowClick(args.itemIndex,args.item,this);
                $scope.$apply();
            },
            controller:db,
        });
    }
    function InitKasaSecim(pData)
    {
        $("#TblKasaSecim").jsGrid
        ({
            width: "100%",
            updateOnResize: true,
            heading: true,
            selecting: true,
            data : pData,
            paging : true,
            pageSize: 20,
            pageButtonCount: 3,
            pagerFormat: "{pages} {next} {last}    {pageIndex} of {pageCount}",
            fields: 
            [
                {
                    name: "ID",
                    type: "text",
                    align: "center",
                    width: 100
                    
                },
                {
                    title: "NAME",
                    name: "NAME",
                    type: "text",
                    align: "center",
                    width: 300
                }
            ],
            rowClick: function(args)
            {
                KasaSecimRowClick(args.itemIndex,args.item,this);
                $scope.$apply();
            },
        });
    }
    function InitKasiyerSecim(pData)
    {
        $("#TblKasiyerSecim").jsGrid
        ({
            width: "100%",
            updateOnResize: true,
            heading: true,
            selecting: true,
            data : pData,
            paging : true,
            pageSize: 20,
            pageButtonCount: 3,
            pagerFormat: "{pages} {next} {last}    {pageIndex} of {pageCount}",
            fields: 
            [
                {
                    name: "CODE",
                    type: "text",
                    align: "center",
                    width: 100
                    
                },
                {
                    title: "NAME",
                    name: "NAME",
                    type: "text",
                    align: "center",
                    width: 300
                }
            ],
            rowClick: function(args)
            {
                KasiyerSecimRowClick(args.itemIndex,args.item,this);
                $scope.$apply();
            },
        });
    }
    function InitSatisFisListesiGrid()
    {   
        $("#TblSatisFisListesi").jsGrid({
            responsive: true,
            width: "100%",
            height: "550px",
            updateOnResize: true,
            heading: true,
            selecting: true,
            sorting: true,
            data : $scope.SatisFisListesi,
            fields: 
            [
            {
                name: "DATE",
                title: "DATE",
                type: "text",
                align: "center",
                width: 30
            },
            {
                name: "TIME",
                title: "TIME",
                type: "text",
                align: "center",
                width: 30
            },
            {
                name: "USERS",
                title: "USERS",
                type: "text",
                align: "center",
                width: 30
            },
            {
                name: "DEVICE",
                title: "CASE",
                type: "text",
                align: "center",
                width: 30
            },
            {
                name: "REF",
                title: "REF",
                type: "text",
                align: "center",
                width: 60
            },         
            {
                name: "REF_NO",
                title: "REF NO",
                type: "number",
                align: "center",
                width: 60
            },
            {
                name: "CUSTOMER",
                title: "CUSTOMER",
                type: "text",
                align: "center",
                width: 100
            },
            {
                name: "DISCOUNT",
                title: "DISCOUNT",
                type: "number",
                align: "center",
                width: 60
            },
            {
                name: "LOYALTY",
                title: "LOYALTY",
                type: "number",
                align: "center",
                width: 60
            },
            {
                name: "HT",
                title: "HT",
                type: "number",
                align: "center",
                width: 60
            },
            {
                name: "TVA",
                title: "TVA",
                type: "number",
                align: "center",
                width: 60
            },
            {
                name: "TTC",
                title: "TTC",
                type: "number",
                align: "center",
                width: 60
            },
            {
                name: "PAYMENT",
                title: "PAYMENT",
                type: "number",
                align: "center",
                width: 60
            }],
            rowClick: function(args)
            {
                SatisFisListeSecimRowClick(args.itemIndex,args.item,this);
                $scope.$apply();
            },
        });
    }
    function InitSatisFisDetayGrid()
    {
        $("#TblSatisFisDetay").jsGrid({
            responsive: true,
            width: "100%",
            height: "450px",
            updateOnResize: true,
            heading: true,
            selecting: true,
            data : $scope.SatisFisDetayList,
            fields: 
            [
            {
                name: "BARCODE",
                title: db.Language($scope.Lang,"BARKOD"),
                type: "number",
                align: "center",
                width: 100
            },
            {
                name: "NAME",
                title: "NAME",
                type: "TEXT",
                align: "center",
                width: 150
            },            
            {
                name: "QUANTITY",
                title: db.Language($scope.Lang,"MIKTAR"),
                type: "number",
                align: "center",
                width: 50
            },
            {
                name: "PRICE",
                title: db.Language($scope.Lang,"FIYAT"),
                type: "number",
                align: "center",
                width: 50
            },
            {
                name: "AMOUNT",
                title: db.Language($scope.Lang,"TUTAR"),
                type: "number",
                align: "center",
                width: 50
            }]
        });
    }
    function InitSatisFisTahDetayGrid()
    {
        $("#TblSatisFisTahDetay,#TblSatisFisTahDetay").each(function()
        {
            $(this).jsGrid({
                width: "100%",
                height: "200px",
                updateOnResize: true,
                heading: true,
                selecting: true,
                data : $scope.SatisFisTahDetayList,
                fields: 
                [
                {
                    name: "TYPE",
                    title: "TIP",
                    align: "center",
                    width: 75
                },
                {
                    name: "AMOUNT",
                    title: "AMOUNT",
                    type: "decimal",
                    align: "center",
                    width: 35
                }
                ],
                rowClick: function(args)
                {
                    $scope.TahTip = 0;
                    $scope.TxtAciklama = db.Language($scope.Lang,"Ödeme tipi hatalı girilmiştir.Düzeltmesi yapıldı.");  
                    
                    $('#MdlSatisFisTahGuncelle').modal('show'); 
                    $scope.TahDetayKalan = $scope.SatisFisListesi[$scope.SatisFisListeSelectedIndex].TTC - db.SumColumn($scope.SatisFisTahDetayList,"AMOUNT")
                    SatisFisTahDetayRowClick(args.itemIndex,args.item);
                    $scope.$apply();                      
                }
            });
        })
    }
    function MusteriSecimRowClick(pIndex,pItem,pObj)
    {    
        if ( MusteriSecimSelectedRow ) { MusteriSecimSelectedRow.children('.jsgrid-cell').css('background-color', '').css('color',''); }
        var $row = pObj.rowByItem(pItem);
        $row.children('.jsgrid-cell').css('background-color','#2979FF').css('color','white');
        MusteriSecimSelectedRow = $row;

        $scope.Musteri = pItem.CODE; 
        $("#MdlMusteriSecim").modal('hide');
    }
    function UrunSecimRowClick(pIndex,pItem,pObj)
    {    
        if ( UrunSecimSelectedRow ) { UrunSecimSelectedRow.children('.jsgrid-cell').css('background-color', '').css('color',''); }
        var $row = pObj.rowByItem(pItem);
        $row.children('.jsgrid-cell').css('background-color','#2979FF').css('color','white');
        UrunSecimSelectedRow = $row;

        $scope.Urun = pItem.CODE; 
        $("#MdlUrunSecim").modal('hide');
    }
    function KasaSecimRowClick(pIndex,pItem,pObj)
    {    
        if ( KasaSecimSelectedRow ) { KasaSecimSelectedRow.children('.jsgrid-cell').css('background-color', '').css('color',''); }
        var $row = pObj.rowByItem(pItem);
        $row.children('.jsgrid-cell').css('background-color','#2979FF').css('color','white');
        KasaSecimSelectedRow = $row;

        $scope.KasaNo = pItem.ID; 
        $("#MdlKasaSecim").modal('hide');
    }
    function KasiyerSecimRowClick(pIndex,pItem,pObj)
    {    
        if ( KasiyerSecimSelectedRow ) { KasiyerSecimSelectedRow.children('.jsgrid-cell').css('background-color', '').css('color',''); }
        var $row = pObj.rowByItem(pItem);
        $row.children('.jsgrid-cell').css('background-color','#2979FF').css('color','white');
        KasiyerSecimSelectedRow = $row;

        $scope.KasiyerNo = pItem.CODE; 
        $("#MdlKasiyerSecim").modal('hide');
    }
    function SatisFisListeSecimRowClick(pIndex,pItem,pObj)
    {    
        if ( SatisFisListeSelectedRow ) { SatisFisListeSelectedRow.children('.jsgrid-cell').css('background-color', '').css('color',''); }
        var $row = pObj.rowByItem(pItem);
        $row.children('.jsgrid-cell').css('background-color','#2979FF').css('color','white');
        SatisFisListeSelectedRow = $row;
        $scope.SatisFisListeSelectedIndex = pIndex;

        db.GetData($scope.Firma,'PosSonSatisDetayGetir',["1",pItem.REF,pItem.REF_NO,1],function(pData)
        {  
            $scope.SatisFisDetayList = pData;
            InitSatisFisDetayGrid();
        });
        db.GetData($scope.Firma,'PosSonSatisTahDetayGetir',["1",pItem.REF,pItem.REF_NO,1],function(pData)
        {  
            $scope.SatisFisTahDetayList = pData;
            $("#TblSatisFisTahDetay,#TblSatisFisTahDetay").each(function()
            {
                $(this).jsGrid({data : $scope.SatisFisTahDetayList});
            });
        });

        $("#TbDetay").addClass('active');
        $("#TbMain").removeClass('active');       
    }
    function SatisFisTahDetayRowClick (pIndex,pItem,pObj)
    {
        if ( SatisFisTahDetaySelectedRow ) { SatisFisTahDetaySelectedRow.children('.jsgrid-cell').css('background-color', '').css('color',''); }
        $("#TblSatisFisTahDetay,#TblSatisFisTahDetay").each(function()
        {
            $(this).jsGrid("rowByItem", pItem).children('.jsgrid-cell').css('background-color','#2979FF').css('color','white');
            SatisFisTahDetaySelectedRow = $(this).jsGrid("rowByItem", pItem);
        });

        SonTahIndex = pIndex;
        $scope.TxtSonTahGuncelle = pItem.AMOUNT
    }
    $scope.Init = function()
    {
        $scope.Kullanici = $window.sessionStorage.getItem('User');
        $scope.Sube = "1";

        $scope.Firma = 'PIQPOS';
        $scope.IlkTarih = moment(Date.now()).format("DD/MM/YYYY");
        $scope.SonTarih = moment(Date.now()).format("DD/MM/YYYY");
        $scope.Urun = "";
        $scope.Musteri = "";
        $scope.KasaNo = "";
        $scope.FisNo = "";
        $scope.FisTutar = 0;
        $scope.OdemeTipi = "-1";
        $scope.KasiyerNo = "";
        $scope.FisTipi = "0";
        $scope.TahDetayKalan = 0;
        $scope.TahTip = 0;
        $scope.TxtAciklama = "";
        $scope.CokluOdeme = false;
        $scope.SatisFisListeSelectedIndex = 0;
        
        $scope.SatisFisListesi = [];
        $scope.SatisFisDetayList = [];
        $scope.SatisFisTahDetayList = [];

        InitMusteriSecim();
        InitKasaSecim();
        InitKasiyerSecim();
        InitSatisFisListesiGrid();
        InitSatisFisDetayGrid();
        InitSatisFisTahDetayGrid();
    }
    $scope.BtnMusteriSecim = function()
    {
        let TmpQuery = 
        {
            db : $scope.Firma,
            query:  "SELECT [CODE],[NAME] FROM [CUSTOMERS]"
        }
        db.GetDataQuery(TmpQuery,function(Data)
        {
            InitMusteriSecim(Data);
            $("#MdlMusteriSecim").modal('show');
        });
    }
    $scope.BtnUrunSecim = function()
    {
        let TmpQuery = 
        {
            db : $scope.Firma,
            query:  "SELECT [CODE],[NAME] FROM [ITEMS]"
        }
        db.GetDataQuery(TmpQuery,function(Data)
        {
            InitUrunSecim(Data);
            $("#MdlUrunSecim").modal('show');
        });
    }
    $scope.BtnKasaSecim = function()
    {
        let TmpQuery = 
        {
            db : $scope.Firma,
            query:  "SELECT ID,NAME FROM DEVICE"
        }
        db.GetDataQuery(TmpQuery,function(Data)
        {
            InitKasaSecim(Data);
            $("#MdlKasaSecim").modal('show');
        });
    }
    $scope.BtnKasiyerSecim = function()
    {
        let TmpQuery = 
        {
            db : $scope.Firma,
            query: "SELECT CODE,NAME FROM USERS"
        }
        db.GetDataQuery(TmpQuery,function(Data)
        {
            InitKasiyerSecim(Data);
            $("#MdlKasiyerSecim").modal('show');
        });
    }
    $scope.BtnSatisFisListeGetir = async function()
    {
        let TmpDocType = 0;
        if($scope.OdemeTipi == "5")
        {
            $scope.OdemeTipi = 0;
            TmpDocType = 1
        }
        let TmpQuery = 
        {
            db : $scope.Firma,
            query:  "SELECT " +
                    "MAX(ITEM_CODE) AS ITEM_CODE, " +
                    "MAX(TIME) AS TIME, " +
                    "MAX(DATE) AS DATE, " +
                    "MAX(DEVICE) AS DEVICE, " +
                    "MAX(USERS) AS USERS," +
                    "MAX(DEPARTMENT) AS DEPARTMENT, " +
                    "MAX(SALE_TYPE) AS SALE_TYPE, " +
                    "REF AS REF, " +
                    "REF_NO AS REF_NO, " +
                    "COUNT(PAY_DOC_TYPE) AS PAY_COUNT, " +
                    "MAX(CUSTOMER) AS CUSTOMER, " +
                    "MAX(DISCOUNT) AS DISCOUNT, " +
                    "MAX(LOYALTY) AS LOYALTY, " +
                    "MAX(HT) AS HT, " +
                    "MAX(TVA) AS TVA, " +
                    "MAX(TTC) AS TTC, " +
                    "MAX(PAYMENT) AS PAYMENT " +
                    "FROM ( " +
                    "SELECT " +
                    "MAX(SALE.ITEM_CODE) AS ITEM_CODE, " +
                    "CONVERT(NVARCHAR,MAX(SALE.CDATE),101) AS DATE, " + 
                    "CONVERT(NVARCHAR,MAX(SALE.CDATE),108) AS TIME, " + 
                    "MAX(SALE.DEVICE) AS DEVICE, " +
                    "ISNULL((SELECT NAME FROM USERS WHERE CODE = MAX(SALE.LUSER)),'') AS USERS, " +
                    "MAX(SALE.DEPARTMENT) AS DEPARTMENT, " +
                    "SALE.TYPE AS SALE_TYPE, " +
                    "PAYMENT.TYPE AS PAYMENT_TYPE, " +
                    "PAYMENT.DOC_TYPE AS PAY_DOC_TYPE, " +
                    "SALE.REF AS REF, " +
                    "SALE.REF_NO AS REF_NO, " +
                    "MAX(SALE.CUSTOMER_CODE) AS CUSTOMER, " +
                    "ROUND(SUM(SALE.DISCOUNT),2) AS DISCOUNT, " +
                    "ROUND(SUM(SALE.LOYALTY_AMOUNT),2) LOYALTY, " +
                    "ROUND(SUM(SALE.HT),2) AS HT, " +
                    "ROUND(SUM(SALE.TVA),2) AS TVA, " +
                    "ROUND(SUM(SALE.TTC),2) AS TTC, " +
                    "ROUND((SELECT SUM(AMOUNT) FROM POS_PAYMENT AS PAY WHERE PAY.REF = SALE.REF AND PAY.REF_NO = SALE.REF_NO AND PAY.DOC_TYPE = SALE.TYPE AND PAY.STATUS = 1 ) ,2) AS PAYMENT " +
                    "FROM POS_SALES_VW_01 AS SALE " +
                    "INNER JOIN POS_PAYMENT AS PAYMENT ON " +
                    "PAYMENT.REF = SALE.REF AND PAYMENT.REF_NO = SALE.REF_NO AND PAYMENT.DOC_TYPE = SALE.TYPE AND PAYMENT.STATUS = 1 " +
                    "WHERE SALE.DOC_DATE >= @ILKTARIH AND SALE.DOC_DATE <= @SONTARIH AND  " +
                    "((SALE.CUSTOMER_CODE = @CUSTOMER_CODE) OR (@CUSTOMER_CODE = '')) AND " +
                    "((SALE.DEVICE = @DEVICE) OR (@DEVICE = '')) AND " +
                    "((SALE.REF_NO = @REF_NO) OR (@REF_NO = '')) AND  " +
                    "((PAYMENT.TYPE = @TYPE) OR (@TYPE = -1)) AND " +
                    "((ITEM_CODE = @ITEM_CODE) OR (@ITEM_CODE = '')) AND " + 
                    "((SALE.LUSER = @LUSER) OR (@LUSER = '')) AND SALE.STATUS = 1 AND PAYMENT.DOC_TYPE = @DOC_TYPE {0} " +
                    "GROUP BY SALE.REF,SALE.REF_NO,SALE.TYPE,PAYMENT.TYPE,PAYMENT.DOC_TYPE " +
                    "HAVING ((ROUND(SUM(SALE.TTC),2) = @TTC) OR (@TTC = 0)) " +
                    ") AS TMP GROUP BY REF,REF_NO " + 
                    "HAVING COUNT(PAY_DOC_TYPE) >= @PAY_COUNT ",
            param:  ['ILKTARIH','SONTARIH','CUSTOMER_CODE','DEVICE','REF_NO','TYPE','DOC_TYPE','LUSER','TTC','PAY_COUNT','ITEM_CODE'],
            type:   ['date','date','string|25','string|25','string|25','int','int','string|25','float','int','string|25'],
            value:  [$scope.IlkTarih,$scope.SonTarih,$scope.Musteri,$scope.KasaNo,$scope.FisNo,$scope.OdemeTipi,TmpDocType,$scope.KasiyerNo,$scope.FisTutar == "" ? 0 : $scope.FisTutar.replace(',','.'),$scope.CokluOdeme ? 2 : 1,$scope.Urun]            
        }

        if($scope.FisTipi == 0)
        {
            TmpQuery.query = TmpQuery.query.replace("{0}","");
        }
        else if($scope.FisTipi == 1)
        {
            TmpQuery.query = TmpQuery.query.replace("{0}","AND SALE.DISCOUNT <> 0");
        }
        else if($scope.FisTipi == 2)
        {
            TmpQuery.query = TmpQuery.query.replace("{0}","AND SALE.LOYALTY <> 0");
        }
        
        let TmpData = await db.GetPromiseQuery(TmpQuery)
        $scope.SatisFisListesi = TmpData;
        console.log(TmpData)
        InitSatisFisListesiGrid();
    }
    $scope.BtnTahTip = function(pTip)
    {   
        $scope.TahTip = pTip;
    }
    $scope.BtnSonTahTip = function(pTip)
    {
        if(pTip == 0)
        {
            const index = $scope.SatisFisTahDetayList.indexOf($scope.SatisFisTahDetayList[SonTahIndex]);
            if (index > -1) 
            {
                $scope.SatisFisTahDetayList.splice(index, 1);
            }
        }
        else if(pTip == 1)
        {
            $scope.SatisFisTahDetayList[SonTahIndex].AMOUNT = parseFloat($scope.TxtSonTahGuncelle);
            $scope.SatisFisTahDetayList[SonTahIndex].TYPENO = $scope.TahTip;
    
            if($scope.TahTip == 0)
            {
                $scope.SatisFisTahDetayList[SonTahIndex].TYPE = 'ESC';
            }
            else if($scope.TahTip == 1)
            {
                $scope.SatisFisTahDetayList[SonTahIndex].TYPE = 'CB';
            }
            else if($scope.TahTip == 2)
            {
                $scope.SatisFisTahDetayList[SonTahIndex].TYPE = 'Chq';
            }
            else if($scope.TahTip == 3)
            {
                $scope.SatisFisTahDetayList[SonTahIndex].TYPE = 'CHQe';
            }
        }
        else if(pTip == 2)
        {
            let TmpData =
            {
                AMOUNT : parseFloat($scope.TxtSonTahGuncelle),
                TYPENO : $scope.TahTip
            }
            
            $scope.SatisFisTahDetayList.push(TmpData);

            $scope.SatisFisTahDetayList[$scope.SatisFisTahDetayList.length - 1].AMOUNT = parseFloat($scope.TxtSonTahGuncelle);
            $scope.SatisFisTahDetayList[$scope.SatisFisTahDetayList.length - 1].TYPENO = $scope.TahTip;
    
            if($scope.TahTip == 0)
            {
                $scope.SatisFisTahDetayList[$scope.SatisFisTahDetayList.length - 1].TYPE = 'ESC';
            }
            else if($scope.TahTip == 1)
            {
                $scope.SatisFisTahDetayList[$scope.SatisFisTahDetayList.length - 1].TYPE = 'CB';
            }
            else if($scope.TahTip == 2)
            {
                $scope.SatisFisTahDetayList[$scope.SatisFisTahDetayList.length - 1].TYPE = 'Chq';
            }
            else if($scope.TahTip == 3)
            {
                $scope.SatisFisTahDetayList[$scope.SatisFisTahDetayList.length - 1].TYPE = 'CHQe';
            }
        }
        
        $scope.TahDetayKalan = $scope.SatisFisListesi[$scope.SatisFisListeSelectedIndex].TTC - db.SumColumn($scope.SatisFisTahDetayList,"AMOUNT")

        $("#TblSatisFisTahDetay,#TblSatisFisTahDetay").each(function()
        {
            $(this).jsGrid({data : $scope.SatisFisTahDetayList});
        });
    }
    $scope.BtnSonTahKaydet = async function()
    {
        if($scope.TxtAciklama == "")
        {
            let TmpConfirm = await db.Confirm(db.Language($scope.Lang,"Açıklama girmeden kayıt edemezsini ! Devam etmek istiyormusunuz ?"));
            
            if(TmpConfirm)
            {
                db.GetData($scope.Firma,'PosSonSatisTahDetayGetir',[$scope.Sube,$scope.SatisFisListesi[$scope.SatisFisListeSelectedIndex].REF,$scope.SatisFisListesi[$scope.SatisFisListeSelectedIndex].REF_NO],function(PosSonSatisTahDetay)
                {  
                    $scope.SatisFisTahDetayList = PosSonSatisTahDetay;
                    
                    $("#TblSatisFisTahDetay,#TblSatisFisTahDetay").each(function()
                    {
                        $(this).jsGrid({data : $scope.SatisFisTahDetayList});
                    });
                });
            }
            else
            {
                $scope.TahTip = 0;
                $scope.TxtAciklama = db.Language($scope.Lang,"Ödeme tipi hatalı girilmiştir.Düzeltmesi yapıldı.");

                $('#MdlSatisFisTahGuncelle').modal('show'); 
                $scope.TahDetayKalan = $scope.SatisFisListesi[$scope.SatisFisListeSelectedIndex].TTC - db.SumColumn($scope.SatisFisTahDetayList,"AMOUNT")
                SatisFisTahDetayRowClick(args.itemIndex,args.item);
                $scope.$apply();                    
            }
        }
        else if(db.SumColumn($scope.SatisFisTahDetayList,"AMOUNT") == $scope.SatisFisListesi[$scope.SatisFisListeSelectedIndex].TTC && $scope.TxtAciklama != "")
        {
            TmpQuery = 
            {
                db : $scope.Firma,
                query:  "DELETE FROM POS_PAYMENT WHERE REF = @REF AND REF_NO = @REF_NO",
                param:  ['REF','REF_NO'],
                type:   ['int','int'],
                value:  [$scope.SatisFisDetayList[0].REF,$scope.SatisFisDetayList[0].REF_NO]
            }

            await db.ExecutePromiseQuery(TmpQuery);            

            for (let i = 0; i < $scope.SatisFisTahDetayList.length; i++) 
            {

                let InsertData = 
                [
                    $scope.Kullanici,
                    $scope.Kullanici,
                    $scope.SatisFisDetayList[0].DEVICE,
                    $scope.SatisFisDetayList[0].DEPARTMENT,
                    $scope.SatisFisTahDetayList[i].TYPENO,
                    $scope.SatisFisDetayList[0].TYPE, //EVRAKTIP
                    moment($scope.SatisFisDetayList[0].DOC_DATE).format("DD.MM.YYYY"),
                    $scope.SatisFisDetayList[0].REF,
                    $scope.SatisFisDetayList[0].REF_NO,
                    $scope.SatisFisDetayList[0].CUSTOMER_CODE,
                    "",
                    $scope.SatisFisTahDetayList[i].AMOUNT,
                    0,//TahParaUstu,
                    1
                ];

                await db.ExecutePromiseTag($scope.Firma,'PosTahInsert',InsertData);
            }

            await db.ExecutePromiseTag($scope.Firma,'PosMasterExtraDelete',['POS_PAYMENT',$scope.SatisFisDetayList[0].TYPE,$scope.SatisFisDetayList[0].REF,$scope.SatisFisDetayList[0].REF_NO]);
            await db.ExecutePromiseTag($scope.Firma,'PosMasterExtraInsert',[$scope.Kullanici,$scope.Kullanici,'POS_PAYMENT','',$scope.SatisFisDetayList[0].TYPE,$scope.SatisFisDetayList[0].REF,$scope.SatisFisDetayList[0].REF_NO,0,$scope.TxtAciklama]);

        }
        else
        {
            db.GetData($scope.Firma,'PosSonSatisTahDetayGetir',[$scope.Sube,$scope.SatisFisListesi[$scope.SatisFisListeSelectedIndex].REF,$scope.SatisFisListesi[$scope.SatisFisListeSelectedIndex].REF_NO],function(PosSonSatisTahDetay)
            {  
                $scope.SatisFisTahDetayList = PosSonSatisTahDetay;
                console.log($scope.SatisFisTahDetayList)
                $("#TblSatisFisTahDetay,#TblSatisFisTahDetay").each(function()
                {
                    $(this).jsGrid({data : $scope.SatisFisTahDetayList});
                });
            });
            alertify.alert(db.Language($scope.Lang,"Girilen tutar hatalıdır !"))
        }
    }
    $scope.BtnYazdir = function()
    {
        let TmpFirma = Param[0].Firma;
        let TmpBaslik = Param[0].FisBaslik[0] + '\n' + Param[0].FisBaslik[1] + '\n' + Param[0].FisBaslik[2] + '\n' + Param[0].FisBaslik[3] + '\n' + Param[0].FisBaslik[4]

        let TmpQuery = 
        {
            db : $scope.Firma,
            query:  "SELECT *, " + 
                    "ISNULL((SELECT TOP 1 NAME FROM ITEMS WHERE CODE = ITEM_CODE),'') AS ITEM_NAME, " +
                    "ISNULL((SELECT SHORT FROM UNIT WHERE NAME = ISNULL((SELECT TOP 1 NAME FROM ITEM_UNIT WHERE ITEM_CODE = ITEM_CODE AND TYPE = 0),'')),'') AS UNIT_SHORT, " +
                    "@FIRMA AS FIRMA, " +
                    "@BASLIK AS BASLIK," +
                    "ISNULL((SELECT PATH FROM LABEL_DESIGN WHERE TAG = '21'),'') AS PATH " +
                    "FROM POS_SALES_VW_01 WHERE REF = @REF AND REF_NO = @REF_NO AND TYPE = 0",
            param:  ['REF','REF_NO','FIRMA','BASLIK'],
            type:   ['string|25','int','string|250','string|250'],
            value:  [$scope.SatisFisDetayList[0].REF,$scope.SatisFisDetayList[0].REF_NO,TmpFirma,TmpBaslik]
        }
        db.GetDataQuery(TmpQuery,function(pData)
        {
            if(pData.length > 0)
            {
                console.log("{TYPE:'REVIEW',PATH:'" + pData[0].PATH.replaceAll('\\','/') + "',DATA:" + JSON.stringify(pData) + "}")
                db.Emit('DevPrint',"{TYPE:'REVIEW',PATH:'" + pData[0].PATH.replaceAll('\\','/') + "',DATA:" + JSON.stringify(pData) + "}",(pResult) =>
                {
                    if(pResult.split('|')[0] != 'ERR')
                    {
                        var mywindow = window.open('printview.html','_blank',"width=900,height=1000,left=500");      
                        mywindow.onload = function() 
                        {
                            mywindow.document.getElementById("view").innerHTML="<iframe src='data:application/pdf;base64," + pResult.split('|')[1] + "' type='application/pdf' width='100%' height='100%'></iframe>"      
                        }   
                    }
                })
            }
        });
    }
}