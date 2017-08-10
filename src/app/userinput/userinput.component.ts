import { Component, OnInit } from '@angular/core';
import {MsgService} from '../msg.service';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';


@Component({
  selector: 'app-userinput',
  templateUrl: './userinput.component.html',
  styleUrls: ['./userinput.component.css']

})
export class UserinputComponent implements OnInit {

  msgVal = '';
  user: Observable<firebase.User>;

  constructor(private messageSerivice: MsgService, public afAuth: AngularFireAuth, public af: AngularFireDatabase) {
    this.afAuth.auth.signInAnonymously();
    this.messageSerivice.items = af.list('/messages', {
      query: {
        limitToLast: 50
      }
    });

    this.user = this.afAuth.authState;
  }

  ngOnInit() {
  }

  onClickSubmit(msg: string) {
    this.messageSerivice.onNewMessage(msg);
    this.msgVal = '';
    this.messageSerivice.items.push({message: msg});
  }


}
