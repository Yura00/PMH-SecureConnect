/**
 * All header code from chat login moved here
 */
var domain="";
var userIdHeader="";
var authToken="";
var secretKey="";
var exchangeId="";
$(document).keypress(function(e) {
	if (e.which == 13) {
		loginValidation();
	}
});
jQuery(document).ready(function($) {
	
	if (!Array.from) {
		  Array.from = (function () {
		    var toStr = Object.prototype.toString;
		    var isCallable = function (fn) {
		      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
		    };
		    var toInteger = function (value) {
		      var number = Number(value);
		      if (isNaN(number)) { return 0; }
		      if (number === 0 || !isFinite(number)) { return number; }
		      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
		    };
		    var maxSafeInteger = Math.pow(2, 53) - 1;
		    var toLength = function (value) {
		      var len = toInteger(value);
		      return Math.min(Math.max(len, 0), maxSafeInteger);
		    };

		    // The length property of the from method is 1.
		    return function from(arrayLike/*, mapFn, thisArg */) {
		      // 1. Let C be the this value.
		      var C = this;

		      // 2. Let items be ToObject(arrayLike).
		      var items = Object(arrayLike);

		      // 3. ReturnIfAbrupt(items).
		      if (arrayLike == null) {
		        throw new TypeError("Array.from requires an array-like object - not null or undefined");
		      }

		      // 4. If mapfn is undefined, then let mapping be false.
		      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
		      var T;
		      if (typeof mapFn !== 'undefined') {
		        // 5. else
		        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
		        if (!isCallable(mapFn)) {
		          throw new TypeError('Array.from: when provided, the second argument must be a function');
		        }

		        // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
		        if (arguments.length > 2) {
		          T = arguments[2];
		        }
		      }

		      // 10. Let lenValue be Get(items, "length").
		      // 11. Let len be ToLength(lenValue).
		      var len = toLength(items.length);

		      // 13. If IsConstructor(C) is true, then
		      // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
		      // 14. a. Else, Let A be ArrayCreate(len).
		      var A = isCallable(C) ? Object(new C(len)) : new Array(len);

		      // 16. Let k be 0.
		      var k = 0;
		      // 17. Repeat, while k < len… (also steps a - h)
		      var kValue;
		      while (k < len) {
		        kValue = items[k];
		        if (mapFn) {
		          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
		        } else {
		          A[k] = kValue;
		        }
		        k += 1;
		      }
		      // 18. Let putStatus be Put(A, "length", len, true).
		      A.length = len;
		      // 20. Return A.
		      return A;
		    };
		  }());
		}
	
	var input = ck.split('');
		
	ck = input.reverse().join("");
	
	$("#login").attr('autocomplete', 'off');
	$('input, :input').attr('autocomplete', 'off');
	// Reveal Login form
	setTimeout(function() {
		$(".fade-in-effect").addClass('in');
	}, 1);
	// Set Form focus
	$("form#login .form-group:has(.form-control):first .form-control").focus();
		
	var restAjaxOptions = {
		beforeSend : function(xhr) {
			xhr.setRequestHeader("schemaName", domain);		
			xhr.setRequestHeader("X-User-Id", userIdHeader);
			xhr.setRequestHeader("X-Auth-Token", authToken);
			xhr.setRequestHeader("X-Exchange-Id", exchangeId);
		},
		error : function(jqXHR, textStatus, errorThrown) {
		}
	};	

	client = new $.RestClient(contextPath + '/');
	client.add('authenticateUser', {
		ajax : restAjaxOptions
	});

	client.add('closeOtherSession', {
		ajax : restAjaxOptions
	});
	
	/*client.add("captcha",{
		ajax: restAjaxOptions
	 });*/
	
	client.add("removeToken",{
		ajax: restAjaxOptions
	 });
	
	//captchaImage();

	$("#displayConfirmOkBtn").on("click", function(event, data) {
		event.stopPropagation();
		$("#displayConfirmModal").modal('hide');	
		var user = $("#username").val();	
		client.closeOtherSession.read({
			"userId" : user.toLowerCase().trim(),
			"loginFrom" : 1
		}).done(function(data) {
			if (!data.errorCode) {
				loginValidation();
			} else {
				$("#msgDivId").text(data.message);
			}
		});

	});
	
	$("#displayConfirmNoBtn").on("click", function(event, data) {
		event.stopPropagation();
		$("#displayConfirmModal").modal('hide');		
		client.removeToken.read().done(function(data) {
			if (data.errorCode) {
				$("#msgDivId").text(data.message);
			} 
		});

	});
});
function signup() {
	var path = contextPath + "/home";
	path = encodeURIComponent(path);
	var url = "${zyterWebUrl}/signup?chatHome=" + path
	$(location).attr("href", url);
}
function forgotPassword() {
	var path = contextPath + "/home";
	path = encodeURIComponent(path);
	var url = "${zyterWebUrl}/forgotPassword?chatHome=" + path
	$(location).attr("href", url);
}
function loginValidation() {
	$("#userNameErr").text("");
	$("#passwordErr").text("");
	$("#msgDivId").text("");
	// alert("test");
	var user = $("#username").val();
	var pass = $("#zyterpwd").val();
	/*var captcha = $("#captcha").val();
	var captchString = $("#captchaString").val();
	var captchaId = $("#captchaId").val();*/

	if (user.trim() == null || user.trim() == "") {
		$("#userNameErr").text("Please enter your username");
		$("#username").focus();
	} else if (pass.trim() == null || pass.trim() == "") {
		$("#passwordErr").text("Please enter your password");
		$("#zyterpwd").focus();
	} else if (user.indexOf("\\") >= 0) {
		$("#userNameErr").text("Invalid username");
		$("#username").focus();
	}
	/*else if (captcha == null || captcha == "") {
	$("#captchaErr").text("Please enter captcha");
	$("#captcha").focus();
	}else if (captcha.localeCompare(captchString)!=0) {				
	$("#captchaErr").text("Entered Captcha is incorrect");
	$("#captcha").focus();
	}*/
	else {
		 $("#loginID").prop('disabled', true);
		$("#userNameErr,#passwordErr,#captchaErr").text('');
		var userId = $("#username").val();		
		
		/*if(userId.indexOf("\\") < 0){
			$("#msgDivId").text("Username is incorrect");
			return;
		}
		
		var arr = userId.split("\\");
		
		if(arr.length!=2){
			$("#msgDivId").text("Username is incorrect");
			return;
		}
		
		if(arr[0].trim()=="" || arr[1].trim()==''){
			$("#msgDivId").text("Username is incorrect");
			return;
		}*/
		
		/*if(arr[1].length<6){
			$("#msgDivId").text("Username should be 6 or more characters.");
			return;
		}*/
		
		//domain = ((userId.split("\\"))[0]).toLowerCase();
       var tmLoc =  new Date();
       var parsedDate = tmLoc.getTime();

        if(eccEnabled === 'true'){
        performKeyExchange(userId,pass,parsedDate);
	    }
        else{
        	//authenticateUser(userId,pass,parsedDate,captcha,captchaId);
        	authenticateUser(userId,pass,parsedDate,'','');
        }
	   
	
	}
}

