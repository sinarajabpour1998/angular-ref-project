import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowToAddServer = false;
  serverCreationStatus = "No server created!";
  serverName = "Test Name";

  constructor() {
    setTimeout(() => {
      this.allowToAddServer = true;
    },3000);
   }

  ngOnInit(): void {
  }

  onAddServer(){
    this.serverCreationStatus = "Server created Successfully!";
  }

  updateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
