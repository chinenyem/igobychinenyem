$(document).ready(function(){

$(function() {
    function moveFloatMenu() {
        var menuOffset = menuYloc.top + $(this).scrollTop() + "px";
        $('#sectionicons').animate({
            top: menuOffset
        }, {
            duration: 400,
            queue: false
        });
    }

    menuYloc = $('#sectionicons').offset();

    $(window).scroll(moveFloatMenu);

    moveFloatMenu();
});


// hide #back-top first
      // 
	$(".sectionicons .icon i .fontawesome-arrow-up").hide();
	
	// fade in #back-top
	$(function () {
		$(window).scroll(function () {
			if ($(this).scrollTop() > 100) {
				$("li .fontawesome-arrow-up").fadeIn();
			} else {
				$("li .fontawesome-arrow-up").fadeOut();
			}
		});

		// scroll body to 0px on click
		$(" a .fontawesome-arrow-up").click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 'slow');
			return false;
		});
	});

	/*-----------------------------------------------------------------------------------*/
	/*	 Wordpress
	/*-----------------------------------------------------------------------------------*/

	jQuery(function($) {
    $.getJSON('http://public-api.wordpress.com/rest/v1/sites/chinenyemnwadiugwu.wordpress.com/posts/?number=3order=DESC&callback=?')
        .success(function(response) {

        	//content
            var $content = "",
                 it = response.posts[0].content,
                 hcontentone = response.posts[1].content,
                 hfcontenttwo = response.posts[2].content;

	             // console.log(hcontentone, hfcontenttwo, $content );
	             // console.log( "this" + it);

	             $("#articleone").click(function(){
	             	event.preventDefault();

                    // console.log(it);

                     

                    $("#articleone").replaceWith('<article>' + '<div class="container two">' + '<div class="row">' + 
	             	               '<div class ="col-md-12">' + '<p class="blogone">' +  '</p>' + '</div>' + '</div>' +
	             	               '</div>' +  '</article>');

                   var hideBlog = $(".blogone").hide();
                   var blog = $(".blogone").html(it);
                   var blogText = blog.text();

                   if(blogText.length > 100){
                   	blogText = blogText.substring(0,500);
                   	$(".blogone").text(blogText + "..." );
                   	
                   	$("<a id='hrefone' href='#'>" + "READ MORE" + "</a>").appendTo(".two");

                   	$(".blogone").css({"color": "black", "font-weight": "bold", "font-size": "21px"});
                     $("a #imgx").css({"margin-left": "95%", "position": "absolute", "margin-top": "-3%", "height" : "22px"});
                   } 

                   
                       hideBlog.fadeIn(900);

                       $("#hrefone")
                                 .attr('href', response.posts[0].URL);
  
	             });


                 
                 $("#articletwo").click(function(){
	             	event.preventDefault();

                    // console.log(hcontentone);

                     

                    $("#articletwo").replaceWith('<article>' + '<div class="container three">' + '<div class="row">' + 
	             	               '<div class ="col-md-12">' + '<p class="blogtwo">' +  '</p>' + '</div>' + '</div>' +
	             	               '</div>' +  '</article>');

                   var hideBlog = $(".blogtwo").hide();
                   var blog = $(".blogtwo").html(hcontentone);
                   var blogText = blog.text();

                   if(blogText.length > 100){
                   	blogText = blogText.substring(0,500);
                   	$(".blogtwo").text(blogText + "..." );
                   	
                   	$("<a id='hreftwo' href='#'>" + "READ MORE" + "</a>").appendTo(".three");

                   	$(".blogtwo").css({"color": "black", "font-weight": "bold", "font-size": "21px"});
                     $("a #imgx").css({"margin-left": "95%", "position": "absolute", "margin-top": "-3%", "height" : "22px"});
                   } 

                   
                        hideBlog.fadeIn(900);

                       $("#hreftwo")
                                 .attr('href', response.posts[1].URL);
  
	             });

                $("#articlethree").click(function(){
	             	event.preventDefault();

                    // console.log(hfcontenttwo);

                     

                    $("#articlethree").replaceWith('<article>' + '<div class="container four">' + '<div class="row">' + 
	             	               '<div class ="col-md-12">' + '<p class="blogthree">' +  '</p>' + '</div>' + '</div>' +
	             	               '</div>' +  '</article>');

                   var hideBlog = $(".blogthree").hide();
                   var blog = $(".blogthree").html(hfcontenttwo);
                   var blogText = blog.text();

                   if(blogText.length > 100){
                   	blogText = blogText.substring(0,500);
                   	$(".blogthree").text(blogText + "..." );
                   	
                   	$("<a id='hrefthree' href='#'>" + "READ MORE" + "</a>").appendTo(".four");

                   	$(".blogthree").css({"color": "black", "font-weight": "bold", "font-size": "21px"});
                     $("a #imgx").css({"margin-left": "95%", "position": "absolute", "margin-top": "-3%", "height" : "22px"});
                   } 

                   
                        hideBlog.fadeIn(900);

                       $("#hrefthree")
                                 .attr('href', response.posts[2].URL);
  
	             });
                        
                     

                      


        

           //date info 
            var dateStr = response.posts[0].date,
                dateStrone = response.posts[1].date,
                dateStrtwo = response.posts[2].date;

            // console.log(dateStr);
            
             var date = new Date(dateStr),
                dateO = new Date(dateStrone),
                dateT = new Date(dateStrtwo);

            // console.log(date);
            
               var day = date.getDay(),
                dayOne = dateO.getDay(),
                dayTwo = dateT.getDay(),

                month = date.getMonth(),
                monthOne = dateO.getMonth(),
                monthTwo = dateT.getMonth(),

                year = date.getFullYear(),
                yearOne = dateO.getFullYear(),
                yearTwo = dateT.getFullYear(),
            
                monthNames = ["January", "February", "March", "April", "May", "June",
              "July", "August", "September", "October", "November", "December"
               ],
            
                monthWord = monthNames[month],
                monthWordOne =monthNames[monthOne], 
                monthWordTwo = monthNames[monthTwo];
            
               var fullDate = monthWord  + " " + day + "," + " " + " " + year,
                fullDateOne = monthWordOne + " " + dayOne + "," + " " + yearOne,
                fullDateTwo = monthWordTwo + " " + dayTwo + "," + " " + yearTwo;
            
            $("#dateone").text(fullDate);
            $("#datetwo").text(fullDateOne);
            $("#datethree").text(fullDateTwo);


            //author info

            var author = response.posts[0].author.name,
                authorone = response.posts[1].author.name,
                authortwo = response.posts[2].author.name;
             
            var capitalizeMe = author,
                capitalizeMeOne = authorone,
                capitalizeMeTwo	 = authortwo;
            
            var authorCap = capitalizeMe.charAt(0).toUpperCase() + capitalizeMe.substring(1),
                authorCapOne = capitalizeMeOne.charAt(0).toUpperCase() + capitalizeMeOne.substring(1),
 				authorCapTwo = capitalizeMeTwo.charAt(0).toUpperCase() + capitalizeMeTwo.substring(1);
            
            $("#authorone").text(authorCap);
            $("#authortwo").text(authorCapOne);
            $("#authorthree").text(authorCapTwo);

            //title

             $('#titleone')
                .html(response.posts[0].title);
             $("#titletwo")
                .html(response.posts[1].title);
             $("#titlethree")
                .html(response.posts[2].title); 

             $("#hrefone")
                .attr('href', response.posts[0].URL);
               $("#hreftwo")
                 .attr('href', response.posts[1].URL);
              $("#hrefthree")
                   .attr('href', response.posts[2].URL);
        });

     
       });

   /*-----------------------------------------------------------------------------------*/
	/*	 Tumblr
	/*-----------------------------------------------------------------------------------*/
      
    //do a get request with simple ajax call
        $.ajax({
            url: "http://api.tumblr.com/v2/blog/modeststreetfashion.com/posts?api_key=sgrUpoEPI0N23EodfI92rWbVgAcWNxEoU00rZJ5zdCZRNCHDrR",
            dataType: 'jsonp',
            success: function(posts){
             //The first thing we want is the posts object that is inside the response object, which we’ll assign to a variable
             var postings = posts.response.posts;
             //create an empty string variable that we can populate later
             var text ='';
             //we need a loop to iterate through the objects inside our postings variable’s data:
             for (var i in postings) {
              var p = postings[i];
                   text += '<li><img class="lazy" id="tumbimg" src=' + p.photos[0].original_size.url +'>' +'</a></li> '+ '<br>'
                 }

               //append the text to an unordered list for display purposes:
               $('#tumblr').append(text);

               

            }


        });
        


        /*-----------------------------------------------------------------------------------*/
  /*   Twitter
  /*-----------------------------------------------------------------------------------*/
        
     //var screen_name = document.getElementsByName("screen_name")[0].value;
$.getJSON("https://api.twitter.com/1/statuses/user_timeline.json?screen_name=VADmoda&count=10&callback=?",
  function(data) {
    $("#twitter").html("");
    $.each(data, function(i,item){
      $("<p />").html(item.text).appendTo("#twitter");
      if ( i == 10 ) return false;
    });
  });








       });
      

    
  

	