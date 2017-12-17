(function(app, $){
  var data;

  app.data = {
    set: function(string){
      data = string;

      app.util.storage.save(data);
    },

    toJSON: function() {
      return data;
    },
  };
})(Note, jQuery);
