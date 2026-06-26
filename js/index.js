// 2025





const htmlLinkSign = '&#11023;';

// &#698; // ʺ

// &#11023;
// &#11173;



document.querySelector( 'title' ).innerHTML = 'House Hold ' + appVersion;




let htmlNav = '';
arrListNavBtns.forEach( k_arr => {

	let htmlArr = '';
	k_arr.forEach( k_obj => {
		htmlArr += `<div class="btn" data-id="${ k_obj.id }">${ k_obj.title }</div>`;
	});

	htmlNav += `<div class="">${ htmlArr }</div>`;
});

nav.innerHTML = htmlNav;





//let arrSelected = arrList.filter( k => true );
let arrSelected = [];





function showSpoilers( arr ) {

	let htmlSpoilers = '';
	arr.forEach( k_spoiler => {

		let htmlBody = '';
		if ( k_spoiler.keyval ) {

			//console.log( k_spoiler.keyval );
			//console.log( objManufacturer );



			let htmlTBody = '';
			k_spoiler.keyval.forEach( k_keyval => {
				//console.log( k_keyval );


				// пропуск рядка
				if ( k_keyval.backspace ) 
					htmlTBody += `<tr><td class="td-separator" colspan="2">&nbsp;</td></tr>`;
				


				// Виробник
				if ( k_keyval.manufacturer ) {

					let htmlVal = '';
					if ( objListManufacturer && objListManufacturer[ k_keyval.manufacturer ] ) {

						let manufacturer = objListManufacturer[ k_keyval.manufacturer ];

						if ( manufacturer.title ) {
							if ( manufacturer.internet ) {

								let hrefTxt = '';

								if ( manufacturer.internet.avtopro ) 
									hrefTxt = manufacturer.internet.avtopro;

								if ( manufacturer.internet.other ) 
									hrefTxt = manufacturer.internet.other;


								let hrefTitleClue = '';
								if ( manufacturer.country ) {

									let hrefTitleClueYear = manufacturer.year ? ` ( ${ manufacturer.year } )` : '';

									hrefTitleClue = `title="${ manufacturer.country }${ hrefTitleClueYear }"`;
								}

								htmlVal = `<a href="${ hrefTxt }" ${ hrefTitleClue } target="_blank">${ manufacturer.title }${ htmlLinkSign }</a>`
							} 
							else 
								htmlVal = manufacturer.title;
						}
					} 
					else 
						htmlVal = k_keyval.manufacturer;


					htmlTBody += `<tr>
						<td class="txt-key">Виробник</td>
						<td class="txt-val">${ htmlVal }</td>
					</tr>`;
				}



				// пробіг
				if ( k_keyval.mileage ) {
					htmlTBody += `<tr>
						<td class="txt-key">Пробіг</td>
						<td class="txt-val">${ k_keyval.mileage } км</td>
					</tr>`;
				}



				// СТО
				if ( k_keyval.station ) {
					//console.log( k_keyval.station );

					//console.log( objListStation );

					if ( objListStation && objListStation[ k_keyval.station ] ) {

						let objStation = objListStation[ k_keyval.station ];

						let stationTitle = objStation.title ? objStation.title : '';
						if ( objStation.gps ) {

							let stationClue = objStation.address ? `title="${ objStation.address }"` : '';

							stationTitle = `<a href="${ objStation.gps }" ${ stationClue } target="_blank">${ stationTitle }${ htmlLinkSign }</a>`;
						} 
						//console.log( objStation );

						htmlTBody += `<tr>
							<td class="txt-key">СТО</td>
							<td class="txt-val">${ stationTitle }</td>
						</tr>`;
					}
				}



				// магазин
				if ( k_keyval.shop ) {

					//console.log( k_keyval.shop  );
					//console.log( objListShop  );

					if ( objListShop && objListShop[ k_keyval.shop ] ) {

						//alert( k_keyval.shop );

						let objShop = objListShop[ k_keyval.shop ];
						let htmlVal = '';

						//console.log( objShop  );

						if ( objShop.title ) {
							
							htmlVal = objShop.title;

							if ( objShop.gps ) {

								let shopClue = '';
								if ( objShop.address ) {
									shopClue = `title="${ objShop.address } ( на карті )"`;
								}

								htmlVal =`<a href="${ objShop.gps }" ${ shopClue } target="_blank">${ objShop.title }${ htmlLinkSign }</a>`;
							}
						}

						htmlTBody += `<tr>
							<td class="txt-key">Магазин</td>
							<td class="txt-val">${ htmlVal }</td>
						</tr>`;
					}
				}




				// звичайний кейвал
				if ( k_keyval.k || k_keyval.v ) {

					let htmlKey = k_keyval.k ;
					let htmlVal = k_keyval.v;


					if ( k_keyval.href ) 
						htmlVal = `<a href="${ k_keyval.href }" title="Товар на сайті магазину, або інший приклад" target="_blank">${ htmlVal }${ htmlLinkSign }</a>`;


/*
					if ( k_keyval.gps ) 
						htmlVal = `<a href="${ k_keyval.gps }" title="GPS" target="_blank">${ htmlVal }${ htmlLinkSign }</a>`;
*/




					htmlTBody += `<tr>
						<td class="txt-key">${ htmlKey }</td>
						<td class="txt-val">${ htmlVal }</td>
					</tr>`;
				}
			});


			//console.log( htmlTBody );
			//console.log( htmlTBody );



			let htmlTableKeyVal = `<table>
				<thead></thead>
				<tbody>${ htmlTBody }</tbody>
			</table>`;


			//console.log( htmlTableKeyVal );




			htmlBody = `<div>${ htmlTableKeyVal }</div>`;
			//console.log( htmlBody );
		}




/*
		let htmlDate = '';
		if ( k_spoiler.date ) {

			
			if ( k_spoiler.oil ) 
				htmlDate = `<span class="spoiler-title-date-oil">${ k_spoiler.date }</span>`;
	
			else 
				htmlDate = `<span class="spoiler-title-date">${ k_spoiler.date }</span>`;

		}
*/


		if ( k_spoiler.date ) 
			htmlDate = `<span class="spoiler-title-date">${ k_spoiler.date }</span>`;





		let htmlDescr = '';
		if ( k_spoiler.descr  ) 
			htmlDescr = `<span class="spoiler-title-descr">${ k_spoiler.descr }</span>`;
		



		let htmlSpoilerTitle = k_spoiler.title;
		let clsMark = '';

		if ( k_spoiler.mark ) {

			if ( k_spoiler.mark.motoroil ) 
				clsMark = 'mark-oil';

		}

		
		htmlSpoilerTitle = `<span class="${ clsMark }">${ htmlSpoilerTitle }</span>`;




		htmlSpoilers += `<div class="spoiler" data-id="${ k_spoiler.id }">
			<div class="spoiler-title" onmousedown="return false;">${ htmlDate } ${ htmlSpoilerTitle } ${ htmlDescr }</div>
			<div class="spoiler-body" hidden>${ htmlBody }</div>
		</div>`;
	});

	content.innerHTML = htmlSpoilers;
}

