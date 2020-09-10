import MediaPlayer from '../../MediaPlayer';
import Ads, { Ad } from './Ads';

class AdsPlugin {

    private ads: Ads;
    private player: MediaPlayer;
    private media: HTMLMediaElement; /* Los HTMLMediaElement tienen un evento que se llama TimeUpdate:
    Cada vez que pasa una fracción de segundo, anuncia el cambio de tiempo. Se puede utilizar para diferentes
    acciones. */
    private currentAd: Ad;

    constructor() {

        this.ads = Ads.getInstance();
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);

    }

    run(player: MediaPlayer) {

        this.player = player;
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handleTimeUpdate);

    }

    private handleTimeUpdate() {

        const currentTime = Math.floor(this.media.currentTime);

        if (currentTime % 30 === 0) {

            this.renderAd();

        }

    }

    private renderAd() {

        if (this.currentAd) {

            return;

        }

        const ad = this.ads.getAd();
        this.currentAd = ad;
        console.log(this.currentAd);

    }

}

export default AdsPlugin;