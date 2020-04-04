import { Component, AfterViewChecked } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewChecked {
  // @ViewChild('pages', { static: true }) pagesWrapperElement: any;

  ngAfterViewChecked() {
    // if(this.pagesWrapperElement !== undefined && this.pagesWrapperElement.nativeElement !== undefined) {
    //   this.pagesWrapperElement.nativeElement.style.setProperty('--pageWidth', `${ this.sheetData.pageConfig.pageWidth / 2 }%`);
    // }
  }
}
