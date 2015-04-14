/****************************************
			miniStorage.js
		Created by Jo Colina
			@jsmrcaga

			with love
				2015
***************************************/

var miniStorage = {

	local : window.localStorage || "Not supported",
	session: window.sessionStorage || "Not supported",

	getAllKeys : function(){
		var localKeys = [];
		var sessionKeys = [];
		var resKey = "", i = 0 ;
		while(this.local.key(i) != null){
			localKeys.push(this.local.key(i));
			i++;
		}
		i=0;
		while(this.session.key(i) != null){
			sessionKeys.push(this.session.key(i));
			i++;
		}

		return {local: localKeys, session: sessionKeys};

	},

	removeAll : function(){
		var keys = this.getAllKeys();
		for (var i = 0; i< keys.local.length; i++){
			this.local.removeItem(keys.local[i]);
		}
		for (var i = 0; i< keys.session.length; i++){
			this.session.removeItem(keys.local[i]);
		}
	},

	removeAllLocal:function(){
		var keys = this.getAllKeys();
		for (var i = 0; i< keys.local.length; i++){
			this.local.removeItem(keys.local[i]);
		}
	}

	removeAllSession:function(){
		var keys = this.getAllKeys();
		for (var i = 0; i< keys.session.length; i++){
			this.session.removeItem(keys.local[i]);
		}
	}

};

