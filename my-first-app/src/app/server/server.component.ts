import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  notAllowCreateNewServer: boolean=true;
  paragraphShow: boolean=false;
  serverId: number = 2000
  serverName: string = ""
  serversList: string[] = []
  constructor(){
    setTimeout(() => {
      this.notAllowCreateNewServer=false;
    }, 2000)
  }

  getServerId(){
    return this.serverId;
  }

  createNewServer(){
    this.serverId+=1;
    this.serversList.push(this.serverName);
  }
}
