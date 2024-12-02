import {Component,Input} from '@angular/core';

@Component({
  selector: 'app-dynamic-component2',
  standalone: true,
  imports: [],
  template: `<p>Dynamic Component 2: {{info}}</p>`,
  styleUrl: './dynamic-component2.component.sass'
})
export class DynamicComponent2Component {
  @Input() info: string = '';
}
