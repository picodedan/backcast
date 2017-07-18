var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    
    this.render();
    
    this.videos = new Videos(exampleVideoData);
    
    new SearchView({
      el: this.$('.search')
    }).render();

    new VideoPlayerView({
      el: this.$('.player'),
      model: this.videos.at(0),
      collection: this.videos
    }).render();
    
    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render(); 
        
  },


  render: function() {
    this.$el.html(this.template());
    return this.$el;
  },

  template: templateURL('src/templates/app.html')

});
