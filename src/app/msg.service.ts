import {FirebaseListObservable} from 'angularfire2/database';
export class MsgService {

  messages: string[] = [];
  items: FirebaseListObservable<any[]>;

  onNewMessage(msg: string) {
    console.log(msg);
    this.messages.push(msg);

  }

}
