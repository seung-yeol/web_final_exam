(function($, global, app){

  var $newnote = $('.btn-newnote');
  var $savenote = $('.btn-savenote');
  var $downloadnote = $('.btn-downloadnote');
  var $fullscreen = $('.btn-fullscreen');
  var $about = $('.btn-about');

  var $memo = $('#memo');
  var $appAbout = $('.app-about');

  $newnote.click( function() {
    $memo.val('');
  });
  $savenote.click( function() {
    app.data.set($memo.val());
  });
  $downloadnote.click( function () {
    app.download.start();
  });
  $fullscreen.click( function() {
    screenfull.request();
  });
  $about.click(function() {
    $appAbout.css('visibility','visible');
    console.log("뭐지");
  });

  //처음 로딩시에 기존에 저장된 데이터 가져와서 보여주기
  var initData = app.util.storage.load();

  if(initData) {
    console.log(initData);
    $memo.val( initData );
  }

})(jQuery, window, Note);
