// 










const arrList = [









{
	id: '20140000_pride', date: '2014-00-00', title: 'Велосипед', descr: 'Pride', cat: { bicycle: 1, },
	keyval: [
		{ k: 'Велосипед' 	, v: 'Pride' 			, },
		{ k: 'Колеса' 		, v: '29' 				, },
		{ k: 'Ціна' 		, v: '4200 грн' 		, },
		{ k: 'Дата' 		, v: '~ 2013-2014' 		, },
	],
},
{
	id: '20260618_tire', date: '2026-06-18', title: 'Покришки', descr: 'Schwalbe', cat: { bicycle: 1, },
	keyval: [

		{ k: 'Покришка' 				, v: 'Schwalbe' 			, },
		{ k: 'Розмір' 					, v: '29x2.10' 				, },
		{ k: 'Код' 						, v: '54-622' 				, },
		{ backspace: true },

		{ k: 'Товар' 					, v: 'prom.ua' 				, href: 'https://prom.ua/ua/p2985862962-pokryshka-29x210-622.html', },
		{ k: 'e-Магазин' 				, v: 'Велопланета' 			, href: 'https://prom.ua/ua/c4166435-veloplaneta.html', },
		{ k: 'Дата' 					, v: '2026-06-18' 			, },
		{ k: 'Ціна' 					, v: '2712 грн = 2 шт * 1356 грн' 		, },
	],
},
{
	id: '20260618_tube', date: '2026-06-18', title: 'Камери', descr: 'Schwalbe', cat: { bicycle: 1, },
	keyval: [

		{ k: 'Камера' 				, v: 'Schwalbe' 			, },
		{ k: 'Маркування' 			, v: 'AV19 40mm EK AGV' 	, },
		{ k: 'Код' 					, v: '40/62-584/635' 		, },
		{ k: 'Розмір' 				, v: '28/29' 				, },
		{ backspace: true },

		{ k: 'Товар' 				, v: 'prom.ua' 				, href: 'https://prom.ua/ua/p2985885991-kamera-4062-584635.html', },
		{ k: 'e-Магазин' 			, v: 'Велопланета' 			, href: 'https://prom.ua/ua/c4166435-veloplaneta.html', },
		{ k: 'Дата' 				, v: '2026-06-18' 			, },
		{ k: 'Ціна' 				, v: '1216 грн = 4 шт * 304 грн' 		, },
	],
},
{
	id: '20250526_videx', date: '2026-06-11', title: 'Ліхтарик налобний', descr: 'Videx H035C', cat: { electronics: 1, warstore: 1, },
	keyval: [
		{ k: 'Ліхтарик налобний' 	, v: 'Videx' 				, },
		{ k: 'Модель' 				, v: 'VLF-H035C' 			, },
		
		{ k: 'Акумулятор' 			, v: 'Li-Pol 1800 mAh' 		, },
		{ k: '' 					, v: '410 Lm' 				, },

		{ k: 'BarCode' 				, v: '4 820246 481069' 		, },

		{ k: 'Магазин' 				, v: 'біля Мілітаріста, пр. Аерокосмічний, 20а'  }, 
		{ k: '' 					, v: 'Десь тут' 			, gps: 'https://maps.app.goo.gl/4QAw3k4sAZLyjShv7', }, 
		{ backspace: true },

		{ k: 'Ціна' 				, v: '1090 грн' 			, },
	],
},
{
	id: '20260602_aquatica', date: '2026-06-02', title: 'Насос циркуляційний', descr: 'Aquatica', cat: { hh_techno: 1, },
	keyval: [
		{ k: 'Насос циркуляційний' 	, v: 'Aquatica' 								, },
		{ k: 'Модель' 				, v: 'GPD25*4S/180 ( 774112 )' 					, },
		{ k: 'Призначення' 			, v: 'для циркуляції води в батареях опалення' 	, },

		{ k: 'e-Магазин' 			, v: 'sigma.ua' 			, href: 'https://sigma.ua/ru/buy/nasos-tsirkulyatsionnyy-65vt-hmax-4m-qmax-63l-min-1-180mm-gayki-1-774112/', },
		{ k: 'Продавець' 			, v: 'Боровик' 				,  },
		{ backspace: true },

		{ k: 'Ціна' 				, v: '2266 грн ( ~1500-1600 грн зы скидкою від Борюнделя )' 				, },
	],
},
{
	id: '20260507_samsung', date: '2026-05-07', title: 'Телевізор', descr: 'Samsung', cat: { electronics: 1, }, 
	keyval: [
		{ k: 'Телевізор' 		, v: 'Samsung ' 		, },
		{ k: 'модель' 			, v: 'UE40F6000FUXUA' 	, },
		//{ k: 's/n' 				, v: 'PF10DUAV' 		, },
		{ backspace: true },

		{ k: 'Діагональ' 				, v: '40' 							, },
		{ k: 'Екран' 					, v: '1920 х 1080 ( Full HD )' 		, },
		{ k: 'Операційна система' 		, v: 'Tizen' 			, },
		{ backspace: true },

		{ k: 'Магазин' 					, v: '' 				, gps: 'https://maps.app.goo.gl/MHkLXEa1vif5u3SF6', }, 	// вул. Миколаївська, 6
		{ k: 'e-Магазин' 				, v: 'elmir.ua' 		, href: 'https://elmir.ua/ua/tvs/tv-samsung-ue40f6000fuxua.html', },

		{ backspace: true },
		{ k: 'Ціна' 					, v: '12500 грн' 		, },
	],
},
{
	id: '20260423_dalley', date: '2026-04-23', title: 'Сумка-барсетка', descr: 'Dalley', cat: { clothing: 1, },
	keyval: [
		{ k: 'Сумка-барсетка' 	, v: 'Dalley-430' 		, },
		{ k: 'e-Магазин' 		, v: 'prom.ua' 			, href: 'https://prom.ua/ua/p993608063-takticheskaya-nagrudnaya-sumka.html' , },
		{ k: '' 				, v: 'Usmivka :)' 		, href: 'https://prom.ua/ua/c2151774-usmivka.html' , },
		{ backspace: true },

		{ k: 'Ціна' 			, v: '317 грн' 			, },
	],
},
{
	id: '20260423_arvisa', date: '2026-04-23', title: 'Мішок спальний', descr: 'Arvisa', cat: { home: 1, },
	keyval: [
		{ k: 'Мішок спальний' 		, v: 'Arvisa' 			, },
		{ k: 'Розміри' 				, v: '250 х 130 см' 	, },

		{ k: 'e-Магазин' 			, v: 'rozetka.com.ua' 	, href: 'https://rozetka.com.ua/ua/429248144/p429248144/', }, 
		{ k: 'Магазин' 				, v: 'Rozetka' 			, gps: 'https://maps.app.goo.gl/kD53Lfs6WcjnqskM9', }, 

		{ backspace: true },
		{ k: 'Ціна' 				, v: '2100 грн' 		, },
	],
},
{
	id: '20260210_bluetti', date: '2026-02-10', title: 'Зарядна станція', descr: 'Bluetti', cat: { electronics: 1, },
	keyval: [

		{ k: 'Назва' 			, v: 'Bluetti' 				, },
		{ k: 'Модель' 			, v: 'Premium 100 V2' 		, },
		{ backspace: true },

		{ k: 'Потужність' 				, v: '2000 Вт' 			, },
		{ k: 'Потужність пікова' 		, v: '3600 Вт' 			, },
		{ k: 'Акумулятор' 				, v: 'LiFePO4' 			, },
		{ k: 'Ємність' 					, v: '1024 Вт*г' 		, },
		{ backspace: true },

		{ k: 'Вхід від мережі ~220' 	, v: '~230 В, 1200 Вт' 	, },
		{ backspace: true },

		{ k: 'Вхід від "сонця"' 		, v: '' 				, },
		{ k: 'Напруга' 		 			, v: '12 - 60 В' 		, },
		{ k: 'Струм' 					, v: '20 А' 			, },
		{ k: 'Потужність' 		 		, v: '1000 Вт' 			, },
		{ k: 'Роз\'єм' 		 			, v: 'XT 60' 			, },

		{ backspace: true },

		{ k: 'Розміри' 					, v: '320 x 250 x 215' 	, },
		{ k: 'Вага' 					, v: '11.5 кг' 			, },
		{ backspace: true },

		{ k: 'e-Магазин' 	, v: 'davi.com.ua' 		, href: 'https://davi.com.ua/zariadna-stantsiia-bluetti-premium-100-v2/95479/', },
		{ k: 'Ціна' 		, v: '38000 грн' 		, },
	],
},
{
	id: '20251010_m_tac', date: '2025-11-06', title: 'Підштанніки', descr: 'M-Tac', cat: { warstore: 1, },
	keyval: [
		{ k: 'Підштанніки' 		, v: 'M-Tac' 							, },
		{ k: 'Колір' 			, v: 'зелені' 							, },
		{ k: 'Магазин' 			, v: 'UArm' 							, gps: 'https://maps.app.goo.gl/Gvu2N6Tdd3t5oigb6', }, 
		{ backspace: true },
		
		{ k: 'Ціна' 			, v: '2100 грн = 2 шт ( по 1050 грн )' 	, },
	],
},
{
	id: '20251031_hoco', date: '2025-10-31', title: 'Пристрій зарядний', descr: 'Hoco 65 W', cat: { electronics: 1, },
	keyval: [
		
		{ k: 'Пристрій зарядний' 	, v: 'Hoco 65 W' 	, },
		{ k: 'Модель' 				, v: 'CS44A' 		, },
		{ backspace: true, },

		{ k: 'Input' 		, v: 'AC 110-240 V, 50-60 Hz, 1.5 A' 	, },
		{ k: 'Output' 		, v: '' 								, },
		{ k: 'USB C1' 		, v: '19.7-19.9 V, 2.8-3.1 A' 			, },
		{ k: 'USB C2' 		, v: '11.4-11.6 V, 1.6-1.7 A' 			, },
		{ k: 'USB A' 		, v: '' 								, },
		{ k: 'Колір' 		, v: 'жовтий' 							, },
		{ backspace: true, },

		{ k: 'Магазин' 		, v: 'Vodafon' 					, gps: 'https://maps.app.goo.gl/LXe5XDmNFuaugXv38', },
		{ k: 'Ціна' 		, v: '900 грн' 					, },
	],
},
{
	id: '20251023_powerbank', date: '2025-10-23', title: 'Hoco DB03 Max', type: 'PowerBank', cat: { electronics: 1, },
	keyval: [
		{ k: 'PowerBank' 			, v: 'Hoco' 						, },
		{ k: 'Модель' 				, v: 'DB03 Max' 					, },
		{ k: '' 					, v: '100000 mAh' 					, },
		{ k: '' 					, v: '54000 mAh' 					, },
		{ k: '' 					, v: '65 W' 						, },
		{ k: '' 					, v: '22.5 W' 						, },
		{ k: '' 					, v: 'QC 3.0' 						, },
		{ k: '' 					, v: '370 W/h' 						, },
		{ backspace: true, },

		{ k: 'Магазин' 				, v: 'Rozetka' 						, gps: 'https://maps.app.goo.gl/6KWWmiohW8VsZS4x5', },
		{ k: 'Товар' 				, v: 'rozetka.com.ua' 				, href: 'https://rozetka.com.ua/ua/476905469/p476905469/', },
		{ k: 'Нові акси' 			, v: 'rozetka.com.ua' 				, href: 'https://rozetka.com.ua/ua/seller/nov-aksi/goods/', },
		{ k: 'Відправник' 			, v: 'Якименко Наталія Віталіївна' 	, },
		{ k: '' 					, v: 'м. Одеса, вул. Сахарова, 1Б' 	, },
		{ k: '' 					, v: '+380660705725' 				, },
		{ backspace: true, },

		{ k: 'Ціна' 				, v: '4300 грн' 					, },
	],
},
{
	id: '20251022_hoco', date: '2025-10-23', title: 'Навушники', descr: 'Hoco M83', cat: { electronics: 1, },
	keyval: [
		{ k: 'Навушники' 		, v: 'Hoco' 				, },
		{ k: 'Модель' 			, v: 'M83' 					, },
		{ k: 'Штекер' 			, v: 'Type-C' 				, },
		{ k: '' 				, v: 'дротові' 				, },
		{ k: '' 				, v: 'вакуумні' 			, },
		{ k: '' 				, v: 'з мікрофоном' 		, },
		{ backspace: true, },

		{ k: 'e-Магазин' 			, v: 'Rozetka' 			, gps: 'https://maps.app.goo.gl/6KWWmiohW8VsZS4x5', },
		{ k: 'Товар' 			, v: 'rozetka.com.ua' 		, href: 'https://rozetka.com.ua/ua/339972349/p339972349/', },
		{ k: 'Gadget OFF' 		, v: 'rozetka.com.ua' 		, href: 'https://rozetka.com.ua/ua/seller/gadget-off/goods/', },
		{ k: 'Ціна' 			, v: '230 грн' 				, },
	],
},
{
	id: '20251022_glass', date: '2025-10-22', title: 'Скло захисне', descr: 'Tempered Glass 0.3mm', cat: { electronics: 1, },
	keyval: [
		{ k: 'Скло захисне' 	, v: '' 							, },
		{ k: 'Модель' 			, v: 'Tempered Glass 0.3 mm' 		, },
		{ k: 'Призначення' 		, v: 'для телефона Samsung A26 5G' 	, },
		{ k: 'Продавець' 		, v: 'vest.in.ua' 					, href: 'https://vest.in.ua/accessories-for-phones/plenki/zahisne-sklo-tempered-glass-03mm-dlya-samsung-galaxy-a26-5g' 	, },
		{ backspace: true, },

		{ k: 'Ціна' 			, v: '260 грн ( 2 шт по 130 грн )' 	, },
	],
},
{
	id: '20251010_knife', date: '2025-10-10', title: 'Ніж', descr: 'викидний', cat: { warstore: 1, },
	keyval: [
		{ k: 'Ніж' 				, v: 'викидний' 		, },
		{ k: 'Колір' 			, v: 'чорний' 			, },
		{ k: 'Продавець' 		, v: 'Військторг' 		, gps: 'https://maps.app.goo.gl/aL6BWYRp46y8K6ow8', }, 
		{ backspace: true, },
		
		{ k: 'Ціна' 			, v: '200 грн' 			, },
	],
},
{
	id: '20250817_tolsen', date: '2025-08-17', title: 'Тримач-присоска', descr: 'Tolsen', cat: { tools: 1, },
	keyval: [
		{ k: 'Тримач-присоска' 		, v: 'Tolsen' 			, },
		{ k: 'Продавець' 			, v: 'Тетяна ХТТ' 		, gps: 'https://maps.app.goo.gl/pSvsJLEozy6aKAhS8', },
		{ backspace: true, },

		{ k: 'Ціна' 				, v: '200 грн' 			, },
	],
},
{
	id: '20250816_imprese', date: '2025-08-16', title: 'Унітаз', descr: 'Imprese', cat: { home: 1, },
	keyval: [
		{ k: 'Унітаз' 		, v: 'Imprese' 			, },
		{ k: 'Продавець' 	, v: 'Епіцентр' 		, gps: 'https://maps.app.goo.gl/PqzkHuZd6nz3YAcf7', },
		{ backspace: true, },

		{ k: 'Ціна' 		, v: '10000 грн' 		, },
	],
},
{
	id: '20250812_f19_tws', date: '2025-08-12', title: 'Гарнітура Bluetooth', descr: 'F19 TWS', cat: { electronics: 1, },
	keyval: [
		{ k: 'Bluetooth гарнітура' 	, v: 'F19 TWS' 			, },
		{ k: 'Модель' 				, v: '87344006' 		, },
		{ k: 'Акумулятор' 			, v: '350 мА*г' 		, },
		{ k: 'e-Магазин' 			, v: 'Rozetka' 			, gps: 'https://maps.app.goo.gl/6KWWmiohW8VsZS4x5', },
		{ backspace: true, },

		{ k: 'Ціна' 				, v: '500 грн' 			, },
		{ k: 'Rozetka' 				, v: 'rozetka.com.ua' 	, href: 'https://rozetka.com.ua/ua/441711929/p441711929/', },
	],
},
{
	id: '20250801_bonro', date: '2025-08-01', title: 'Крісло офісне', descr: 'Bonro', cat: { home: 1, },
	keyval: [
		{ k: 'Крісло офісне' 	, v: 'Bonro B-635' 					, },
		{ k: 'Модель' 			, v: '42400371' 					, },
		{ k: 'e-Магазин' 		, v: 'bonro.ua' 					, gps: 'https://bonro.ua/krislo-ofisne-na-kolesakh-bonro-b-635-chorno-chervone-42400371/', },
		{ backspace: true, },

		{ k: 'Ціна' 			, v: '2550 грн + 400 грн доставка' 	, },
	],
},
{
	id: '20250730_wuw', date: '2025-07-30', title: 'Пристрій зарядний', descr: 'WUW Fast Charger 48w', cat: { electronics: 1, },
	keyval: [
		
		{ k: 'Пристрій зарядний' 	, v: 'WUW Fast Charger 48w' 	, },
		{ k: 'Модель' 				, v: 'C212' 					, },
		{ backspace: true, },

		{ k: 'USB C1' 				, v: '4.5 V, 2.6 A' 			, },
		{ k: 'USB C2' 				, v: '4.5 V, 2.6 A' 			, },
		{ k: 'USB A1' 				, v: '' 						, },
		{ k: 'USB A2' 				, v: '' 						, },
		{ k: 'Колір' 				, v: 'жовтий' 					, },
		{ backspace: true, },

		{ k: 'Магазин' 				, v: 'Комп\'ютерний всесвіт' 	, gps: 'https://maps.app.goo.gl/zeagAPopSe8TQ8oX6', },
		{ k: 'Ціна' 				, v: '145 грн' 					, },
	],
},
{
	id: '20250704_samsung', date: '2025-07-04', title: 'Телефон', descr: 'Samsung A26', cat: { electronics: 1, }, 
	keyval: [
		
		{ k: 'Телефон' 			, v: 'Samsung Galaxy A26 5G' 	, },
		{ k: 'Модель' 			, v: 'SM-A266B/DS' 				, },
		{ k: 's/n' 				, v: 'R5CY50LX9QL' 				, },
		{ k: 'IMEI 1' 			, v: '351728903444736' 			, },
		{ k: 'IMEI 2' 			, v: '352285783444731' 			, },
		{ backspace: true, },
		
		{ k: 'Магазин' 			, v: 'Rozetka' 					, gps: 'https://maps.app.goo.gl/6KWWmiohW8VsZS4x5', },
		{ k: 'e-Магазин' 		, v: 'rozetka.com.ua' 			, href: 'https://rozetka.com.ua/ua/samsung-sm-a266bzkceuc/p484698759/', },
		{ k: 'Приклад' 			, v: 'elmir.ua' 				, href: 'https://elmir.ua/ua/cell_phones/mobile-phone-samsung-galaxy-a26-5g-8-256gb-black-sm-a266bzkceuc.html', },
		{ k: 'Ціна' 			, v: '12000 грн' 				, },
	],
},
{
	id: '20250620_samsung', date: '2025-06-20', title: 'Планшет', descr: 'Samsung', cat: { electronics: 1, }, 
	keyval: [
		
		{ k: 'планшет' 			, v: 'Samsung Galaxy Tab A9+' 	, },
		{ k: 'Модель' 			, v: 'SM-X210' 					, },
		{ k: 's/n' 				, v: 'R9TY504VHJJ' 				, },
		{ backspace: true },

		{ k: 'процесор' 		, v: 'Qualcomm Snapdragon 695' 	, },
		{ k: '' 				, v: '2*2.21 ГГц + 6*1.8 ГГц' 	, },
		{ k: 'ОЗУ' 				, v: '8 Гб' 					, },
		{ k: 'ПЗУ' 				, v: '128 Гб' 					, },
		{ k: 'екран' 			, v: '1920*1200' 				, },
		{ k: 'діагональ' 		, v: '11&#698;' 				, },
		{ backspace: true },

		{ k: 'e-Магазин' 		, v: 'Rozetka' 					, gps: 'https://maps.app.goo.gl/6KWWmiohW8VsZS4x5', },
		{ k: 'Rozetka' 			, v: 'rozetka.com.ua' 			, href: 'https://rozetka.com.ua/ua/samsung-sm-x210nzaesek/p412084374/', },		
		{ k: 'Ціна' 			, v: '8600 грн' 				, },
	],
},
{
	id: '20250620_jbl', date: '2025-06-20', title: 'Навушники', descr: 'JBL Tune 720 BT', cat: { electronics: 1, },
	keyval: [
		{ k: 'Навушники' 		, v: 'JBL Tune 720 BT' 	, },
		{ k: 'Модель' 			, v: 'JBLT720BTBLK' 		, },
		{ backspace: true },

		{ k: 'Магазин' 			, v: 'Vodafon' 				, gps: 'https://maps.app.goo.gl/nWUMVZoFYBLeWAv26', },
		{ k: 'Rozetka' 			, v: 'rozetka.com.ua' 		, href: 'https://rozetka.com.ua/ua/jbl_jblt720btblk/p369896661/?gad_source=1&gad_campaignid=17661883199&gbraid=0AAAAADk6sCd3iLfBACBL6OS4CptGJqbqG&gclid=EAIaIQobChMIqezusOPnjgMVpg-iAx3DNALYEAQYBiABEgKnCvD_BwE', },
		{ k: 'Ціна' 			, v: '3300 грн' 			, },
	],
},
{
	id: '20250704_maxtop', date: '2025-07-04', title: 'Машинка для стрижки', descr: 'Maxtop Dragon Hair Clipper', cat: { hh_techno: 1, },
	keyval: [
		{ k: 'Машинка для стрижки' 	, v: 'Maxtop Dragon Hair Clipper' 	, },
		{ k: 'Модель' 				, v: 'M 99' 						, },
		{ k: 'Магазин' 				, v: 'MobiWorld' 					, gps: 'https://maps.app.goo.gl/JR38CkZZmcePUvxZ7', }, // кіоск в супермаркеті Чудо
		{ backspace: true },

		{ k: 'Ціна' 				, v: '280 грн' 						, },
	],
},
{
	id: '20250500_sleep_bag', date: '2025-05-00', title: 'Мішок спальний', cat: { warstore: 1, },
	keyval: [
		{ k: 'Мішок спальний' 	, v: 'полегшений' 	, },
		{ k: 'Магазин' 			, v: 'Військторг' 	, gps: 'https://maps.app.goo.gl/FffAsnj8rrf78RjU6', }, 
		{ backspace: true },

		{ k: 'Ціна' 			, v: '1800 грн' 	, },
	],
},
{
	id: '20250500_flashlight', date: '2025-05-00', title: 'Ліхтарик тактичний', cat: { electronics: 1, warstore: 1, },
	keyval: [
		{ k: 'Ліхтарик' 		, v: 'тактичний' 	, },
		{ k: 'Призначення' 		, v: 'на шолом' 	, },
		{ k: 'Магазин' 			, v: 'Військторг' 	, gps: 'https://maps.app.goo.gl/YyobRpykjZj4AZQ47', }, 
	],
},
{
	id: '20250526_videx', date: '2025-05-26', title: 'Ліхтарик налобний', descr: 'Videx H189', cat: { electronics: 1, warstore: 1, },
	keyval: [
		{ k: 'Ліхтарик налобний' 	, v: 'Videx' 			, },
		{ k: 'Модель' 				, v: 'VLF-H189' 		, },
		
		{ k: 'Акумулятор' 			, v: 'Li-Pol 1800 mAh' 		, },
		{ k: '' 					, v: '300 Lm' 				, },
		{ k: 'BarCode' 				, v: '4 820246 486811' 		, },

		{ k: 'Магазин' 				, v: 'Uarm' 			, gps: 'https://maps.app.goo.gl/Hg9bKgcMGDJe7juA9', }, 
		
		{ backspace: true },
		{ k: 'Ціна' 				, v: '1100 грн' 		, },
	],
},
{
	id: '20240000_vurgun', date: '2024-00-00', title: 'Кайданки шарнірні', descr: 'Vurgun', cat: { warstore: 1, },
	keyval: [
		{ k: 'Кайданки шарнірні' 	, v: 'Vurgun' 			, },
		{ k: 'Продавець' 			, v: 'Patch KH' 		, gps: 'https://maps.app.goo.gl/Rsv7hPdSSJngQK2q6', }, // Харків, вул. Ярославська, 2/2
		{ backspace: true },

		{ k: 'Ціна' 				, v: '900 грн' 			, },
	],
},
{
	id: '20240600_strike_face', date: '2024-06-00', title: 'Бронеплити', descr: 'Strike Face', cat: { warstore: 1, },
	keyval: [
		{ k: 'Бронеплити' 		, v: 'Strike Face' 			, },
		{ k: 'Продавець' 		, v: 'Patch KH' 			, gps: 'https://maps.app.goo.gl/Rsv7hPdSSJngQK2q6', }, // Харків, вул. Ярославська, 2/2
		{ backspace: true },

		{ k: 'Ціна' 			, v: '16000 грн за 2 шт.' 	, },
	],
},
{
	id: '20240600_plate_carrier', date: '2024-06-00', title: 'Плитоноска', cat: { warstore: 1, },
	keyval: [
		{ k: 'Плитоноска' 		, v: '' 			, },
		{ k: 'Продавець' 		, v: 'Patch KH' 	, gps: 'https://maps.app.goo.gl/Rsv7hPdSSJngQK2q6', }, // Харків, вул. Ярославська, 2/2
		{ backspace: true },

		{ k: 'Ціна' 			, v: '4000 грн' 	, },
	],
},
{
	id: '20250505_samsung', date: '2024-05-05', title: 'Телефон', descr: 'Samsung A042', cat: { electronics: 1, }, 
	keyval: [
		{ k: 'Телефон' 		, v: 'Samsung Galaxy A042' 	, },
		{ k: 'Модель' 		, v: 'SM-A042FLBHSEK' 		, },
		{ k: 's/n' 			, v: 'R8YW91LY1WE' 			, },
		{ k: 'Діагональ' 	, v: '6.5"' 				, },
		{ k: 'Екран' 		, v: '720х1600' 			, },
		{ k: 'Процесор' 	, v: 'Helio G35' 			, },
		{ k: '' 			, v: '8 * 2.3 GHz' 			, },
		{ k: 'RAM' 			, v: '3 GB' 				, },
		{ k: 'Пам\'ять' 	, v: '64 GB' 				, },
		{ k: 'Акумулятор' 	, v: '5000  mAh' 			, },
		{ k: 'Продавець' 	, v: 'ElMir' 				, },
		{ k: 'Подарунок' 	, v: 'для мами )))' 		, },
		{ backspace: true },

		{ k: 'Ціна' 		, v: '3400 грн' 			, },
		{ k: 'Elmir' 		, v: 'elmir.ua' 			, href: 'https://elmir.ua/ua/cell_phones/mobile_phone_samsung_a042_galaxy_a04e_3_64gb_light_blue_sm-a042flbhsek.html', },
	],
},
{
	id: '20240116_safe', date: '2024-01-16', title: 'Сейф', descr: 'Gute', cat: { home: 1, },
	keyval: [
		{ k: 'Сейф' 		, v: 'Gute' 		, },
		{ k: 'Модель' 		, v: 'ЯМХ-22К' 		, },
		{ k: 'Продавець' 	, v: 'prom.ua' 		, href: 'https://prom.ua/ua/p1321996220-sejf-gute-yamh.html', },
		{ backspace: true },

		{ k: 'Ціна' 		, v: '1440 грн' 	, },
	],
},
{
	id: '20231029_sthor', date: '2023-10-29', title: 'Дровокол', descr: 'Sthor', cat: { tools: 1, },
	keyval: [
		{ k: 'Дровокол гвинтовий' 	, v: 'Sthor' 		, },
		{ k: 'Код' 					, v: '22591' 		, },
		{ k: 'Продавець' 			, v: 'prom.ua' 		, href: 'https://prom.ua/ua/p1945713061-drovokol-kolun-vintovoj.html', },
		{ backspace: true },
		
		{ k: 'Ціна' 				, v: '370 грн' 		, },
	],
},
{
	id: '20231023_cqr', date: '2023-10-23', title: 'Перчатки', descr: 'CQR', cat: { clothing: 1, },
	keyval: [
		{ k: 'Перчатки тактичні' 	, v: 'CQR' 				, },
		{ k: 'Код' 					, v: '50494' 			, },
		{ k: 'Продавець' 			, v: 'likebags.com.ua' 	, href: 'https://likebags.com.ua/catalog/takticheskie-ryukzaki-armeyskie/12137-taktichni-rukavitsi-chorni-cqr-50494/', },
		{ backspace: true },

		{ k: 'Ціна' 				, v: '180 грн' 			, },
	],
},
{
	id: '20231023_dalley', date: '2023-10-23', title: 'Сумка-барсетка', descr: 'Dalley', cat: { clothing: 1, },
	keyval: [
		{ k: 'Сумка-барсетка' 	, v: 'Dalley' 				, },
		{ k: 'Продавець' 		, v: 'likebags.com.ua' 		, href: 'https://likebags.com.ua/catalog/takticheskie-ryukzaki-armeyskie/10392-cholovicha-sumka-barsetka-dalley/' , },

		{ backspace: true },
		{ k: 'Ціна' 			, v: '270 грн' 				, },
	],
},
{
	id: '20231005_haiba', date: '2023-10-05', title: 'Змішувач в ванну', descr: 'Haiba', cat: { home: 1, },
	keyval: [
		{ k: 'Змішувач в ванну' 	, v: 'Haiba' 		, },
		{ k: 'Продавець' 			, v: 'Сантехніка' 	, gps: 'https://maps.app.goo.gl/qcjUvHU8WHwKFgLj7', },
		{ backspace: true },

		{ k: 'Ціна' 				, v: '1300 грн' 	, },
	],
},
{
	id: '20230804_armchair', date: '2023-08-04', title: 'Крісло офісне', descr: 'Новий стиль', cat: { home: 1, },
	keyval: [
		{ k: 'Крісло офісне' 	, v: 'Новий стиль' 						, },
		{ k: 'Модель' 			, v: 'BOSS KD TILT PL64 (CH) ECO-30' 	, },
		{ k: 'Продавець' 		, v: 'Епіцентр' 						, gps: 'https://maps.app.goo.gl/hKEESiDMw2eLWNjv6', },
		{ backspace: true },

		{ k: 'Ціна' 			, v: '3650 грн' 						, },
	],
},
{
	id: '20230506_jbl', date: '2023-05-06', title: 'Колонка Bluetooth', descr: 'JBL', cat: { electronics: 1, },
	keyval: [
		{ k: 'Bluetooth колонка' 	, v: 'JBL Xtreme Big' 	, },
		{ k: 'Продавець' 			, v: 'prom.ua' 			, href: 'https://kharkov.prom.ua/ua/p795971389-kolonka-xtreme-big.html?adjust_campaign=share&adjust_adgroup=android&adjust_creative=product&utm_campaign=share_button&utm_medium=referral_link&utm_source=b2c_app_android', },
		{ backspace: true },

		{ k: 'Ціна' 				, v: '665 грн' 			, },
	],
},
{
	id: '20230428_xado', date: '2023-04-28', title: 'Очисник контактів', descr: 'Xado', cat: { chemical: 1, },
	keyval: [
		{ k: 'Очисник контактів' 	, v: 'Xado Verylube' 	, },
		{ k: 'Продавець' 			, v: 'xado.com'			, href: 'https://xado.com/avtomobilnaya-himiya/ochistiteli-razlichnih-sistem-avtomobilya/ochistitel-kontaktov-s-effektom-udaleniya-vlagi' , },
		{ backspace: true },

		{ k: 'Ціна' 				, v: '135 грн' 			, },
	],
},
{
	id: '20230418_dnipro_m', date: '2023-04-18', title: 'Пила шабельна', descr: 'Dnipro-M', cat: { tools: 1, },
	keyval: [
		{ k: 'Шабельна пила (Лобзик)' 	, v: 'Dnipro-M' 	, },
		{ k: 'Dnipro-M' 				, v: 'dnipro-m.ua' 	, href: 'https://dnipro-m.ua/tovar/sabelnaya-pila-sr-115/?campaignid=17136142487&adgroupid=&targetid=&adid=&network=x&keyword=&gclid=Cj0KCQjwmZejBhC_ARIsAGhCqndlkLZBzSjCdMK964s0F5KjB4-EOGnQ0x23b-p8lpWIP8BtgwqtRI4aAtWdEALw_wcB', },
		{ backspace: true },

		{ k: 'Ціна' 					, v: '3800 грн' 	, },
	],
},
{
	id: '20221228_hose', date: '2022-12-28', title: 'Шланг', descr: 'пожежний', cat: { home: 1, },
	keyval: [
		{ k: 'Шланг пожежний' 	, v: '' 						, },
		{ k: 'Призначення' 		, v: 'для насоса фекального' 	, },
		{ k: 'Продавець' 		, v: 'Центральний ринок' 		, },
		{ backspace: true },

		{ k: 'Ціна' 			, v: '900 грн = 20 м / 45 грн' 	, },
	],
},
{
	id: '20221228_delta', date: '2022-12-28', title: 'Насос фекальний', descr: 'Delta', cat: { hh_techno: 1, },
	keyval: [
		{ k: 'Насос фекальний' 	, v: 'Delta' 		, },
		{ k: 'Модель' 			, v: 'WQD' 			, },
		{ k: 'Продавець' 		, v: 'АкваЕра' 		, gps: 'https://maps.app.goo.gl/DsbTDWofhoqkcQH4A', },
		{ backspace: true },

		{ k: 'Ціна' 			, v: '2500 грн' 	, },
	],
},
{
	id: '20221203_cb_7747', date: '2022-12-03', title: 'Тепловентилятор', descr: 'Crownberg 7747', cat: { hh_techno: 1, },
	keyval: [
		{ k: 'Тепловентилятор' 	, v: 'Crownberg' 	, },
		{ k: 'Модель' 			, v: 'CB-7747' 		, },
		{ k: 'е-Магазин' 		, v: 'prom.ua' 		, href: 'https://prom.ua/ua/p1617063396-teploventilyator-obogrevatel-dujka.html?adjust_campaign=share&adjust_adgroup=android&adjust_creative=product&utm_campaign=share_button&utm_medium=referral_link&utm_source=b2c_app_android', },
		{ backspace: true },

		{ k: 'Ціна' 			, v: '440 грн' 		, },
	],
},
{
	id: '20221203_cb_7746', date: '2022-12-03', title: 'Тепловентилятор', descr: 'Crownberg 7746', cat: { hh_techno: 1, },
	keyval: [
		{ k: 'Тепловентилятор' 	, v: 'Crownberg' 	, },
		{ k: 'Модель' 			, v: 'CB-7746' 		, },
		{ k: 'е-Магазин' 		, v: 'prom.ua' 		, href: 'https://prom.ua/ua/p1617063394-teploventilyator-obogrevatel-dujka.html?adjust_campaign=share&adjust_adgroup=android&adjust_creative=product&utm_campaign=share_button&utm_medium=referral_link&utm_source=b2c_app_android', },
		{ k: 'Дата' 			, v: '2022-12-03' 	, },
		{ backspace: true },

		{ k: 'Ціна' 			, v: '440 грн' 		, },
	],
},
{
	id: '20221118_wilo', date: '2022-11-18', title: 'Насос циркуляційний', descr: 'Wilo', cat: { hh_techno: 1, },
	keyval: [
		{ k: 'Насос циркуляційний' 	, v: 'Wilo' 					, },
		{ k: 'Модель' 				, v: 'Star-RS 25/6 (4032956)' 	, },
		{ k: 'Призначення' 			, v: 'для циркуляції води в батареях' 	, },
		{ k: 'е-Магазин' 			, v: 'rozetka.com.ua' 			, href: 'https://rozetka.com.ua/wilo_star_rs_25_6_4032956/p5503491/characteristics/', },
		{ backspace: true },

		{ k: 'Ціна' 				, v: '3100 грн' 				, },
	],
},
{
	id: '20221118_bag', date: '2022-11-18', title: 'Мішок спальний', cat: { warstore: 1, },
	keyval: [
		{ k: 'Мішок спальний' 	, v: '' 				, },
		{ k: 'Магазин' 			, v: 'вул.Ярославська' 	, gps: 'https://maps.app.goo.gl/HiesR2HpwXe2RxHS9' , },
		{ backspace: true },

		{ k: 'Ціна' 			, v: '1850 грн' 		, },
	],
},
{
	id: '20220605_euroaqua', date: '2022-06-05', title: 'нс: Насос тиску', cat: { hh_techno: 1, },
	keyval: [
		{ k: 'Насос' 		, v: 'Euroaqua JET 100' 		, },
		{ k: 'Код' 			, v: '25117002-01' 				, },
		{ k: 'Призначення' 	, v: 'для насосної станції' 	, },
		{ k: 'Магазин' 		, v: 'АкваЕра' 					, gps: 'https://maps.app.goo.gl/DsbTDWofhoqkcQH4A', },
		{ k: 'Ціна' 		, v: '3200 грн' 				, },
	],
},
{
	id: '20220605_hydro', date: '2022-06-05', title: 'нс: Гідроакумулятор', cat: { hh_techno: 1, },
	keyval: [
		{ k: 'Гідроакумулятор' 	, v: 'Euroaqua' 		, },
		{ k: 'Магазин' 			, v: 'АкваЕра' 			, gps: 'https://maps.app.goo.gl/DsbTDWofhoqkcQH4A', },
		{ k: 'Ціна' 			, v: '6280 грн' 		, },
	],
},
{
	id: '20220605_italtechnica', date: '2022-06-05', title: 'нс: Реле тиску', cat: { hh_techno: 1, },
	keyval: [
		{ k: 'Реле тиску' 	, v: 'Italtechnica' 	, },
		{ k: 'аркування' 	, v: 'PM/5G' 			, },
		{ k: 'Магазин' 		, v: 'АкваЕра' 			, gps: 'https://maps.app.goo.gl/DsbTDWofhoqkcQH4A', },
	],
},
{
	id: '20220605_manometr', date: '2022-06-05', title: 'нс: Манометр', cat: { hh_techno: 1, },
	keyval: [
		{ k: 'Манометр' 	, v: '' 			, },
		{ k: 'Магазин' 		, v: 'АкваЕра' 		, gps: 'https://maps.app.goo.gl/DsbTDWofhoqkcQH4A', },
	],
},
{
	id: '20220605_aquaera', date: '2022-06-05', title: 'нс: П\'ятерник', cat: { hh_techno: 1, },
	keyval: [
		{ k: 'П\'ятерник' 	, v: '' 			, },
		{ k: 'Магазин' 		, v: 'АкваЕра' 		, gps: 'https://maps.app.goo.gl/DsbTDWofhoqkcQH4A', },
	],
},
{
	id: '20220629_europlast', date: '2022-06-29', title: 'нс: Бак пластиковий', descr: 'Europlast', cat: { hh_techno: 1, },
	keyval: [
		{ k: 'Бак пластиковий' 	, v: 'Europlast' 	, },
		{ k: 'Ємність' 			, v: '300 л' 		, },
		{ k: 'Ринок' 			, v: 'Барабашово' 	, },
		{ backspace: true },

		{ k: 'Ціна' 			, v: '2800 грн' 	, },
	],
},
{
	id: '20220520_pouch', date: '2022-05-20', title: 'Підсумок для магазинів', descr: 'чорний', cat: { warstore: 1, },
	keyval: [
		{ k: 'Підсумок' 	, v: 'на чорний бронік' 	, },
		{ k: 'Призначення' 	, v: 'для 3 магазинів АК' 	, },
		{ k: 'Магазин' 		, v: 'Армійський' 			, gps: 'https://maps.app.goo.gl/tD2QEPDt9Zn2tAuF7', },
		{ k: 'Адреса' 		, v: 'вул. Ярославська, 4' 	,  },
		{ backspace: true },

		{ k: 'Ціна' 		, v: '400 грн' 				, },
	],
},
{
	id: '20220520_balaclava', date: '2022-05-20', title: 'Балаклава', descr: 'чорна', cat: { warstore: 1, },
	keyval: [
		{ k: 'Балаклава' 	, v: 'чорна' 					, },
		{ k: 'Адреса' 		, v: 'вул. Ярославська, 2/2' 	, },
		{ k: 'Магазин' 		, v: 'Гвардійський' 			, gps: 'https://maps.app.goo.gl/UQBEFi6KqfBG8PN9A', },
		{ backspace: true },

		{ k: 'Ціна' 		, v: '120 грн' 					, },
	],
},
{
	id: '20220520_xiaomi', date: '2022-05-20', title: 'Xiaomi Poco', type: 'Телефон', cat: { electronics: 1, },
	keyval: [
		{ k: 'Телефон' 		, v: 'Xiaomi Poco' 				, },
		{ k: 'Модель' 		, v: 'Poco M3 Pro 5G 4/64GB' 	, },
		{ k: 'Діагональ' 	, v: '6.5"' 					, },
		{ k: 'Екран' 		, v: '1080х2400' 				, },
		{ k: 'Процесор' 	, v: 'MediaTek Dimensity 700' 	, },
		{ k: '' 			, v: '8 * 2,2 GHz' 				, },
		{ k: 'RAM' 			, v: '4 GB' 					, },
		{ k: 'Пам\'ять' 	, v: '64 GB' 					, },
		{ k: 'Акумулятор' 	, v: '5000  mAh' 				, },
		{ k: 'Магазин' 		, v: 'elmir.ua' 				, href: 'https://elmir.ua/cell_phones/mobile_phone_xiaomi_poco_m3_pro_5g_4_64gb_black_eu.html', },
		{ k: 'Подарунок' 	, v: 'для Вовки )))' 			, },
		{ backspace: true },

		{ k: 'Ціна' 		, v: '7500 грн' 				, },
	],
},
{
	id: '20220517_screwdriver', date: '2022-05-17', descr: 'Dnipro-M', title: 'Шуруповерт', cat: { tools: 1, },
	keyval: [
		{ k: 'Шуруповерт' 	, v: 'Dnipro-M' 	, },
		{ k: 'Модель' 		, v: 'TD-32Q' 		, },
		{ k: 'Продавець' 	, v: 'dnipro-m.ua' 	, href: 'https://dnipro-m.ua/tovar/drel-shurupovert-setevaya-td-32q/?tab=characteristics', },
		{ backspace: true, },

		{ k: 'Ціна' 		, v: '1200 грн' 	, },
	],
},
{
	id: '20220517_grinder', date: '2022-05-17', title: 'Болгарка', descr: 'Dnipro-M', cat: { tools: 1, },
	keyval: [
		{ k: 'Болгарка' 	, v: 'Dnipro-M' 		, },
		{ k: 'Потужність' 	, v: '960 Вт' 			, },
		{ k: 'Продавець' 	, v: 'Dnipro-M' 		, gps: 'https://maps.app.goo.gl/qdnHx4wx36tx5AVWA', },
		{ k: '' 			, v: 'немає на сайті' 	, },
		{ backspace: true, },

		{ k: 'Ціна' 		, v: '1700 грн' 		, },
	],
},
{
	id: '20220515_powerbank', date: '2022-05-15', title: 'PowerBank', descr: '10000 no name', cat: { electronics: 1, },
	keyval: [
		{ k: 'Power Bank' 	, v: 'No Name' 			, },
		{ k: 'Ємність' 		, v: '10000 mAh' 		, },
		{ k: 'Продавець' 	, v: 'Павлюченко Ігор' 	, },
		{ k: 'Дата' 		, v: '2022_05_15_2200' 	, },
		{ k: 'Ціна' 		, v: '400 грн' 			, },
	],
},
{
	id: '20220402_philips', date: '2022-04-02', title: 'Машинка для стрижки', descr: 'Philips', cat: { hh_techno: 1, },
	keyval: [
		{ k: 'Машинка для стрижки' 	, v: 'Philips' 			, },
		{ k: 'Модель' 				, v: 'HC3510/15' 		, },
		{ k: 'Продавець' 			, v: 'elmir.ua' 		, href: 'https://elmir.ua/ua/clippers_trimmers/shearer_philips_hc3510_15.html', },
	],
},
{
	id: '20210000_mask', date: '2021-00-00', title: 'Маска захисна', descr: 'Dnipro-M', cat: { tools: 1, },
	keyval: [
		{ k: 'Маска захисна' 	, v: 'Dnipro-M' 				, },
		{ k: 'Призначення' 		, v: 'для зварювальних робіт' 	, },
		{ k: 'Продавець' 		, v: 'Dnipro-M' 		, },
	],
},
{
	id: '20210000_dnipro_m', date: '2021-00-00', title: 'Апарат зварювальний', descr: 'Dnipro-M', cat: { tools: 1, },
	keyval: [
		{ k: 'Апарат зварювальний' 		, v: 'Dnipro-M' 		, },
		{ k: 'Магазин' 					, v: 'Dnipro-M' 		, },
	],
},
{
	id: '20200426_xiaomi', date: '2021-04-26', title: 'Телефон', descr: 'Xiaomi Redmi 8A', cat: { electronics: 1, }, 
	keyval: [
		{ k: 'Телефон' 			, v: 'Xiaomi Redmi 8A' 		, },
		{ k: 'Модель' 			, v: 'M1908C3KG' 			, },
		{ k: 'Процесор' 		, v: 'Qualcomm Snapdragon 439, 4 x 1.95 ГГц + 4 x 1.45 ГГц' 			, },
		{ k: 'ОЗУ' 				, v: '2 Гб' 				, },
		{ backspace: true, },

		{ k: 'Магазин' 			, v: 'Алло' 				, },
		{ k: 'Allo' 			, v: 'allo.ua' 				, href: 'https://allo.ua/ua/products/mobile/xiaomi-redmi-8a-2-32-midnight-black.html?srsltid=AfmBOooXfbqmdQF3x71KBS5MKa4FLh3iMliz4iDfhl1di1s0gW3J6uARl', },	
		{ k: 'Цитрус' 			, v: 'ctrs.com.ua' 			, href: 'https://www.ctrs.com.ua/ru/smartfony/redmi-8a-232gb-midnight-black-xiaomi-ua-652981.html', },
		{ k: 'Ціна' 			, v: '3000 грн' 			, },
	],
},
{
	id: '20191119_mirta', date: '2019-11-19', title: 'Ваги підлогові', descr: 'Mirta', cat: { electronics: 1, },
	keyval: [
		{ k: 'Ваги підлогові' 	, v: 'Mirta' 		, },
		{ k: 'Маркування' 		, v: 'SB-3120' 		, },
		{ k: 'Продавець' 		, v: 'ElMir' 		, href: 'https://elmir.ua/ua/household_scales/scales_mirta_sb-3120.html', },
	],
},
{
	id: '20150000_', title: '', type: 'Причіп велосипедний', cat: { bicycle: 1, },
	keyval: [
		{ k: 'Причіп велосипедний' 	, v: '' 			, },
		{ k: 'Дата' 				, v: '~ 2015' 		, },
	],
},
{
	id: '20100000_gorenje', date: '2010-00-00', title: 'Машина пральна', descr: 'Gorenje', cat: { hh_techno: 1, },
	keyval: [
		{ k: 'Машина пральна' 		, v: 'Gorenje' 		, },
		{ k: 'Продавець' 			, v: 'Техноточка' 	, },
	],
},
{
	id: '20100929_samsung', date: '2010-09-29', title: 'Пилосос', descr: 'Samsung', cat: { hh_techno: 1, },
	keyval: [
		{ k: 'Пилосос' 		, v: 'Samsung' 						, },
		{ k: 'Модель' 		, v: 'SC4325' 						, },
		{ k: 's/n' 			, v: '278781BZ400147' 				, },
		{ backspace: true },

		{ k: 'Продавець' 	, v: 'Техноточка' 					, },
		{ k: 'Ціна' 		, v: '570 грн' 						, },
		{ backspace: true },

		{ k: 'Статус' 		, v: 'Подарунок від Бондар Алли' 	, },
	],
},
{
	id: '20080000_pump', date: '2008-00-00', title: 'Насос занурювальний', descr: 'Водолей', cat: { hh_techno: 1, },
	keyval: [
		{ k: 'Насос' 				, v: 'Водолей' 			, },
		{ k: 'Продавець' 			, v: 'Аква-че-то там' 	, },
	],
},
{
	id: '20071121_casio', date: '2007-11-21', title: 'Сінтезатор', descr: 'Casio', cat: { electronics: 1, },
	keyval: [
		{ k: 'Сінтезатор' 	, v: 'Casio' 		, },
		{ k: 'Модель' 		, v: 'CDP 100' 		, },
		{ k: 'Магазин' 		, v: 'Атланта-Шоу' 	, },
		{ backspace: true },

		{ k: 'Ціна' 		, v: '3510 грн' 	, },
	],
},
{
	id: '20070714_anabel', date: '2007-07-14', title: 'Ліжко', descr: 'Анабель', cat: { home: 1, },
	keyval: [
		{ k: 'Ліжко' 	, v: 'Анабель' 		, },		
		{ k: 'Ціна' 	, v: '1600 грн' 	, },
	],
},
{
	id: 'jts_js_1e', date: '2004-00-00', title: 'Мікрофон', descr: 'JTS', cat: { electronics: 1, },
	keyval: [
		{ k: 'Мікрофон' 	, v: 'JTS' 			, },
		{ k: 'Модель' 		, v: 'JS-1E' 		, },
		{ k: 'Продавець' 	, v: 'Атланта-Шоу' 	, },
	],
},
{
	id: 'akg_k240', date: '2004-00-00', title: 'AKG K240', type: 'Навушники', cat: { electronics: 1, },
	keyval: [
		{ k: 'Навушники' 	, v: 'AKG' 		, },
		{ k: 'Модель' 		, v: 'K240 Studio' 	, },
		{ k: 'Продавець' 	, v: 'Атланта-Шоу' 	, },
		{ backspace: true },

		{ k: 'Ціна' 		, v: '~ 820-840 грн' 	, },
	],
},
{
	id: '20040000_pump_elite', date: '2004-00-00', title: 'Насос', descr: 'Elite', cat: { hh_techno: 1, },
	keyval: [
		{ k: 'Насос' 				, v: 'Elite' 								, },
		{ k: 'Призначення' 			, v: 'для підсидення тиску води (у ванні)' 	, },
		{ k: 'Модель' 				, v: 'X15G0.6-10' 							, },
		{ k: 'Rated voltage' 		, v: '220-240 V' 							, },
		{ k: 'Rated power' 			, v: '50 Hz' 								, },
		{ k: 'Rated power' 			, v: '120 W' 								, },
		{ k: 'Current' 				, v: '0.58 A' 								, },
		{ k: 'Speed' 				, v: '2860 rpm' 							, },
		{ k: 'Highest head' 		, v: '15 m' 								, },
		{ k: 'Rated head' 			, v: '10 m' 								, },
		{ k: 'Max. capacity' 		, v: '1.5 m<sup>3</sup>/h' 					, },
		{ k: 'Rated Capacity' 		, v: '0.6 m<sup>3</sup>/h' 					, },
		{ k: 'Insulation class' 	, v: 'B' 									, },
		{ backspace: true },

		{ k: 'Ціна' 				, v: '300 грн' 								, },
	],
},
{
	id: '20040705_lg', date: '2004-07-05', title: 'Магнітофон/CD/Radio', descr: 'LG', cat: { electronics: 1, },
	keyval: [
		{ k: 'Магнітофон' 	, v: 'LG' 			, },
		{ k: 'Модель' 		, v: 'LPC-LM735X' 	, },
		{ backspace: true },

		{ k: 'Ціна' 		, v: '625 грн' 		, },
	],
},
{
	id: '20040000_beko', date: '2004-00-00', title: 'Холодильник', descr: 'Beko', cat: { hh_techno: 1, },
	keyval: [
		{ k: 'Холодильник' 	, v: 'Beko' 				, },
		{ k: 'Модель' 		, v: 'можливо RCH 3750' 	, },
		{ k: 's/n' 			, v: '051 029 7305' 				, },

		{ k: 'Напруга' 			, v: '230 В, 50 Гц' 	, },
		{ k: 'Потужність' 		, v: '100 Вт' 			, },
		{ k: 'Ток' 				, v: '0.5 А' 			, },
		{ k: 'Магазин' 			, v: 'ЦУМ' 				, }, // Ц.Ринок
	],
},
{
	id: '20040000_lg', date: '2004-00-00', title: 'Телевізор', descr: 'LG', cat: { electronics: 1, },
	keyval: [
		{ k: 'Телевізор' 	, v: 'LG' 		, },
		{ k: 'Діагональ' 	, v: '25' 		, },
		{ k: 'Магазин' 		, v: 'Target' 	, }, // Ак.Павлова
	],
},
{
	id: '20040323_gp', date: '2004-03-23', title: 'Пристрій зарядний', descr: 'GP', cat: { electronics: 1, },
	keyval: [
		{ k: 'Пристрій зарядний' 	, v: 'GP' 			, },
		{ k: 'Типорозмір батарей' 	, v: 'ААА' 			, },
		{ k: 'Кількість батарей' 	, v: '4 шт' 		, },
		{ backspace: true },

		{ k: 'Ціна' 				, v: '65 грн' 		, },
	],
},







];











