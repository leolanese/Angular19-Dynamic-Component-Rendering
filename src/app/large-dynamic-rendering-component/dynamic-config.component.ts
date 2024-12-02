import {Type} from '@angular/core';
  
// Map component keys to their dynamic imports
export const componentMap: { [key: string]: () => Promise<Type<any>> } = {
  component1: () => import('../dynamic-component1/dynamic-component1.component').then(m => m.DynamicComponent1Component),
  component2: () => import('../dynamic-component2/dynamic-component2.component').then(m => m.DynamicComponent2Component),
  // Add more components here...
};

// Components array
export const components = [
  { key: 'component1', label: 'Component 1' },
  { key: 'component2', label: 'Component 2' },
  // Add more components here...
];