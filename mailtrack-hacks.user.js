// ==UserScript==
// @name         Gmail Hacks for Mailtrack and Asana
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  
// @author       You
// @match        https://mail.google.com/mail/u/*
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
	setInterval(function() {
		/* auto click 'remove' signature button */
		var removes = document.getElementsByClassName('mt-remove');
		for( var i = 0; i < removes.length; i++ ) {
			removes[i].click();
			
			/* clean junk spaces of mailtrack */
			var $editable = document.getElementsByClassName('editable');
			if($editable.length > 0) {
				if($editable[0].getElementsByClassName('gmail_signature').length == 0) {
					$editable[0].innerHTML = '';
				}
			}
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

		/* remove signature of asana reply */
		var $from = document.querySelectorAll('h3.iw span.gD');
		if($from.length > 0) {
			$from = $from[0].getAttribute('email');
			if( /reply-.+@asana.com/.test($from) ) {
				var $dots = document.querySelectorAll('.aH1');
				if( $dots.length > 0 ) {
					$dots[0].parentNode.click();
					document.getElementsByClassName('editable')[0].innerHTML = '';
				}
			}
		}
		
	},500);
})();