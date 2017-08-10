import {Component, Input, OnInit} from '@angular/core';
import {MsgService} from './msg.service';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MsgService]

})

export class AppComponent implements OnInit {

  m: FirebaseListObservable<any[]>;
  idTracker: number;

  constructor(private msgS: MsgService) {}

  ngOnInit() {

    this.m = this.msgS.items;
    this.idTracker++;

  }

}
