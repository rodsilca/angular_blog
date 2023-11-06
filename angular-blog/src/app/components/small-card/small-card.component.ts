import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent {
  @Input()
  small_card_cover:string = ''
  @Input()
  small_card_title:string = ''
  @Input()
  Id:string = "0"
  
}
