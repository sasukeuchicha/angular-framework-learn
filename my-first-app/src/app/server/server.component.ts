import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  notAllowCreateNewServer: boolean=true
  serverId: number = 2000
  serverName: string = "Googol"

  constructor(){
    setTimeout(() => {
      this.notAllowCreateNewServer=false;
    }, 2000)
  }

  getServerId(){
    return this.serverId;
  }

  createNewServer(){
    this.serverId+=1
    return this.serverName;
  }
}
