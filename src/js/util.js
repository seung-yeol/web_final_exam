(function(app) {
  app.util = {
    uniqId: function() {
      return new Date().getTime();
    },
    storage : {
      load: function () {
        console.log('storage.load()');
        return JSON.parse(localStorage.getItem(app.storageKey) || "[]");
      },
      save: function (data) {
        console.log('storage.save()');
        localStorage.setItem(app.storageKey, JSON.stringify(data));
      }
    }
  };

  app.$wrap.on('addNote', app.util.storage.save);
  app.$wrap.on('removeNote', app.util.storage.save);

})(Note);
