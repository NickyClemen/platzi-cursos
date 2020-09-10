function MediaPlayer(config) {

  this.media = config.el;
  this.plugins = config.plugins || [];

  this._initPlugins();

}

MediaPlayer.prototype._initPlugins = function() {

   const player = {

      play: () => this.play(),
      pause: () => this.pause(),
      media: this.media, 
      get muted() {

         return this.media.muted;

      },
      // Los getters se inicializan con el keyword GET, seguida de la propiedad virtual.

      set muted(value) {

         this.media.muted = value;

      }
      // Los setters se inicializan con el keyword SET, seguida de la propiedad virtual.

   }

   this.plugins.forEach(plugin => {

      plugin.run(this);
      
   });

}

MediaPlayer.prototype.play = function() {

   this.media.play();

}

MediaPlayer.prototype.pause = function() {

   this.media.pause();

}

MediaPlayer.prototype.togglePlay = function() {

   if (this.media.paused){

      this.media.play();

   } else {

      this.media.pause();

   }

}

MediaPlayer.prototype.mute = function() {

   this.media.muted = true;

}

MediaPlayer.prototype.unmute = function() {

   this.media.muted = false;

} 

MediaPlayer.prototype.toggleMute = function() {

  /*  if (this.media.muted) {

      this.unmute();

   } else {

      this.mute();

   } */ 

   (this.media.muted) ? this.unmute() : this.mute();

}

export default MediaPlayer;