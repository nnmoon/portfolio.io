$(function(){
  
  // /*リサイズには非対応*/
  if(window.innerWidth > 767){
    ["about", "works", "skill"].forEach(function(value){
      let height = $("#" + value + "-box .content-block").css("height");
      $("." + value + "-text").css("height", height);
    });
  };
  

  let col = {
    "button-about": "#about-box",
    "button-works": "#works-box",
    "button-skill": "#skill-box"
  };

	$('.tab').click(function(){
		$('.is-active').removeClass('is-active');
		$(this).addClass('is-active');
		$('.is-show').removeClass('is-show');
    // クリックしたタブと同じインデックス番号をもつコンテンツを表示
    dispcontent(col[$(this).attr("id")]);
	});

  function dispcontent(item){
    $.when(
      $("#about-box, #works-box, #skill-box").fadeOut()
    ).done(function(){
      $(item).fadeIn()
    });
  };

  let k = Object.keys(col);
  for(let i=1; i<k.length; i++){
    $(col[k[i]]).hide();
  };
});


