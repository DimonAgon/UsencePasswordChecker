import {Component, Input, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-indicator',
  templateUrl: './indicator.component.html',
  styleUrls: ['./indicator.component.scss']
})
export class IndicatorComponent {
@Input() state = '';
  ngOnChanges(changes: SimpleChanges) {
    // changes.prop contains the old and the new value...
  }
}
