import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-server-utility',
  templateUrl: './server-utility.component.html',
  styleUrl: './server-utility.component.css'
})
export class ServerUtilityComponent {

  newServerName = '';
  newServerPort = 0;
  @Output() serverCreated = new EventEmitter<{serverName:string, serverPort:number}>();
  constructor(){}
  onAddServer(){
    this.serverCreated.emit({serverName: this.newServerName, serverPort: this.newServerPort});
  }
}
