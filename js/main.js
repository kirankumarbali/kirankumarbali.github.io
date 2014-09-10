
function showAnim(x) {
    $('#animText').removeClass().css('visibility','visible').addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass();
    });
};
function hideAnim(x) {
    $('#animText').removeClass().show().addClass(x + ' animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).css('visibility','hidden').removeClass();
    });
};


$(document).ready(function(){
	$('.slides').bxSlider({
	    slideWidth: 325,
	    minSlides: 1,
	    maxSlides: 1,
	    slideMargin: 0,
	    controls: false ,
	    auto:true  
	  });
	  
	  $('.mobile,.email').mouseenter(function(){
	  	$("#animText").text($(this).attr('data-title'));
	  	showAnim('lightSpeedIn');
	  });
	  $('.mobile,.email').mouseleave(function(){
	  	$("#animText").css('visibility','hidden').removeClass();
	  });
	  
	  $(document).on('click','#me .card-cover',function(){
	  		var $this = $(this).parents('.card:first');
	  		var $active = $('.card.active');
	  		var $cover = $this.find('.card-cover');
	  		var $main = $this.find('.card-active-content');
	  		var $activeCover = $active.find('.card-cover');
	  		var $activeMain = $active.find('.card-active-content');
	  		var $edu = $('#edu');
	  		var $skills = $('#skills');
	  		var $projects = $('#projects');
	  		var $contact = $('#contact');
	  		$this.addClass('active');
	  		$active.removeClass('active');
	  		
	  		$activeCover.animate({left:"0px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$activeMain.animate({left:"155px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$cover.animate({left:"-200px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$main.animate({left:"50px"},{duration:500,easing:"easeOutQuad",queue:false}); 
	  		
	  		$edu.animate({marginLeft:"400px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$skills.animate({marginLeft:"550px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$projects.animate({marginLeft:"700px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$contact.animate({marginLeft:"850px"},{duration:500,easing:"easeOutQuad",queue:false});
	  });
	  
	  $(document).on('click','#edu .card-cover',function(){
	  		var $this = $(this).parents('.card:first');
	  		var $active = $('.card.active');
	  		var $cover = $this.find('.card-cover');
	  		var $main = $this.find('.card-active-content');
	  		var $activeCover = $active.find('.card-cover');
	  		var $activeMain = $active.find('.card-active-content');
	  		var $edu = $('#edu');
	  		var $skills = $('#skills');
	  		var $projects = $('#projects');
	  		var $contact = $('#contact');
	  		$this.addClass('active');
	  		$active.removeClass('active');
	  		$activeCover.animate({left:"0px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$activeMain.animate({left:"155px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$cover.animate({left:"-200px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$main.animate({left:"50px"},{duration:500,easing:"easeOutQuad",queue:false}); 
	  		$edu.animate({marginLeft:"150px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$skills.animate({marginLeft:"550px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$projects.animate({marginLeft:"700px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$contact.animate({marginLeft:"850px"},{duration:500,easing:"easeOutQuad",queue:false});
	  });
	  
	  $(document).on('click','#skills .card-cover',function(){
	  		var $this = $(this).parents('.card:first');
	  		var $active = $('.card.active');
	  		var $cover = $this.find('.card-cover');
	  		var $main = $this.find('.card-active-content');
	  		var $activeCover = $active.find('.card-cover');
	  		var $activeMain = $active.find('.card-active-content');
	  		var $edu = $('#edu');
	  		var $skills = $('#skills');
	  		var $projects = $('#projects');
	  		var $contact = $('#contact');
	  		$this.addClass('active');
	  		$active.removeClass('active');
	  		$activeCover.animate({left:"0px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$activeMain.animate({left:"155px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$cover.animate({left:"-200px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$main.animate({left:"50px"},{duration:500,easing:"easeOutQuad",queue:false}); 
	  		$edu.animate({marginLeft:"150px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$skills.animate({marginLeft:"300px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$projects.animate({marginLeft:"700px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$contact.animate({marginLeft:"850px"},{duration:500,easing:"easeOutQuad",queue:false});
	  });
	  
	  $(document).on('click','#projects .card-cover',function(){
	  		var $this = $(this).parents('.card:first');
	  		var $active = $('.card.active');
	  		var $cover = $this.find('.card-cover');
	  		var $main = $this.find('.card-active-content');
	  		var $activeCover = $active.find('.card-cover');
	  		var $activeMain = $active.find('.card-active-content');
	  		var $edu = $('#edu');
	  		var $skills = $('#skills');
	  		var $projects = $('#projects');
	  		var $contact = $('#contact');
	  		$this.addClass('active');
	  		$active.removeClass('active');
	  		$activeCover.animate({left:"0px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$activeMain.animate({left:"155px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$cover.animate({left:"-200px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$main.animate({left:"50px"},{duration:500,easing:"easeOutQuad",queue:false}); 
	  		$edu.animate({marginLeft:"150px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$skills.animate({marginLeft:"300px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$projects.animate({marginLeft:"450px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$contact.animate({marginLeft:"850px"},{duration:500,easing:"easeOutQuad",queue:false});
	  });
	  
	  $(document).on('click','#contact .card-cover',function(){
	  		var $this = $(this).parents('.card:first');
	  		var $active = $('.card.active');
	  		var $cover = $this.find('.card-cover');
	  		var $main = $this.find('.card-active-content');
	  		var $activeCover = $active.find('.card-cover');
	  		var $activeMain = $active.find('.card-active-content');
	  		var $edu = $('#edu');
	  		var $skills = $('#skills');
	  		var $projects = $('#projects');
	  		var $contact = $('#contact');
	  		$this.addClass('active');
	  		$active.removeClass('active');
	  		$activeCover.animate({left:"0px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$activeMain.animate({left:"155px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$cover.animate({left:"-200px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$main.animate({left:"50px"},{duration:500,easing:"easeOutQuad",queue:false}); 
	  		$edu.animate({marginLeft:"150px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$skills.animate({marginLeft:"300px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$projects.animate({marginLeft:"450px"},{duration:500,easing:"easeOutQuad",queue:false});
	  		$contact.animate({marginLeft:"600px"},{duration:500,easing:"easeOutQuad",queue:false});
	  });
	  
	  $(document).on('click','.send-msg',function(){
	  		var msg = $.trim($('#msg-box').val());
	  		var name = $.trim($('#name-box').val());
	  		if(msg!=""){
	  			$('#contact-box').addClass('mask');
				$('#loading-box').show();
	  			$.ajax({
				  dataType: 'jsonp',
				  url: "http://getsimpleform.com/messages/ajax?form_api_token=f866fff55c50a425e14e2b4007fc2c73",
				  data: {
				    name: name,
				    message: msg,
				  }
				}).done(function() {
				  //callback which can be used to show a thank you message
				  //and reset the form
				  $('#contact-box').removeClass('mask');
				  $('#msg-box,#name-box').val("");
				  $('#loading-box').hide();
				  alert("Thank you, I have received your message, will reply soon.");
				});
	  		}else{
	  			alert("Please enter a valid message.");
	  		}
	  		
	  });
});