showSpoilers( arrSelected );



nav.addEventListener( 'click', function( e ) {




	if ( e.target.classList.contains( 'btn' )) {

		//let elemParent = e.target.closest( '.spoiler-each' );

		let elem = e.target;

		{ // підсвічування кнопок --------------------------------------------
			let arrElem = document.querySelectorAll( '#nav .btn' );

			arrElem.forEach( k_elem => {
				k_elem.classList.remove( 'active' );

			});

			e.target.classList.add( 'active' );
		} // ------------------------------------------------------------------



		let arrSelected = [];


		//console.log( elem );
		//console.log( elem.dataset.id );
		//console.log( elemParent.dataset.id );




		if ( elem.dataset.id && elem.dataset.id == 'bicycle' ) {
			arrSelected = arrList.filter( k_obj => {
				if ( k_obj.cat && k_obj.cat.bicycle ) 
					return true;
			});
		}

		if ( elem.dataset.id && elem.dataset.id == 'chemical' ) {
			arrSelected = arrList.filter( k_obj => {
				if ( k_obj.cat && k_obj.cat.chemical ) 
					return true;
			});
		}

		if ( elem.dataset.id && elem.dataset.id == 'clothing' ) {
			arrSelected = arrList.filter( k_obj => {
				if ( k_obj.cat && k_obj.cat.clothing ) 
					return true;
			});
		}

		if ( elem.dataset.id && elem.dataset.id == 'electronics' ) {
			arrSelected = arrList.filter( k_obj => {
				if ( k_obj.cat && k_obj.cat.electronics ) 
					return true;
			});
		}

		if ( elem.dataset.id && elem.dataset.id == 'cars' ) 
			arrSelected = arrListCars;

		if ( elem.dataset.id && elem.dataset.id == 'pc' ) 
			arrSelected = arrListPC;

		if ( elem.dataset.id && elem.dataset.id == 'hh_techno' ) {
			arrSelected = arrList.filter( k_obj => {
				if ( k_obj.cat && k_obj.cat.hh_techno ) 
					return true;
			});
		}

		if ( elem.dataset.id && elem.dataset.id == 'home' ) {
			arrSelected = arrList.filter( k_obj => {
				if ( k_obj.cat && k_obj.cat.home ) 
					return true;
			});
		}

		if ( elem.dataset.id && elem.dataset.id == 'select' ) 
			arrSelected = arrListSelect;

		if ( elem.dataset.id && elem.dataset.id == 'tools' ) {
			arrSelected = arrList.filter( k_obj => {
				if ( k_obj.cat && k_obj.cat.tools ) 
					return true;
			});
		}

		if ( elem.dataset.id && elem.dataset.id == 'warstore' ) {
			arrSelected = arrList.filter( k_obj => {
				if ( k_obj.cat && k_obj.cat.warstore ) 
					return true;
			});
		}

		if ( elem.dataset.id && elem.dataset.id == 'vw_passat_2e' ) 
			arrSelected = arrList_VW_Passat_B4_2e;

		if ( elem.dataset.id && elem.dataset.id == 'vw_passat_agg' ) 
			arrSelected = arrList_VW_Passat_B4_AGG;







		




		//elemParent.querySelector( '.spoiler-body' ).hidden = !elemParent.querySelector( '.spoiler-body' ).hidden;

		//alert();












/*
		if ( e.target.dataset.id == 'all' ) {
			arrSelected = arrListDevice.filter( k => true );

		} else {

			arrSelected = arrListDevice.filter( k => {

				if ( k.cat ) {

					if ( k.cat[ e.target.dataset.id ] )
						return true;
				}



			});
		}
*/









		showSpoilers( arrSelected );
	}
});





content.addEventListener( 'click', function( e ) {

	if ( e.target.classList.contains( 'spoiler-title' ) || e.target.closest( '.spoiler-title' )) {
	//if ( e.target.closest( '.spoiler' )) {

		let elemParent = e.target.closest( '.spoiler' );

		//console.log( elemParent );
		//console.log( elemParent.dataset.id );

		elemParent.querySelector( '.spoiler-body' ).hidden = !elemParent.querySelector( '.spoiler-body' ).hidden;
	}
});






