import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrl: './server.component.css'
})
export class ServerComponent {
  @Input("srvElement") element: {type: string, name: string, port: number}
  receivedServerName = '';
  receivedServerPort = 0;
  constructor(){}

  onServerCreated(event: { serverName: string, serverPort: number }) {
    this.receivedServerName = event.serverName;
    this.receivedServerPort = event.serverPort;
  }
}
