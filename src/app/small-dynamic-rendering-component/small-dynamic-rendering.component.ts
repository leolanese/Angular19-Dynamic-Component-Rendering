import {Component,ViewChild,ViewContainerRef} from '@angular/core';

@Component({
  selector: 'app-small-dynamic-rendering-component',
  standalone: true,
  imports: [],
  template: `
    <div>
      <button (click)="loadComponent('component1')">Load Component 1</button>
      <button (click)="loadComponent('component2')">Load Component 2</button>
    </div>
    <ng-container #dynamicHost></ng-container>
  `,
})
export class SmallDynamicRenderingComponent {
  @ViewChild('dynamicHost', { read: ViewContainerRef }) dynamicHost!: ViewContainerRef;

  async loadComponent(type: string) {
    this.dynamicHost.clear(); // Clear previous component

    // Pass data dynamically to the created component
    if (type === 'component1') { 
      const { DynamicComponent1Component } = await import(
        '../dynamic-component1/dynamic-component1.component'
      );
      const componentRef = this.dynamicHost.createComponent(DynamicComponent1Component);
      componentRef.instance.data = 'Data for Component 1';
    } else if (type === 'component2') {
      const { DynamicComponent2Component } = await import(
        '../dynamic-component2/dynamic-component2.component'
      );
      const componentRef = this.dynamicHost.createComponent(DynamicComponent2Component);
      componentRef.instance.info = 'Info for Component 2';
    }
  }
  
}
