

$(document).ready(function(){
	$('.slides').bxSlider({
	    slideWidth: 325,
	    minSlides: 1,
	    maxSlides: 1,
	    slideMargin: 0,
	    controls: false ,
	    auto:true  
	  });
	  
	  $(document).on('click', '.find-me ul li.linkedin',function(){
	  	window.open("https://www.linkedin.com/in/kirankumarbali",_blank);
	  });
	  
	  $(document).on('click', '.find-me ul li.fb',function(){
	  	window.open("https://www.facebook.com/kirankumarbali",_blank);
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
});
