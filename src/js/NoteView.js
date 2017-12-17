(function($, app){
  var $memo = $('#memo');

  app.view = {
    addNote: function(event){
      app.data.set($memo.val());

      console.log("저장");
    },
  };
})(jQuery, Note);
