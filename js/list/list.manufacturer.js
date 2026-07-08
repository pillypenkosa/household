




const arrListCountry = [



{ id: 'gbr' , title: 'Велика Британія' 		, },
{ id: 'dnk' , title: 'Данія' 				, },
{ id: 'esp' , title: 'Іспанія' 				, },
{ id: 'ita' , title: 'Італія' 				, },
{ id: 'deu' , title: 'Німеччина' 			, },
{ id: 'pol' , title: 'Польща' 				, },
{ id: 'usa' , title: 'США' 					, },
{ id: 'twn' , title: 'Тайвань' 				, },
{ id: 'fra' , title: 'Франція' 				, },
{ id: 'swe' , title: 'Швеція' 				, },
{ id: 'jpn' , title: 'Японія' 				, },


];




let objListCountry = {};
arrListCountry.forEach( k => {
	objListCountry[ k.id ] = k;
});








const arrListManufacturer = [



{ id: 'alkar' 			, title: 'Alkar' 				, country: 'esp' 	, year: 1968 	, internet: { avtopro: 'https://avto.pro/makers/alkar' 							, }, },
{ id: 'beru' 			, title: 'Beru' 				, country: 'deu' 	, year: 1912 	, internet: { avtopro: 'https://avto.pro/makers/beru' 							, }, },
{ id: 'bilstein' 		, title: 'Bilstein' 			, country: 'deu' 	, year: 1873 	, internet: { avtopro: 'https://avto.pro/makers/bilstein' 						, }, },
{ id: 'bosch' 			, title: 'Bosch' 				, country: 'deu' 	, year: 1921 	, internet: { avtopro: 'https://avto.pro/makers/bosch' 							, }, },
{ id: 'bremi' 			, title: 'Bremi' 				, country: 'deu' 	, year: 1927 	, internet: { avtopro: 'https://avto.pro/makers/bremi/' 						, }, },
{ id: 'bridgestone' 	, title: 'Bridgestone' 			, country: 'jpn' 	, year: 1931 	, internet: { wiki_ua: 'https://uk.wikipedia.org/wiki/Bridgestone' 				, }, },
{ id: 'contitech' 		, title: 'Contitech' 			, country: 'deu' 	, year: 1871 	, internet: { avtopro: 'https://avto.pro/makers/continental' 					, }, }, // Contitech - подразделение Continental
{ id: 'continental' 	, title: 'Continental' 			, country: 'deu' 	, year: 1871 	, internet: { wiki_ua: 'https://uk.wikipedia.org/wiki/Continental_AG' 			, }, }, 
{ id: 'denso' 			, title: 'Denso' 				, country: 'jpn' 	, year: 1900 	, internet: { avtopro: 'https://avto.pro/makers/denso' 							, }, },
{ id: 'exide' 			, title: 'Exide' 				, country: 'usa' 	, year: 1888 	, internet: { avtopro: 'https://avto.pro/makers/exide/' 						, }, },
{ id: 'febi' 			, title: 'Febi' 				, country: 'deu' 	, year: 1844 	, internet: { avtopro: 'https://avto.pro/makers/febi' 							, }, },
{ id: 'gates' 			, title: 'Gates' 				, country: 'usa' 	, year: 1917 	, internet: { avtopro: 'https://avto.pro/makers/gates' 							, }, },
{ id: 'gkn' 			, title: 'GKN' 					, country: 'gbr' 	, year: 1759 	, internet: { avtopro: 'https://avto.pro/makers/spidan' 						, }, },
{ id: 'gkn_spidan' 		, title: 'GKN-Spidan' 			, country: 'fra' 	, year: 0 		, internet: { avtopro: 'https://avto.pro/makers/spidan' 						, }, },
{ id: 'goodyear' 		, title: 'Goodyear' 			, country: 'usa' 	, year: 1898 	, internet: { wiki_ua: 'https://uk.wikipedia.org/wiki/Goodyear' 				, }, },
{ id: 'hella' 			, title: 'Hella' 				, country: 'deu' 	, year: 1899 	, internet: { avtopro: 'https://avto.pro/makers/hella' 							, }, },
{ id: 'ina' 			, title: 'INA' 					, country: 'deu' 	, year: 1946 	, internet: { avtopro: 'https://avto.pro/makers/ina' 							, }, },
{ id: 'jp_group' 		, title: 'JP Group' 			, country: 'dnk' 	, year: 1976 	, internet: { avtopro: 'https://avto.pro/makers/jp-group' 						, }, },
{ id: 'junyan' 			, title: 'Junyan' 				, country: 'twn' 	, year: 1999 	, internet: { other: 'https://www.junyan.com.tw/about.asp' 						, }, },
{ id: 'k_f' 			, title: 'K+F' 					, country: 'deu' 	, year: 1887 	, internet: { avtopro: 'https://avto.pro/makers/k-f' 							, }, },
{ id: 'kayaba' 			, title: 'Kayaba' 				, country: 'jpn' 	, year: 1947 	, internet: { avtopro: 'https://avto.pro/makers/kayaba' 						, }, },
{ id: 'kenwood' 		, title: 'Kenwood' 				, country: 'jpn' 	, year: 1946 	, internet: { other: 'https://uk.wikipedia.org/wiki/Kenwood_Corporation' 		, }, },
{ id: 'lemforder' 		, title: 'Lemforder' 			, country: 'deu' 	, year: 1937 	, internet: { avtopro: 'https://avto.pro/makers/lemfoerder' 					, }, },
{ id: 'lesjofors' 		, title: 'Lesjofors' 			, country: 'swe' 	, year: 1852 	, internet: { avtopro: 'https://avto.pro/makers/lesjofors' 						, }, },
{ id: 'liqui_m' 		, title: 'Liqui Moly' 			, country: 'deu' 	, year: 1957 	, internet: { avtopro: 'https://avto.pro/makers/liqui-moly' 					, }, },
{ id: 'm_marelli' 		, title: 'Magneti Marelli' 		, country: 'ita' 	, year: 1919 	, internet: { avtopro: 'https://avto.pro/makers/magneti-marelli' 				, }, },
{ id: 'mahle' 			, title: 'Mahle' 				, country: 'deu' 	, year: 1920 	, internet: { avtopro: 'https://avto.pro/makers/mahle/' 						, }, },
{ id: 'meyle' 			, title: 'Meyle' 				, country: 'deu' 	, year: 1958 	, internet: { avtopro: 'https://avto.pro/makers/meyle' 							, }, },
{ id: 'michelin' 		, title: 'Michelin' 			, country: 'fra' 	, year: 1889 	, internet: { wiki_ua: 'https://uk.wikipedia.org/wiki/Michelin' 				, }, },
{ id: 'monroe' 			, title: 'Monroe' 				, country: 'usa' 	, year: 1916 	, internet: { avtopro: 'https://avto.pro/makers/monroe' 						, }, },
{ id: 'narva' 			, title: 'Narva' 				, country: 'deu' 	, year: 1948 	, internet: { avtopro: 'https://avto.pro/makers/narva' 							, }, },
{ id: 'osram' 			, title: 'Osram' 				, country: 'deu' 	, year: 1906 	, internet: { avtopro: 'https://avto.pro/makers/osram' 							, }, },
{ id: 'philips' 		, title: 'Philips' 				, country: 'deu' 	, year: 1891 	, internet: { avtopro: 'https://avto.pro/makers/philips' 						, }, },
{ id: 'pirelli' 		, title: 'Pirelli' 				, country: 'ita' 	, year: 1872 	, internet: { wiki_ua: 'https://uk.wikipedia.org/wiki/Pirelli' 					, }, },
{ id: 'purflux' 		, title: 'Purflux' 				, country: 'fra' 	, year: 1956 	, internet: { avtopro: 'https://avto.pro/makers/purflux/' 						, }, },
{ id: 'sachs' 			, title: 'Sachs' 				, country: 'deu' 	, year: 1895 	, internet: { avtopro: 'https://avtopro.ua/makers/sachs' 						, }, },
{ id: 'toyo' 			, title: 'Toyo' 				, country: 'jpn' 	, year: 1945 	, internet: { wiki_ua: 'https://ru.wikipedia.org/wiki/Toyo_Tire_Corporation' 	, }, },
{ id: 'trw' 			, title: 'TRW' 					, country: 'usa' 	, year: 1901 	, internet: { avtopro: 'https://avto.pro/makers/trw' 							, }, },
{ id: 'vag' 			, title: 'VAG' 					, country: 'deu' 	, year: 1937 	, internet: { avtopro: 'https://avto.pro/makers/vag' 							, }, },
{ id: 'wix' 			, title: 'Wix' 					, country: 'usa' 	, year: 1939 	, internet: { avtopro: 'https://avto.pro/makers/wix' 							, }, },
{ id: 'yokohama' 		, title: 'Yokohama' 			, country: 'jpn' 	, year: 1917 	, internet: { wiki_ua: 'https://ru.wikipedia.org/wiki/Yokohama_Rubber_Company' 	, }, },
{ id: 'zap' 			, title: 'Zap' 					, country: 'pol' 	, year: 1925 	, internet: { other: 'https://zap.pl/ru/ru-istoriya-kompanii' 					, }, },












];









let objListManufacturer = {};
arrListManufacturer.forEach( k => {
	objListManufacturer[ k.id ] = k;
});







