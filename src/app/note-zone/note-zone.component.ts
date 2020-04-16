import { Component, Input, OnInit } from '@angular/core';
import { SaveService } from '../shared/save/save.service';

@Component({
  selector: 'app-note-zone',
  templateUrl: './note-zone.component.html',
  styleUrls: ['./note-zone.component.scss']
})
export class NoteZoneComponent implements OnInit {
  @Input() game = '';

  notes: string = '';

  constructor(public saveService: SaveService) {
  }

  ngOnInit() {
    const saved = this.saveService.restoreNotes(this.game);
    if(saved !== undefined) {
      this.notes = saved;
    }
  }

  change(event: any) {
    this.notes = event.target.value;
    this.saveService.saveNotes(this.game, this.notes);
  }
}
