# Angular19 Dynamic Component Rendering

> Initial bundle size: Incorporated `async dynamically import(s)` for Components Modules at runtime, reducing the initial bundle size. The idea is to lazily load stand-alone Component modules when required, rather than having them eagerly loaded at application startup. Also Component Modules are initialised and removed from memory saving memory


## Benefits of Lazy Loading with Cleanup

-Efficient Memory Usage:
Components are only in memory while they are rendered. Once removed, memory is freed.
This approach prevents unnecessary memory bloat, especially for components that are infrequently used.

- Dynamic Resource Loading:
Lazy-loaded components are only loaded when needed, keeping the initial application size smaller and improving load times.

- Garbage Collection:
Since Angular removes the references to the component and clears the DOM, JavaScript's garbage collector can automatically clean up memory.


## Note ComponentFactoryResolver (Resolvers)

 ComponentFactoryResolver was used to dynamically create components at runtime. However, starting from `Angular 13+`, the ComponentFactoryResolver has been deprecated in favor of a more straightforward and modern approach using: `ViewContainerRef.createComponent`

## Usage ComponentFactoryResolver Angular -12
https://medium.com/netanelbasal/dynamically-creating-components-with-angular-a7346f4a982d

## DEMO

![async dynamic component loading](./src/app/images/image.png)


---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page
