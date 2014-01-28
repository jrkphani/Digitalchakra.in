$(document).ready(function() {

	$('#contactSubmit').click(function(e){
		e.preventDefault();
		$('#contact_error').html('');
		postData = $('#contact_form').serialize();
		$.ajax({
			url: baseurl+'/email',
			data:postData,
			dataType:'JSON',
			method:'POST',
			success:function(result){
				error='';
				if(!result.success){
					$.each(result.errors,function(key,value){
						//error += error+'<p>'+index+'</p>';
						$('#contact_error').append('<p class="text-error">'+value+'</p>');
					});
					//alert(result.errors);
				}
				else
				{
					$('#contact_error').html('<p class="text-success">Thank you !</p>');
				}
			},
			error:function(){
				$('#contact_error').html('<p class="text-warning">Internal error please after some time !</p>');
			}
		});
		
	});
});