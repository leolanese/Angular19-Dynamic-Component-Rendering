import {Component,Input} from '@angular/core';

@Component({
  selector: 'app-dynamic-component1',
  standalone: true,
  imports: [],
  template: `<p>Dynamic Component 1: {{data}}</p>`,
  styleUrl: './dynamic-component1.component.sass'
})
export class DynamicComponent1Component {
  @Input() data: string = '';
}
