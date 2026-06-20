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

				if ( k_keyval.backspace ) {
					htmlTBody += `<tr><td class="td-separator" colspan="2">&nbsp;</td></tr>`;

				} else {

					let htmlVal = '';
					if ( k_keyval.href || k_keyval.gps || k_keyval.clue_manufacturer ) {

						if ( k_keyval.href ) 
							htmlVal = `<a href="${ k_keyval.href }" target="_blank">${ k_keyval.v }${ htmlLinkSign }</a>`;

						if ( k_keyval.gps ) 
							htmlVal = `<a href="${ k_keyval.gps }" target="_blank">${ k_keyval.v } (GPS${ htmlLinkSign })</a>`;


						let htmlClue = '';
						if ( k_keyval.clue_manufacturer ) {
							if ( objManufacturer && objCountry ) {

								if ( objManufacturer[ k_keyval.clue_manufacturer ] ) {

									let manufacturer = objManufacturer[ k_keyval.clue_manufacturer ];

									//console.log( objCountry );
									//console.log( manufacturer );

									let country = '';
									if ( manufacturer.country ) {
										for ( let k_name in manufacturer.country ) {

											if ( objCountry[ k_name ] ) {
												if ( objCountry[ k_name ].title ) {

													if ( objCountry[ k_name ].title.ua ) 
														country += `${ objCountry[ k_name ].title.ua }, `;

												}
											}
										}
									}

									htmlClue = country.slice( 0, -2 );

									//console.log( htmlClue );

									if ( objManufacturer[ k_keyval.clue_manufacturer ].year ) {

										htmlClue = `${ htmlClue } (${ objManufacturer[ k_keyval.clue_manufacturer ].year })`;


										htmlVal = `<span class="txt-clue-manufacturer" title="${ k_keyval.v }, ${ htmlClue }">${ k_keyval.v }</span>`;
										
										//console.log( htmlClue );
										//console.log( htmlVal );


									}

									//console.log( objCountry );
								}
							}

							//htmlVal = `<a href="${ k_keyval.gps }" target="_blank">${ k_keyval.v } (GPS${ htmlLinkSign })</a>`;
							//console.log( 'htmlClue: ', htmlClue );
						}
					}
					else
						htmlVal = k_keyval.v;

					htmlTBody += `<tr><td class="txt-key">${ k_keyval.k }</td><td class="txt-val">${ htmlVal }</td></tr>`;

				}

				//htmlTBody += `<tr><td>${ k_keyval.k }</td><td>${ k_keyval.v }</td></tr>`;
			});

			let htmlTableKeyVal = `<table>
				<thead></thead>
				<tbody>${ htmlTBody }</tbody>
			</table>`;

			htmlBody += `<div>${ htmlTableKeyVal }</div>`;
		}

		let htmlDate = '';
		if ( k_spoiler.date  ) 
			htmlDate = `<span class="spoiler-title-cat">${ k_spoiler.date }</span>`;
		
		let htmlDescr = '';
		if ( k_spoiler.descr  ) 
			htmlDescr = `<span class="spoiler-title-cat">${ k_spoiler.descr }</span>`;
		





		htmlSpoilers += `<div class="spoiler" data-id="${ k_spoiler.id }">
			<div class="spoiler-title" onmousedown="return false;">${ htmlDate } ${ k_spoiler.title } ${ htmlDescr }</div>
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






