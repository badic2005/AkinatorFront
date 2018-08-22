import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'wfm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnChanges {

  word: string = 'How are you';

  constructor() {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngoninit_appComponent');
  }


  ngOnChanges(changes: SimpleChanges): void {
    console.log('Change_appcomp');
  }
}
