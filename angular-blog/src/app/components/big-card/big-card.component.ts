import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent {
  @Input()
  Photo_Cover:string = ''
  @Input()
  Title:string = ''
  @Input()
  Description:string = ''
  @Input()
  Id:string = '0'
}
