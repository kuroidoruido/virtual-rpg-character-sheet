import { Component, OnInit, Input } from '@angular/core';
import { TwoSheetData } from 'src/app/model/sheet.model';

@Component({
  selector: 'app-two-pages',
  templateUrl: './two-pages.component.html',
  styleUrls: ['./two-pages.component.scss']
})
export class TwoPagesComponent implements OnInit {

  @Input() game!: string;
  @Input() sheetData!: TwoSheetData;

  constructor() { }

  ngOnInit(): void {
    if(this.game === undefined) {
      console.error('You should provide a the game attribute on TwoPagesComponent');
    }
    if(this.sheetData === undefined) {
      console.error('You should provide a the sheetData attribute on TwoPagesComponent');
    }
  }

}
