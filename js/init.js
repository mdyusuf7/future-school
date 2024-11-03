$(function(){
	
	$("#conform").validate({
		rules: {
			name: {
				required: true,
				minlength: 3
			},
			company: {
				required: true
			},
			phone: {
				required: true,
				number: true,
				minlength: 6
			},
			email: {
				required: true,
				email: true
			},
			location: {
				required: true
			},
			city: {
				required: true
			}
		},
		messages: {
			name: {
				required: 'This field is required',
				minlength: 'Minimum length: 3'
			},
			company: {
				required: 'This field is required'
			},
			phone: {
				required: 'This field is required',
				number: 'Invalid phone number',
				minlength: 'Minimum length: 6'
			},
			email: 'Invalid e-mail address',
			location: {
				required: 'This field is required'
			},
			city: {
				required: 'This field is required'
			}
		},
		submitHandler: function (form) {
             var getURL=window.location.origin;     
			  var formData = new FormData($(form)[0]);
			  //$("#SucResMsg").html('<img src="'+getURL+'/assets/global/img/loading-spinner-default.gif"/>');
			  $.ajax({
			   dataType: "json",
			   type: 'post',
			   url: getURL+'/smartppc/BGFutureSchool/sendmail.php',
			   data: formData,
			   async: false,
			   cache: false,
			   contentType: false,
			   processData: false,
			   success: function (responseData) { 
				 if(responseData.res=='ok'){
				
				  $('#cname').val('');
				   $('#email').val('');
				   $('#phone').val('');
					$('#location').val('');
				 $('#city').val('');
				  }
				//$("#SucResMsg").html("Your Request Sent Successfully. We will contact you soon..."); 
				
			   },
			   error: function (responseData) {
				console.log('Ajax request not recieved!');
			   }
			  });
			 return false;
			
			}
		
	});
	
});

/*if (('#conform').valid()){
	var getURL=window.location.origin; alert('ji');
	
      $.ajax({
			  dataType: "json",
			   url: getURL+'/sendmail.php',
			   type: 'POST',
               data : $('#conform').serialize(), 
			   success: function (responseData) {
				 if(responseData.res=='ok'){
				 
				  $('#cperson').val('');
				   $('#email').val('');
				   $('#phone').val('');
					$('#subject').val('');
				 $('#message').val('');
				  }
				//$("#SucResMsg").html("Your Request Sent Successfully. We will contact you soon..."); 
				
			   },
			   error: function (responseData) {
				console.log('Ajax request not recieved!');
			   }
			  });
	  
  }
*//*success: function(label) {
			label.html('OK').removeClass('error').addClass('ok');
			setTimeout(function(){
				label.fadeOut(500);
			}, 2000)
		}*/