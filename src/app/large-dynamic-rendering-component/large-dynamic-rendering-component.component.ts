import {CommonModule} from '@angular/common';
import {Component,ComponentRef,ViewChild,ViewContainerRef} from '@angular/core';
import {componentMap,components} from './dynamic-config.component';

@Component({
  selector: 'app-large-dynamic-rendering-component',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <button *ngFor="let comp of components" (click)="loadComponent(comp.key)">
        Load {{ comp.label }}
      </button>
    </div>
    <ng-container #dynamicHost></ng-container>
  `,
})
export class LargeDynamicRenderingComponentComponent {
  @ViewChild('dynamicHost', { read: ViewContainerRef }) dynamicHost!: ViewContainerRef;

  // Use the imported componentMap and components array
  components = components;

  async loadComponent(type: string) {
    this.clearDynamicHost();

    try {
      const componentType = await componentMap[type]();
      const componentRef = this.dynamicHost.createComponent(componentType);
      this.assignInputData(componentRef, componentMap[type]);
    } catch (error) {
      console.error('Error loading component:', error);
    }
  }

  private clearDynamicHost() {
    this.dynamicHost.clear();
  }

  private assignInputData(componentRef: ComponentRef<any>, inputData: { [key: string]: any }) {
    if (!!inputData) {
      Object.keys(inputData).forEach(key => {
        if (componentRef.instance.hasOwnProperty(key)) {
          componentRef.instance[key] = inputData[key];
        }
      });
    }
  }
  
}
