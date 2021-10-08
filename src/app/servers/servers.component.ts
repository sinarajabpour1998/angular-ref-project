import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowToAddServer = false;
  serverCreationStatus = "No server created!";
  serverName = "";
  serverCreated = false;

  constructor() {
    setTimeout(() => {
      this.allowToAddServer = true;
    },3000);
   }

  ngOnInit(): void {
  }

  onAddServer(){
    this.serverCreated = true;
    this.serverCreationStatus = "Server created Successfully! the server name is: " + this.serverName;
  }

  updateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
