import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {LargeDynamicRenderingComponentComponent} from "./large-dynamic-rendering-component/large-dynamic-rendering-component.component";
import {SmallDynamicRenderingComponent} from "./small-dynamic-rendering-component/small-dynamic-rendering.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SmallDynamicRenderingComponent, LargeDynamicRenderingComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'Angular19-Dynamic-Component-Rendering';
}
