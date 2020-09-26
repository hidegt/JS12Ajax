// $('#tab-contents .tab[id != "tab1"]').hide();
// $('#tab-menu a').on('click', function(event){
//   $("#tab-contents .tab").hide();
//   $("#tab-menu .active").removeClass("active");
//   $(this).addClass("active");
//   $($(this).attr("href")).show();
//   event.preventDefault();
// });

// JS12
API_KEY = "73c9caffb978d80a3d035cb1b1b2adce";
$(function(){
  $('#btn').on('click', function(){
    // 入力された都市名でWebAPIに天気情報をリクエスト
    // $.ajax()は、Ajaxを実装するメソッド
    $.ajax({
      url: `http://api.openweathermap.org/data/2.5/weather?q=${$('#cityname').val()}&units=metric&appid=73c9caffb978d80a3d035cb1b1b2adce`,dataType: 'jsonp',
    }).done(function (data){
      //通信成功
      $('#place').text(data.name);
      $('#temp_max').text(data.main.temp_maxi);
      $('#temp_min').text(data.main.temp_min);
      $('#humidity').text(data.main.humidity);
      $('#speed').text(data.wind.speed);
      $('#weather').text(data.weather[0].main);
      $('img').attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      $('img').attr("alt",data.weather[0].main);
    }).fail(function (data){
      //通信失敗
      alert('通信に失敗しました。');
    });
  });
});