








const arrListStation = [

{ id: 'djs', title: 'DJS', },


{ id: 'merefa_auto_service_center' 		, title: 'Авто Сервіс Center' 	, address: 'м. Мерефа, вул.Дніпропетровська, 133' 		, gps: 'https://maps.app.goo.gl/kjeLkvgcAf3fhxSE9' , },
{ id: 'merefa_auto_ua' 					, title: 'Авто ЮА' 				, address: 'м. Мерефа, вул.Дніпропетровська, 264' 		, gps: 'https://maps.app.goo.gl/KYZw1Qz8s6MFwkmw7' , },
{ id: 'merefa_girka' 					, title: 'Біля кафе Гірка' 		, address: 'м. Мерефа' 									, gps: 'https://maps.app.goo.gl/UAeP96N3HKfYxxjNA' , },
{ id: 'merefa_razval' 					, title: 'Развал/схождение' 	, address: 'м. Мерефа, вул.Дніпропетровська, 198' 		, gps: 'https://maps.app.goo.gl/LbNhq2dNzN3EmbAd8' , },
{ id: 'merefa_shinomontazh' 			, title: 'Шиномонтаж' 			, address: 'м. Мерефа, вул.Дніпропетровська, 196' 		, gps: 'https://maps.app.goo.gl/ou5BpiEXvoUSepGw5' , },
{ id: 'kharkiv_ar_service' 				, title: 'А/Р Сервіс' 			, address: 'м. Харків, вул.Несторівська, 14' 			, gps: 'https://maps.app.goo.gl/GD7HeGXmiy4WmKUs7' , },
{ id: 'kharkiv_lpg' 					, title: 'LPG' 					, address: 'м. Харків, вул.Академіка Білецького, 55' 	, gps: 'https://maps.app.goo.gl/TdQwVPcugPpxa1tv6' , },


{ id: 'kharkiv_master_1' 				, title: 'Олександр' 			, address: 'м. Харків, вул. Молочна, 9, під\'їзд 3' 	, gps: 'https://maps.app.goo.gl/bq134zEcSgLuYDwR7' , },


];









let objListStation = {};
arrListStation.forEach( k => {
	objListStation[ k.id ] = k;

});







