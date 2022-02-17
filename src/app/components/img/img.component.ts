import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  @Input() img:String = '';
  @Output() loaded = new EventEmitter<String>();
  imageDefault='data:image/png;base64,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'

  constructor() { }

  ngOnInit(): void {
    //before render
    // async - fetch --once time
  }

  imgError(){
    this.img = this.imageDefault;
  }

  imgLoad(){
    console.log('Log Hijo.....');
    this.loaded.emit(this.img);
  }

}