// 










const arrListPC = [








{
	id: 'pc_desktop', date: '2008-00-00', title: 'Компьютер', 
	keyval: [
		


		{ k: '--- Материнська плата' 	, v: 'Gigabyte Z370 HD3' 				, },
		{ k: 'Сокет' 					, v: 's-1151' 							, },
		{ k: 'Чипсет' 					, v: 'Intel Z370' 						, },
		{ k: 'Тип RAM' 					, v: 'DDR4 * 4 шт' 						, },
		{ k: 'Об\'єм RAM' 				, v: '64 Гб' 							, },
		{ k: 'Частоти пам\'яті' 		, v: '2133 МГц, 2400 МГц, 2666 МГц' 	, },
		
		{ k: 'Магазин' 		, v: 'PC Shop' 							, },
		{ k: 'Дата' 		, v: '2018-02-16' 						, },
		{ k: 'Ціна' 		, v: '4068 грн' 						, },

		{ k: 'Приклад' 				, v: 'elmir.ua' 		, href: 'https://elmir.ua/motherboards/motherboard_gigabyte_z370_hd3_s-1151_z370.html' 	, },
		{ k: 'Приклад' 				, v: 'rozetka.com.ua' 	, href: 'https://hard.rozetka.com.ua/ua/gigabyte_z370_hd3/p24386964/'					, },
		{ k: 'Процесори для Z370' 	, v: 'gigabyte.com' 	, href: 'https://www.gigabyte.com/Motherboard/Z370-HD3-rev-10/support#support-cpu' 		, },
		{ backspace: true },
		




		{ k: '--- Процесор' 		, v: 'Intel Core i3-8100' 	, },
		{ k: 'Частота ядра' 		, v: '3.6 ГГц' 				, },
		{ k: 'Кількість ядер' 		, v: 4 						, },
		{ k: 'Тип пам\'яти' 		, v: 'DDR4' 				, },
		{ k: 'Частота пам\'яті' 	, v: '2400 МГц' 			, },
		{ k: 'Ядро' 				, v: 'Coffee Lake' 			, },
		{ k: 'Кеш L1' 				, v: '256 КБ' 				, },
		{ k: 'Кеш L2' 				, v: '1 МБ' 				, },
		{ k: 'Кеш L3' 				, v: '6 МБ' 				, },
		{ k: 'Техпроцес' 			, v: '14 нм' 				, },
		{ k: 'TDP' 					, v: '65 Вт' 				, },

		{ k: 'Відеоядро' 			, v: 'Intel UHD Graphics 630' 	, },
		{ k: 'Пропускна здатність' 	, v: '42.7 GB/s' 				, },
		{ k: 'Шина' 				, v: '128 bit' 					, },

		{ k: 'Магазин' 				, v: 'PC Shop' 					, },
		{ k: 'Приклад' 				, v: 'elmir.ua' 				, href: 'https://elmir.ua/processors/processor_intel_core_i3-8100_s-1151_3_6ghz_6mb_box_bx80684i38100.html' 	, },
		{ k: 'Приклад' 				, v: 'rozetka.com.ua' 			, href: 'https://hard.rozetka.com.ua/intel_core_i3_8100/p23602096/characteristics/' 							, },
		{ backspace: true },





		{ k: '--- Оперативна пам\'ять' 		, v: 'HyperX Fury Black' 		, },
		{ k: 'Код' 							, v: 'HX426C16FB3K2/16' 		, },
		{ k: 'Тип' 							, v: 'DDR4' 					, },
		{ k: 'Об\'єм' 						, v: '16 Гб = 8GB * 2' 			, },
		{ k: 'Частота' 						, v: '2666(1333) МГц' 			, },
		{ k: 'Таймінги' 					, v: 'CL16' 					, },
		{ k: 'Напруга' 						, v: '1,2 В' 					, },
		
		{ k: 'Магазин' 			, v: 'PC Shop' 					, },
		{ k: 'Дата' 			, v: '2018-02-16' 				, },
		{ k: 'Ціна' 			, v: '6216 грн за 2 планки' 	, },
		
		{ k: 'Приклад' 			, v: 'elmir.ua' 				, href: 'https://elmir.ua/memory_modules/memory_module_hyperx_ddr4_16gb_2x8gb_2666mhz_fury_black_hx426c16fb3k2_16.html', },
		{ backspace: true },





		{ k: '--- Диск SSD M.2' 	, v: 'Kingston NV1' 	, },
		{ k: 'Код' 					, v: '9KXJKEJ4RC6A66' 	, },
		{ k: 'об\'єм' 				, v: '1 TB' 			, },
		
		{ k: 'запис' 			, v: '1700 МБ/с' 		, },
		{ k: 'зчитування' 		, v: '2100 МБ/с' 		, },
		{ k: 'ключ' 			, v: 'М' 				, },
		
		{ k: 'Магазин' 			, v: 'elmir.ua' 		, href: 'https://elmir.ua/ua/ssd-drives/ssd-drive_m_2_1tb_kingston_nv1_snvs_1000g.html', },
		{ k: 'Дата' 			, v: '2022-12-01' 		, },
		{ k: 'Ціна' 			, v: '2878 грн' 		, },
		{ backspace: true },



		{ k: '--- Диск SSD SATA-3' 	, v: 'Silicon Power' 		, },
		{ k: 'Модель' 				, v: 'A55' 					, },
		{ k: 'Код' 					, v: 'SP128GBSS3A55S25' 	, },

		{ k: 'Form' 			, v: 'SATA-3' 				, },
		{ k: 'об\'єм' 			, v: '128 GB' 				, },
		{ k: 'запис' 			, v: '360 МБ/с' 			, },
		{ k: 'зчитування' 		, v: '460 МБ/с' 			, },
		
		{ k: 'Магазин' 			, v: 'elmir.ua' 			, href: 'https://elmir.ua/ua/ssd-drives/ssd-drive_2_5_sata_128gb_silicon_power_a55_sp128gbss3a55s25.html', },
		{ k: 'Дата' 			, v: '2018-01-23' 			, },
		{ k: 'Ціна' 			, v: '1480 грн' 			, },
		{ backspace: true },





		{ k: '--- Блок живлення' 			, v: 'Super Flower' 				, }, // psu - power supply unit
		{ k: 'Модель' 						, v: 'Leadex VII XP Pro Series' 	, },
		{ k: 'Код' 							, v: 'SF-1000F14XP(BK)' 			, },
		{ k: 'Потужність' 					, v: '1000 Вт' 						, },
		{ k: 'Клас рівня ефективності' 	, v: '80 Plus Titanium' 			, },		
		
		{ k: 'e-Магазин' 	, v: 'elmir.ua' 		, href: 'https://elmir.ua/ua/power_supplies/power-supply-unit-1000w-super-flower-leadex-vii-xp-pro-series-sf-1000f14xp-black.html#specs', },
		{ k: 'Дата' 		, v: '2026-06-18' 		, },
		{ k: 'Ціна' 		, v: '7760 грн' 		, },
		{ backspace: true },





		{ k: '--- Корпус ПК' 	, v: 'Cooler Master Elite' 	, },
		{ k: 'Модель' 			, v: 'RC-331' 				, },
		{ k: 'FormFactor' 		, v: 'Middle Tower ATX' 	, },
		{ k: 'Магазин' 			, v: 'ElMir' 				, },
		{ k: 'Дата' 			, v: '2008-03-23' 			, },
		{ backspace: true },





		{ k: '--- Монітор' 		, v: 'Samsung' 							, },
		{ k: 'Модель' 			, v: 'S32D700EAI (LS32D700EAIXCI)' 		, },
		{ k: 's/n' 				, v: '8806095545035, 0UYNHNBX900040' 	, },
		{ k: 'Діагональ' 		, v: '32"' 								, },
		{ k: 'Розширення' 		, v: '3840x2160' 						, },
		{ k: 'Частота' 			, v: '60 Гц' 							, },
		{ k: 'Матриця' 			, v: 'VA' 								, },
		{ k: 'Співвідношення' 	, v: '16:9' 							, },
		{ k: 'Час реакції' 		, v: '5 мс' 							, },
		{ k: 'HDMI' 			, v: '2.0' 								, },
		{ k: 'Магазин' 			, v: 'elmir.ua' 						, href: 'https://elmir.ua/ua/monitors/monitor-32-samsung-s32d700eai-ls32d700eaixci.html', },
		{ k: 'Дата' 			, v: '2024-12-20' 						, },
		{ k: 'Ціна' 			, v: '12000 грн' 						, },
		{ backspace: true },





		{ backspace: true },
		{ backspace: true },
		{ backspace: true },
		{ backspace: true },

		{ k: '------- Комплектуючі б/в -------' 	, v: '' 	, },
		{ backspace: true },
		{ backspace: true },





		{ k: '--- Материнські плати ---' 	, v: '' 		, },
		{ backspace: true },

		{ k: 'Материнська плата' 	, v: 'Gigabyte' 		, },
		{ k: 'Модель' 				, v: 'GA-P35-DS3L' 		, },
		{ k: 'Магазин' 				, v: 'ElMir' 			, },
		{ k: 'Дата' 				, v: '2008-03-17' 		, },
		{ k: 'Rozetka' 				, v: 'rozetka.com.ua' 	, href: 'https://hard.rozetka.com.ua/ua/22824/p22824/', },
		{ backspace: true },
		{ backspace: true },





		{ k: '--- Оперативна пам\'ять ---' 		, v: ' ' 		, },
		{ backspace: true },

		{ k: 'Оперативна пам\'ять' 		, v: 'Corsair' 			, },
		{ k: 'Модель' 					, v: 'TWIN 2X 2048-6400 C5DHX' 	, },
		{ k: 'Type' 					, v: 'DDR2' 					, },
		{ k: 'Частота' 					, v: '800 MHz' 					, },
		{ k: 'Об\'єм' 					, v: '4 ГБ = 4 планки * 1 Гб' 	, },

		{ k: 'Магазин' 		, v: 'ElMir' 					, },
		{ k: 'Дата' 		, v: '2008-03-22' 				, },
		{ k: 'Приклад' 		, v: 'rozetka.com.ua' 			, href: 'https://hard.rozetka.com.ua/ua/23619/p23619/', },
		
		{ k: 'Статус' 		, v: 'Резерв' 	, },
		{ backspace: true },
		{ backspace: true },





		{ k: '--- Диски ---' 		, v: '' 	, },
		{ backspace: true },

		{ k: 'Диск HDD' 	, v: 'Seagate Barracuda' 	, },
		{ k: 'Код' 			, v: 'ST2000DM006' 			, },
		{ k: 's/n' 			, v: 'Z4Z9X55D' 			, },
		{ k: 'Об\'єм' 		, v: '2 TB' 				, },
		{ k: 'Form' 		, v: 'SATA' 				, },
		{ k: 'Магазин' 		, v: 'ElMir' 				, },
		{ k: 'Дата' 		, v: '2018-03-12' 			, },
		{ k: 'Статус' 		, v: 'Працює повільно. Резерв' 	, },
		{ backspace: true },

		{ k: 'Диск HDD' 	, v: 'Seagate Barracuda' 	, },
		{ k: 's/n' 			, v: '3QK08098' 			, },
		{ k: 'Об\'єм' 		, v: '750 Gb' 				, },
		{ k: 'rpm' 			, v: '7200.11' 				, },
		{ k: 'Продавець' 	, v: 'ElMir' 				, },
		{ k: 'Дата' 		, v: '2008-03-23' 			, },
		{ k: 'Статус' 		, v: 'На смітнику' 			, },
		
		{ backspace: true },
		{ backspace: true },





		{ k: '--- Блоки живлення ---' 	, v: '' 		, },
		{ backspace: true },

		{ k: 'Блок живлення' 			, v: 'Chieftec' 		, },
		{ k: 'Модель' 					, v: 'Core BBS-700S' 	, },
		{ k: 'Потужність' 				, v: '700 Вт' 			, },
		{ k: 'Клас рівня ефективності' 	, v: '80 Plus Gold' 	, },		
		{ k: 'Магазин' 					, v: 'PC Shop' 			, },
		{ k: 'Дата' 					, v: '2021-08-31' 		, },
		{ k: 'Ціна' 					, v: '1679 грн' 		, },
		{ k: 'Приклад' 					, v: 'elmir.ua' 		, href: 'https://elmir.ua/power_supplies/power_supply_unit_700w_chieftec_core_bbs-700s.html', },
		{ k: 'Статус' 					, v: 'Резерв' 			, },
		{ backspace: true },
		
		{ k: 'Блок живлення' 	, v: 'Chieftec' 				, },
		{ k: 'Модель' 			, v: 'GPE-700S ( Eco Series )' 	, },
		{ k: 'Потужність' 		, v: '700 Вт' 					, },
		{ k: 'Статус' 			, v: 'Стан невідомий' 			, },
		{ backspace: true },

		{ k: 'Блок живлення' 	, v: 'Thermaltake' 			, },
		{ k: 'Потужність' 		, v: '750 Вт' 				, },
		{ k: 's/n' 				, v: 'W0117RE0703000447' 	, },
		{ k: 'Магазин' 			, v: 'ElMir' 				, },
		{ k: 'Дата' 			, v: '2008-03-23' 			, },
		{ k: 'Статус' 			, v: 'На смітнику' 			, },
		
		{ backspace: true },
		{ backspace: true },





		{ k: '--- Відеокарти ---' 	, v: 'Zotac' 						, },
		{ backspace: true },
		
		{ k: 'Відеокарта' 	, v: 'Zotac' 						, },
		{ k: 'Модель' 			, v: 'GeForce 8800 GT AMP' 			, },
		{ k: 'Об\'єм' 			, v: '512 Gb' 						, },
		{ k: 'Частота' 			, v: '2000 MHz' 					, },
		{ k: 'Шина' 			, v: '256 bit' 						, },
		{ k: 'Магазин' 			, v: 'Stels' 						, },
		{ k: '' 				, v: 'Відділ в універмазі Харків' 	, },
		{ k: 'Дата' 			, v: '2008-03-22' 					, },

		{ k: 'Статус' 			, v: 'На смітнику' 			, },
		{ backspace: true },
		{ backspace: true },





		{ k: '--- Звукові карти ---' 	, v: '' 	, },
		{ backspace: true },

		{ k: 'Звукова карта' 	, v: 'Creative 5.1 Live' 	, },
		{ k: 'Продавець' 		, v: 'МКС' 					, },
		{ k: 'Дата' 			, v: '2004-06-05' 			, },
		{ k: 'Ціна' 			, v: '210 грн' 				, },

		{ k: 'Статус' 			, v: 'Резерв' 				, },
		{ backspace: true },
		{ backspace: true },





		{ k: '--- Монітори ---' 	, v: '' 					, },
		{ backspace: true },

		{ k: 'Монітор' 			, v: 'LG Flatron' 					, },
		{ k: 'Модель' 			, v: 'L204WT-SF' 					, },
		{ k: 'Діагональ' 		, v: '20"' 							, },
		{ k: 'Технологія' 		, v: 'TFT LCD' 						, },
		{ k: 'Продавець' 		, v: 'відділ в Універмазі Харків' 	, }, // ФОП Яковенко Ігор Сергійович
		{ k: 'Дата' 			, v: '2008-03-07' 					, },
		{ k: 'Ціна' 			, v: '1500 грн' 					, },

		{ k: 'Статус' 			, v: 'Працює в парі з ноутбуком' 	, },
		{ backspace: true },
		{ backspace: true },



	],
},
{
	id: '20180604_lenovo', date: '2018-06-04', title: 'Ноутбук', descr: 'Lenovo',
	keyval: [
		
		{ k: 'ноутбук' 			, v: 'Lenovo Ideapad 320-15 IKB' 	, },
		{ k: 'модель' 			, v: '80XL03WBRA' 					, },
		{ k: 's/n' 				, v: 'PF10DUAV' 					, },
		{ backspace: true },

		{ k: 'MainBoard' 		, v: 'Lenovo' 			, },
		{ k: 'model' 			, v: 'LNVNB161216' 		, },
		{ k: '' 				, v: 'DDR4' 			, },
		{ backspace: true },

		{ k: 'CPU' 				, v: '' 					, },
		{ k: '' 				, v: 'Intel Core i3-7130U' 	, },
		{ k: '' 				, v: '4 * 2.7 GHz' 			, },
		{ k: '' 				, v: 'Kaby Lake (7)' 		, },
		{ backspace: true },

		{ k: 'RAM' 				, v: '8 GB // 2 * 4 Гб' 	, },
		{ k: '' 				, v: 'DDR4' 				, },
		{ k: '' 				, v: '2133 MHz' 			, },
		{ k: '' 				, v: 'SODIMM' 				, },
		{ backspace: true },

		{ k: 'Відеокарта' 		, v: 'nVidia GeForce 940 MX' 	, },
		{ k: 'Шина' 			, v: '64 bit' 					, },
		{ k: 'Частота' 			, v: 'MHz' 						, },
		{ k: '' 				, v: '40.1 Gb/s' 				, },
		{ backspace: true },
		
		{ k: 'Відеоядро' 		, v: 'Intel Graphics 620' 		, },
		{ k: 'Шина' 			, v: '128 bit' 					, },
		{ k: 'Частота' 			, v: 'MHz' 						, },
		{ k: '' 				, v: '34.1 Gb/s' 				, },
		{ backspace: true },


		{ k: 'дісплей' 			, v: '15.6&#698;, 1920 x 1080' 							, },
		{ k: 'відео' 			, v: 'Intel HD Graphic 620' 							, },
		{ k: '' 				, v: 'nVidia GeForce 640 MX (2 GB)' 					, },
		{ k: 'SSD' 				, v: '256 GB' 											, },
		{ backspace: true },

		{ k: 'BIOS' 			, v: ' F2' 							, },
		{ k: 'Boot' 			, v: ' F12' 						, },
		{ backspace: true },

		{ k: 'Блок живлення' 	, v: '' 							, },
		{ k: '- модель' 		, v: 'ADLX65CDGE2A' 				, },
		{ k: '- input' 			, v: '100-240 V, 1.5 A, 50-60 Hz' 	, },
		{ k: '- output' 		, v: '20 V, 3.25 A (65 Вт)' 		, },
		{ backspace: true },

		{ k: 'Продавець' 		, v: 'Comfy' 			, gps: 'https://maps.app.goo.gl/gdXKpmaikkyycc99A', }, 	// вул. Героїв Праці, 9
		{ k: 'Ціна' 			, v: '16000 грн' 		, },
		{ k: 'Дата' 			, v: '2018-06-04' 		, },
		{ backspace: true },

		{ k: 'Rozetka' 			, v: 'rozetka.com.ua' 	, href: 'https://rozetka.com.ua/ua/lenovo_80xl03wbra/p28306433/', },
		{ k: 'Elmir' 			, v: 'elmir.ua' 		, href: 'https://elmir.ua/ua/laptops/notebook_lenovo_ideapad_320-15_80xl03wbra.html', },
		{ backspace: true },

		{ k: 'Сведения о системе' 	, v: '' 		, },
		{ k: 'Win + R' 				, v: 'msinfo32' 		, },
		{ backspace: true },

		{ k: 'Розборка' 			, v: 'youtube.com' 		, href: 'https://www.youtube.com/watch?v=4epRkTuxqLE', },
		{ backspace: true },

	],
}, 




{
	id: '20260113', date: '2026-01-13', title: 'Модем', descr: 'TP-Link Archer A64', 
	keyval: [

		{ k: 'Назва' 		, v: 'TP-Link' 				, },
		{ k: '' 			, v: 'AC 1200 Archer A64' 	, },
		{ backspace: true },

		{ k: 'Ціна' 		, v: '1600 грн' 			, },
	],
},
{
	id: '20251118', date: '2025-11-18', title: 'Пульт керування', descr: 'Radiomaster, для симуляторів', 
	keyval: [
		{ k: 'Пульт керування' 		, v: 'Radiomaster ' 		, },
		{ k: 'Модель' 				, v: 'Boxer ELRS M2' 		, },
		{ backspace: true },

		{ k: 'Товар' 				, v: 'prom.ua' 			, gps: 'https://prom.ua/ua/p2729596346-radioapparatura-radiomaster-boxer.html', }, 
		{ k: 'e-Магазин' 			, v: 'prom.ua' 			, gps: '', }, 
		{ backspace: true },

		{ k: 'Ціна' 				, v: '6500 грн' 		, },
	],
},
{
	id: '20251115', date: '2025-11-15', title: 'Пульт керування', descr: 'FlySky, для симуляторів', 
	keyval: [
		{ k: 'Пульт керування' 		, v: 'FlySky' 			, },
		{ k: 'Модель' 				, v: 'FS-SM001' 		, },
		{ k: 'Магазин' 				, v: 'prom.ua' 			, gps: 'https://prom.ua/ua/p2047990659-flysky-sm001-usb.html', }, 
		{ k: '' 					, v: 'Mobipoisk ' 		, gps: 'https://prom.ua/ua/c1000722-mobipoisk-ekonom-umno.html', }, 
		{ k: 'Ціна' 				, v: '1780 грн' 		, },
	],
},
{
	id: '20220410', date: '2022-04-10', title: 'Камера Web', descr: 'Media-Tech', 
	keyval: [
		{ k: 'Камера Web' 	, v: 'Media-Tech' 		, },
		{ k: 'Модель' 		, v: 'LOOK V MT4107' 	, },
		{ k: 'Продавець' 	, v: 'elmir.ua' 		, href: 'https://elmir.ua/ua/web_camera/web_camera_media-tech_look_v_mt4107_black.html', },
	],
},
{
	id: '20201015', date: '2020-10-15', title: 'Акумулятори', descr: 'CSB, для ДБЖ...заміна', 
	keyval: [
		{ k: 'Акумулятори' 		, v: 'CSB' 					, },
		{ k: 'Модель' 			, v: 'HR1234WF2' 			, },
		{ k: 'Маркування' 		, v: 'CSB 12В 9Ач' 			, },
		{ k: 'Призначення' 		, v: 'для ДБЖ ' 			, },
		{ k: 'Продавець' 		, v: 'ElMir' 				, },
	],
},
{
	id: '20170929', date: '2017-09-29', title: 'USB Flash', descr: 'GoodRam', 
	keyval: [
		{ k: 'USB Flash' 	, v: 'GoodRam' 			, },
		{ k: 'Маркування' 	, v: 'UTS3' 			, },
		{ k: 'Об\'єм' 		, v: '64 GB' 			, },
		{ k: 'Продавець' 	, v: 'ElMir' 			, },
		{ backspace: true },

		{ k: 'Статус' 		, v: 'Вихід з ладу' 	, },
	],
},
{
	id: '20161223', date: '2016-12-23', title: 'Диск SSD', descr: 'Silicon Power, зовнішній', 
	keyval: [

		{ k: 'Диск SSD' 		, v: 'Silicon Power' 		, },
		{ k: 'Модель' 			, v: 'A60' 					, },
		{ k: 'Код' 				, v: 'SP010TBPHDA60S3K' 	, },
		{ k: 's/n' 				, v: '4712702635997' 		, },
		{ backspace: true },

		{ k: 'Form' 		, v: 'SATA' 				, },
		{ k: 'Об\'єм' 		, v: '1 Tb' 				, },
		{ k: 'Магазин' 		, v: 'ElMir' 				, },
		{ backspace: true },

		{ k: 'Статус' 			, v: 'Подарунок жінці' 	, },
	],
},
{
	id: '20080616', date: '2008-06-16', title: 'ДБЖ', descr: 'Mustek', 
	keyval: [
		{ k: 'Джерело безперебійного живлення' 	, v: 'Mustek' 				, },
		{ k: 'Модель' 							, v: 'PowerMust 1400 USB' 	, },
		{ k: 's/n' 								, v: '73609C00217' 			, },
		{ k: 'Продавець' 						, v: 'ElMir' 				, },
	],
},
{
	id: '20080322', date: '2008-03-22', title: 'Стабілізатор', descr: 'APC', 
	keyval: [
		{ k: 'Стабілізатор' 	, v: 'APC' 				, },
		{ k: 'Модель' 			, v: 'Line-R 1200' 		, },
		{ k: 'Продавець' 		, v: 'МКС' 				, },
		{ k: 'Ціна' 			, v: '294 грн' 			, },
		{ k: 'Rozetka' 			, v: 'rozetka.com.ua' 	, href: 'https://rozetka.com.ua/ua/apc_regulator_1200va/p144790/', },
	],
},
{
	id: '20070831_mbox_2', date: '2007-08-31', title: 'Карта звукова', descr: 'Mbox 2', 
	keyval: [
		{ k: 'Карта звукова' 	, v: 'Mbox' 		, },
		{ k: 'Модель' 			, v: '2 Factory' 	, },
		{ k: 'Продавець' 		, v: 'Атланта-Шоу' 	, },
	],
},
{
	id: '20070319_sven', date: '2007-03-19', title: 'Колонки', descr: 'Sven', 
	keyval: [
		{ k: 'Колонки' 		, v: 'Sven ' 		, },
		{ k: 'Модель' 		, v: 'BF-21 ' 		, },
		{ k: 'Продавець' 	, v: 'МКС' 			, },
		{ k: 'Ціна' 		, v: '178 грн' 		, },
	],
},




];







