
$(document).ready(function(){
    
    $("#email").keyup(function(){
        if(validateEmail()){
            $("#email").css("border","2px solid green");
            $("#emailMsg").html("<p class='text-success'>Validated</p>");
        }else{
            $("#email").css("border","2px solid red");
            $("#emailMsg").html("<p class='text-danger'>Un-validated</p>");
        }
    });
});

	function validateEmail(){

		let email=$("#email").val();
        
		let reg = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
		 if(reg.test(email)){
		 	return true;
		 }else{
		 	return false;
		 }
}
