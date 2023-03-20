import { Input } from '@angular/core';
import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Input() versionName:string = ""
  @Input() villains:{name: string; phrase: string; objective: string; image: string}[] = []
}
