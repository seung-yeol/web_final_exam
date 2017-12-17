(function(app){
  var download;

  app.download = {
    start: function(){
      var blob = new Blob([app.util.storage.load()], {type: "text/plain;charset=utf-8"});
      saveAs(blob, "note_content.txt");

      console.log("다운로드");
    },
  };
})(Note);
