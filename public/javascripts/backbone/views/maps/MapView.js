var Haystack = Haystack || { Models: {}, Collections: {}, Views: {} };

Haystack.Views.MapView = Backbone.View.extend({
  initialize: function(){
    // this.listenTo( this.model, "change", this.render );
    // this.listenTo( this.model, "destroy", this.remove );
  },


    tagName: "li",
    template: _.template( $("#map_list_template").html() ),
    displayTemplate: _.template( $(".map_list_display_template").html() ),
    editMapNameTemplate: _.template( $(".edit_map_template").html() ),
    render: function(){
      this.$el.empty();
      this.$el.html( this.template(this.model.attributes) );
      return this
    },

    events: {
      "click .map_name" : "displayListMap",
      "click .edit_map_name" : "editMapName",
      'click [data-action="destroy"]': 'removeMap'
    },

    displayListMap: function(){
      var self = this;
      console.log(self.$el.children().find(".map_display_canvas"));
      this.$el.html( this.displayTemplate( this.model.attributes ) );
      this.$el.siblings().children().find( '.map_display_canvas' ).hide();
      // self.$el.siblings().children().find('.map_display_canvas').hide();
      // self.$el.children().show();
      var lat = this.model.attributes.map_lat;
      var lng = this.model.attributes.map_long;
      var latlng = new google.maps.LatLng(lat, lng);
       console.log(latlng);
      var mapOptions = {
        zoom: 10,
        center: latlng
      };
      var map = new google.maps.Map($("#map_display_canvas")[0], mapOptions);
      function createMarker(location) {
        var marker = new google.maps.Marker({
        position: location,
        map: map
      });
        console.log(marker);
        console.log(location.lat());
        var pinModel = new Haystack.Models.Pin();
        pinModel.save({ name: "pin", pin_lat: location.lat(), pin_long: location.lng(), map_id: 1 })
      }

    google.maps.event.addListener(map, 'click', function(event) {
      createMarker(event.latLng);
    });

      },

    editMapName: function(){
      var self = this;
      this.$el.html( this.editMapNameTemplate( this.model.attributes ) );
      this.$el.find('form').on('submit', function(e){
          e.preventDefault();
          var editField = self.$el.find('input');
          var MapNameEdit = editField.val();
          self.model.save({ name: MapNameEdit })
        })

      this.$el.find('button').on('click', function(e){
        e.preventDefault();
        self.displayListMap();
      })
      return this
    },

    removeMap: function(e){
      e.preventDefault();
      this.model.destroy();
      return this
    },

    renderCurrentLocation: function(map_name){
      var self = this;

      var mapOptions = {
        zoom: 10
      };

      var map = new google.maps.Map(this.el,
          mapOptions);
      console.log(map);
      var mapModel = new Haystack.Models.Map();

      // Try HTML5 geolocation
        navigator.geolocation.getCurrentPosition(function(position) {
          var pos = new google.maps.LatLng(position.coords.latitude,
                                           position.coords.longitude);
          map.setCenter(pos);

          mapModel.save( { name: map_name, creator_id: 1, owner_id: 1, map_lat: pos.lat(), map_long: pos.lng() } )

          console.log(pos.lng());
          console.log(mapModel);
        });

        function createMarker(location) {
          var marker = new google.maps.Marker({
          position: location,
          map: map
          });
          console.log(marker);
          console.log(location.lat());
          var pinModel = new Haystack.Models.Pin();
          pinModel.save({ name: "pin", pin_lat: location.lat(), pin_long: location.lng(), map_id: 1 })
        }

        google.maps.event.addListener(map, 'click', function(event) {
          createMarker(event.latLng);
        });

      return this;

    }

});
