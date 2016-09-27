// ==UserScript==
// @name         Gmail Remover Assinatura Mailtrack
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
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
		}

		/* removes any modal of mailtrack */
		var deletar = [];
		if(document.getElementsByClassName('mt-modal-iframe').length) deletar = deletar.concat( document.getElementsByClassName('mt-modal-iframe') );
		if(document.getElementsByClassName('modal-backdrop').length) deletar = deletar.concat( document.getElementsByClassName('modal-backdrop') );
		if(document.querySelectorAll('[id*=intercom], [id=fred]').length) deletar = deletar.concat( document.querySelectorAll('[id*=intercom], [id=fred]') );

		for(var i = 0; deletar.length; i++) {
			deletar[i].remove();
		}
		
	},1000);
})();
