import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

/**
 * Generated class for the RadioPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

import { RadioPlayersProvider } from '../../providers/radio-players/radio-players';

@IonicPage()
@Component({
  selector: 'page-radio',
  templateUrl: 'radio.html',
})
export class RadioPage {


  player: any;
  public playing: boolean;
  constructor(public navCtrl: NavController, player: RadioPlayersProvider) {
    this.player = player;
    this.playing = false;
  }
  play() {
    this.player.play().then(() => {
      console.log('Playing');
    });
  }

  pause() {
    this.player.pause();
  }


  togglePlay() {
    if (!this.playing) {

      this.play();
    } else {
      this.pause();
    }

    this.playing = !this.playing;

  }

}
