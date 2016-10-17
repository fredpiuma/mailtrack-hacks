// ==UserScript==
// @name         Gmail Hacks for Mailtrack
// @namespace    http://tampermonkey.net/
// @version      0.9
// @description  
// @author       You
// @match        https://mail.google.com/mail/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
	setInterval(function() {
		/* auto click 'remove' signature button */
		var removes = document.getElementsByClassName('mt-remove');

		for( var i = 0; i < removes.length; i++ ) {

			/* clean junk spaces of mailtrack */
			try {
				var $editable = document.getElementsByClassName('editable')[0];
				while( $editable.getElementsByClassName('mt-signature')[0].previousElementSibling != null && $editable.getElementsByClassName('mt-signature')[0].previousElementSibling.tagName == 'BR' ) {
					$editable.getElementsByClassName('mt-signature')[0].previousElementSibling.remove();
				}
			} catch(es){}

			/* remove mailtrack signature */
			removes[i].click();
		}

		/* removes any modal of mailtrack */
		var deletar = [
		document.getElementsByClassName('mt-modal-iframe'),
		document.getElementsByClassName('modal-backdrop'),
		document.querySelectorAll('[id*=intercom], [id=fred]')
		];

		for(var i in deletar) {
			if( deletar[i].length > 0 ) {
				for(var j = 0; j < deletar[i].length; j++) {
					deletar[i][j].remove();
				}
			}
		}
		
	},500);
})();