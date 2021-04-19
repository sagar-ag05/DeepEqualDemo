import { Component } from '@angular/core';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'compareDemo';
  objA = { 'name': 'Joe', 'age': 33, 'city': 'Pune' };
  objB = { 'name': 'Joe1', 'age': 33, 'city': 'Pune' };
  output = { 'result': false };
  constructor(private util: UtilService) {}

  ngOnInit() {
    this.output.result = this.util.isEqual(this.objA, this.objB);
  }

}