function toHexString(byteArray) {
	return Array.from(byteArray, function(byte1) {
		return ('0' + (byte1 & 0xFF).toString(16)).slice(-2);
	}).join('')
}

function displayDialog(title, errorMsg, errorHtml) {

	/*
	 * var modal = $('#displayConfirmModal');
	 * 
	 * modal.find('.modal-title').text(title); if(errorHtml){
	 * modal.find('.modal-body').html(errorHtml); } else{
	 * modal.find('.modal-body').text(errorMsg); }
	 */

	$('#displayConfirmModal').modal('show');

}

/*function captchaImage() {	
	client.captcha.read().done(function(data){
		if(!data.errorCode){
			$('#captchaImgId').text(data.captchString);
			$('#captchaId').val(data.captchaId);
			$('#captchaString').val(data.captchString);			
		}
		else{
			$("#forgotpwdIdSucc").text("An error while loading captcha image");
		}
	});	
}*/
 function encryptMsg(chatMsg) {
	// var secretKey = "infinite";
	var options = {};

	var bits = sjcl.codec.utf8String.toBits(chatMsg);

	var encrypted = RNCryptor.Encrypt(secretKey, bits, options);

	var encoded_string = sjcl.codec.base64.fromBits(encrypted);

	return encoded_string;
} function performKeyExchange(userId,pass,parsedDate,captcha,captchaId){
	 var continueVal=true;
	 
	 var ec = new elliptic.ec('secp256k1');
	 var keyPair;
	 var pubPoint;
	 var x,y;
	 do{
		 keyPair = ec.genKeyPair();
		 pubPoint = keyPair.getPublic();
		 
		 x = pubPoint.getX().toString('hex');
		 y = pubPoint.getY().toString('hex');
		 
		 if(x.length==64 && y.length==64){
			 continueVal = false;
		 }
		 
	 }while(continueVal);	 
	 
	 var hash = sha256.create();
	 hash.update("04"+x+y);
	 var bits = hash.hex();
	 var ec = new elliptic.ec('secp256k1');

	 var clientKey = ec.keyFromPrivate(ck, 'hex');
	 var signature = clientKey.sign(bits);

	 var derSign = signature.toDER();

	 var temp = toHexString(derSign);
	 	 
	 var input = {
			 "point":"04"+x+y,
			 "curve":"secp256k1",
			 "type":1,
			 "authentication":true,
			 "signature":temp
	};
	 
	 $.ajax({
		 url: contextPath+"/performKeyExchange",
		  type: 'POST',
		  contentType:"application/json",
		  data:JSON.stringify(input)		 
	  }).done(function(data) {
		  if(data.errorCode){
				 $("#msgDivId").text("Error occured");
				 $("#loginID").prop('disabled', false);
			 }
			 else{
				 
				 var signMessage = ""+data.x+data.y+data.exchangeId+data.base64;
				 
				 var hash = sha256.create();
				 hash.update(signMessage);
				 var msgHash = hash.hex();				 
				 
				 var verifyKey = ec.keyFromPublic(sk, 'hex');
				 
				 if(!verifyKey.verify(msgHash,data.signature)){
					 
					 $("#msgDivId").text("Signature verification failed");
					 $("#loginID").prop('disabled', false);
					 return;
				 }
				 
				 var serverKey = "04"+data.x+data.y;
				 exchangeId = data.exchangeId;
				 var key = ec.keyFromPublic(serverKey, 'hex');
				 secretKey = keyPair.derive(key.getPublic()).toString("hex");				 				
				 
				 if(secretKey.length!=64){
					 var len = secretKey.length - 64;
					 if(len < 0){
						 var iter = 0 - len;
						 
						 for(i=0;i<iter;i++){
							 secretKey = "0"+secretKey;
						 }
					 }
					 else if(len > 0){
						 iter = len;
						 for(i=0;i<iter;i++){
							 secretKey = secretKey.substring(1);
						 }
					 }
				 }
				// authenticateUser(userId,pass,parsedDate,captcha,captchaId);
				 authenticateUser(userId,pass,parsedDate,'','');
			 }
	  });
	 /*client.performKeyExchange.create(input).done(function(data, textStatus, xhrObject) {
		 if(!data.errorCode){
			 $("#msgDivId").text("Error occured");
		 }
		 else{
			 var serverKey = "04"+data.x+data.y;
			 exchangeId = data.exchangeId;
			 var key = ec.keyFromPublic(serverkey, 'hex');
			 secretKey = keyPair.derive(key.getPublic()).toString("hex");
			 captchaImage();
		 }
	 });*/	 
 }
 
 function authenticateUser(userId,pass,parsedDate,captcha,captchaId){
	 if(eccEnabled === 'true'){
 		 pass =  encryptMsg(pass);
 	 }
	 var request = client.authenticateUser.create({
		 "userId" : userId.toLowerCase().trim(),
		 "userPwd" : pass,
		 "loginFrom" : 1,
		 "loginTime" : parsedDate.toString()
		 /*"captcha":captcha,
		 "captchaId":captchaId*/
	 });
	 request
	 .done(function(data, textStatus, xhrObject) {

		 if (data.message == "Login count exceeded") {
			 $("#loginID").prop('disabled', false);
			 userIdHeader = userId.toLowerCase().trim();
			 authToken = data.authToken;
			 domain = data.domain;
			 
			 $("#displayConfirmOkBtn").trigger("click");
			 
			/* displayDialog(
					 "Multiple login",
			 "User is already logged in, do you want to close the logged in session and continue.");*/
			 
		 } else if(data.message == "Same browser login"){
			 $("#loginID").prop('disabled', false);
			 window.location.href = contextPath+'/alreadyLogin';
		 } else if (data.errorCode == "404 Not Found"
			 || data.errorCode == "412") {
			 $("#captcha").val("");
			 $("#captchaId").val("");
			 $("#captchaString").val("");
			 $("#msgDivId").text(data.message);
			 $("#loginID").prop('disabled', false);
			 //captchaImage();
		 }

		 else if (data["domainFeatures"].indexOf("EHR_INTEGRATION") > -1  && data.userCategory == 'patient') {
			 $("#msgDivId").text("Patient login not allowed");
			 $("#loginID").prop('disabled', false);
		 }

		 else {
			 $(location).attr("href", "chat");
		 }
	 });
 }