import { Component, OnInit } from '@angular/core';
import { WebsocketService } from './services/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'basico';

  constructor( 
    // private servWebSocket: WebsocketService 
  ){}
  ngOnInit() {
    // Called after the constructor and called  after the first ngOnChanges() 
 }
}
