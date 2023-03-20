import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-villain-card',
  templateUrl: './villain-card.component.html',
  styleUrls: ['./villain-card.component.css']
})
export class VillainCardComponent {
  @Input() name = "";
  @Input() objective = "";
  @Input() phrase = "";
  @Input() image = "";
}
