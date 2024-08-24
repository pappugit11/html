$(document).ready(function(){

var current_fs, next_fs, previous_fs; //fieldsets
var opacity;
var current = 1;
var steps = $("fieldset").length;

setProgressBar(current);

$(".next").click(function(){

            current_fs = $(this).parent();
            next_fs = $(this).parent().next();

            var form = $("#msform");
				form.validate({
					errorElement: 'span',
					errorClass: 'help-block',
					highlight: function(element, errorClass, validClass) {
						$(element).closest('.form-group').addClass("has-error");
					},
					unhighlight: function(element, errorClass, validClass) {
						$(element).closest('.form-group').removeClass("has-error");
					},
					// rules: {
					// 	uname: {
					// 		required: false,
					// 		usernameRegex: false,
					// 		minlength: 6,
					// 	},
					// 	pwd : {
					// 		required: false,
					// 	},
					// 	cpwd : {
					// 		required: false,
					// 		// equalTo: '#password',
					// 	},
					// 	company:{
					// 		required: false,
					// 	},
					// 	url:{
					// 		required: false,
					// 	},
					// 	name: {
					// 		required: false,
					// 		minlength: 3,
					// 	},
					// 	email: {
					// 		required: false,
					// 		minlength: 3,
					// 	},
						
					// },
					// messages: {
					// 	uname: {
					// 		required: "Username required",
					// 	},
					// 	pwd : {
					// 		required: "Password required",
					// 	},
					// 	cpwd : {
					// 		required: "Password required",
					// 		equalTo: "Password don't match",
					// 	},
					// 	name: {
					// 		required: "Name required",
					// 	},
					// 	email: {
					// 		required: "Email required",
					// 	},
					// }
				});
				if (form.valid() === true){
					
                    //show the next fieldset
                    next_fs.show();
                    //hide the current fieldset with style
                    current_fs.animate({opacity: 0}, {
                    step: function(now) {
                    // for making fielset appear animation
                    opacity = 1 - now;

                    current_fs.css({
                    'display': 'none',
                    'position': 'relative'
                    });
                    next_fs.css({'opacity': opacity});
                    },
                    duration: 500
                    });
                    setProgressBar(++current);

				}

});




$(".previous").click(function(){

current_fs = $(this).parent();
previous_fs = $(this).parent().prev();


//show the previous fieldset
previous_fs.show();

//hide the current fieldset with style
current_fs.animate({opacity: 0}, {
step: function(now) {
// for making fielset appear animation
opacity = 1 - now;

current_fs.css({
'display': 'none',
'position': 'relative'
});
previous_fs.css({'opacity': opacity});
},
duration: 500
});
setProgressBar(--current);
});

function setProgressBar(curStep){
var percent = parseFloat(100 / steps) * curStep;
$(".progress-digit").text(Math.floor(percent) + "%");
percent = percent.toFixed();
$(".progress-bar")
.css("width",percent+"%")
}

$(".submit").click(function(){
return false;
})

});