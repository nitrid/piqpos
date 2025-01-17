angular.module('app.controller', [])
.controller('Login',['$scope','$rootScope','$window','db',Login])
.controller('Main',['$scope','$rootScope','$window','db',Main])
.controller('KullaniciParametreCtrl',['$route','$scope','$window','$rootScope','db',KullaniciParametreCtrl])
.controller('CihazParametreCtrl',['$route','$scope','$window','$rootScope','db',CihazParametreCtrl])
.controller('StokCtrl',['$scope','$window','$location','db',StokCtrl])
.controller('CariCtrl',['$scope','$window','$location','db',CariCtrl])
.controller('CariListeCtrl',['$scope','$window','db',CariListeCtrl])
.controller('OzelEtiketCtrl',['$scope','$window','db',OzelEtiketCtrl])
.controller('TopluTicketGirisCtrl',['$scope','$window','db',TopluTicketGirisCtrl])
.controller('TopluTicketListesiCtrl',['$scope','$window','db',TopluTicketListesiCtrl])
.controller('SatisFisListesiCtrl',['$scope','$window','db',SatisFisListesiCtrl])
.controller('DegismisFisListesiCtrl',['$scope','$window','db',DegismisFisListesiCtrl])
.controller('MusteriPuanListesiCtrl',['$scope','$window','db',MusteriPuanListesiCtrl])
.controller('EtiketBasimCtrl',['$scope','$window','db',EtiketBasimCtrl])
.controller('FiyatListeYonetimiCtrl',['$scope','$window','db',FiyatListeYonetimiCtrl])
.controller('PosSatisRaporCtrl',['$scope','$window','db',PosSatisRaporCtrl])
.controller('PosSatisGrupRaporCtrl',['$scope','$window','db',PosSatisGrupRaporCtrl])
.controller('SiparisEvrakCtrl',['$scope','$window','$timeout','$location','db',SiparisEvrakCtrl])
.controller('SiparisListesiCtrl',['$scope','db',SiparisListesiCtrl])
.controller('DegisenOrgineListesiCtrl',['$scope','$window','db',DegisenOrgineListesiCtrl])
.controller('TopluSiparisBirlestirmeCtrl',['$scope','$window','db',TopluSiparisBirlestirmeCtrl])
.controller('FiyatFarkiEvrakCtrl',['$scope','$window','$timeout','$location','db',FiyatFarkiEvrakCtrl])
.controller('IadeEvrakCtrl',['$scope','$window','$timeout','$location','db',IadeEvrakCtrl])
.controller('FireEvrakCtrl',['$scope','$window','$timeout','$location','db',FireEvrakCtrl])
.controller('SatisEvrakCtrl',['$scope','$window','$timeout','$location','db',SatisEvrakCtrl])
.controller('SubeEvrakCtrl',['$scope','$window','$timeout','$location','db',SubeEvrakCtrl])
.controller('FaturaListesiCtrl',['$scope','db',FaturaListesiCtrl])
.controller('TicketKontrolCtrl',['$scope','$window','db',TicketKontrolCtrl])
.controller('FiyatGorCtrl',['$scope','$window','db',FiyatGorCtrl])
.controller('TedarikciGorCtrl',['$scope','$window','db',TedarikciGorCtrl])
.controller('SktGirisCtrl',['$scope','$window','db',SktGirisCtrl])
.controller('SktListesiCtrl',['$scope','$window','db',SktListesiCtrl])
.controller('GunSonuCtrl',['$scope','$window','db',GunSonuCtrl])
.controller('ItemCountCtrl',['$scope','$window','$timeout','$location','db',ItemCountCtrl])
