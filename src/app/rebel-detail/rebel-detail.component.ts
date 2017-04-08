import { Component, OnInit, Input } from '@angular/core';

import { Rebel } from '../rebel';
import { DataService } from '../data.service';

@Component({
  selector: 'ro-rebel-detail',
  templateUrl: './rebel-detail.component.html',
  styleUrls: ['./rebel-detail.component.scss']
})
export class RebelDetailComponent implements OnInit {
  @Input() rebel: Rebel;
  revealModel = false;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }
   
}
