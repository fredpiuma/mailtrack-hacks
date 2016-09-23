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
		var removes = document.getElementsByClassName('mt-remove');
		for( var i = 0; i < removes.length; i++ ) {
			removes[i].click();
		}
	},10000);
	setInterval(function() {
		if(document.getElementsByClassName('mt-modal-iframe').length)
			document.getElementsByClassName('mt-modal-iframe')[0].remove(); 
		if(document.getElementsByClassName('modal-backdrop').length)
			document.getElementsByClassName('modal-backdrop')[0].remove(); 
	},1000);
})();
