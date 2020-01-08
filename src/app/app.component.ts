import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hyunju first App';

  private title2 = 'title2';
  public num2 = 50;
  public all = new Array();

  // method
  public printAll(arg) {
    console.log(arg);
  }

  private ifIwereGoToServer() {
    this.all.push('Result');
    this.all.push(1234);
    this.all.push(4567);
  }

  private changeTitle() {
    this.title = 'title을 바꾸장';
  }

  // 사용자가 어떠한 이벤트나 명령을 따로 주지 않아도 실행되는 함수
  constructor() {
    console.log('Working');

    const num = 1;
    console.log('number -> ', num);
    console.log(num * 10);

    const bool = true;
    console.log(bool);

    const text = 'print text';
    this.printAll(text);
    console.log(this.title2, this.num2, this.all);

  }

}
