import { Component } from '@angular/core';
import { Output, EventEmitter, Input } from '@angular/core';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  @Output("updateVersion") updateVersion = new EventEmitter<number>();
  @Input() versionList:{versionName: string; versionId: number; villainList: {name: string; objective: string; phrase: string; image: string;}[]}[] = []

  handleMenuSelect(versionId :number){
    this.updateVersion.emit(versionId)
  }


}
