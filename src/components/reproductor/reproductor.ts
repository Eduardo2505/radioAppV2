import { Component, Input, OnInit } from '@angular/core';



@Component({
  selector: 'reproductor',
  templateUrl: 'reproductor.html'
})
export class ReproductorComponent implements OnInit {
  @Input() text: string;
  @Input() titulo: string;
  @Input() artista: string;
  @Input() album: string;
  @Input() cover: string;
  @Input() audioSrc: string;

  public audio: any;
  public playing: boolean;
  public audioPos: number;
  public audioDuration: number;

  public ready: boolean;


  constructor() {

    this.playing = false;
    this.audioPos = 0;
    this.ready = false;
  }
  ngOnInit() {
    this.audio = new Audio();
    this.audio.src = this.audioSrc;
    console.log(this.audio.src);
    this.audio.load();

    //  console.log("entro>>>>>>>>>" + this.audio.currentTime);

    this.audio.oncanplaythrough = () => {
      this.audioDuration = this.audio.duration;
      this.ready = true;
      //console.log(this.audioDuration);

    };

    this.audio.ontimeupdate = () => {
      this.audioPos = this.audio.currentTime;

    };
    
    this.audio.onended = () => {
      this.audioPos = 0;
      this.playing=false;
    };


  }
  togglePlay() {
    if (!this.playing) {

      this.audio.play();
    } else {
      this.audio.pause();
    }

    this.playing = !this.playing;

  }
}
