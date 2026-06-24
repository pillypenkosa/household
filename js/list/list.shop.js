






const arrListShop = [


{ id: 'kravcov_maxym_kostyantyn' , title: 'Кравцов Максим Костянтинович' , },



{ id: 'kharkiv_losk_2_4' 	, title: 'Лоск 2/4' 	, address: 'м. Харків, авторинок Лоск, 2 ряд, 4 місце' 	, gps: 'https://maps.app.goo.gl/Cqqhjk7bNsX9DotP9' 		, },
{ id: 'kharkiv_elmir_1' 	, title: 'ElMir 1' 		, address: 'м. Харків, вул. Миколаївська, 6' 			, gps: 'https://maps.app.goo.gl/1YtxLzXQ2z1bizCi9' 		, },
{ id: 'kharkiv_elmir_2' 	, title: 'ElMir 2' 		, address: 'м. Харків, пр. Незалежності, 5' 			, gps: 'https://maps.app.goo.gl/iJcryXQqNkGewVZDA' 		, },
{ id: 'kharkiv_elmir_3' 	, title: 'ElMir 3' 		, address: 'м. Харків, вул. Алчевських, 36' 			, gps: 'https://maps.app.goo.gl/ECgPST5QUdtkDjN28' 		, },


];







let objListShop = {};
arrListShop.forEach( k => {
	objListShop[ k.id ] = k;
});














