# CompareDemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## About this Demo App:
Clone the repo locally. Run npm install command in the base/root folder of this project. To start the app locally run following command:

ng serve

It will start a dev server. In browser console log, you will notice error, require is not defined. deep-equal version 2.0.5 is used in package.json as a dependency. After adding deep-equal to npm, I also included the script path in angular.json file (line no 34). To include 3rd party libraries.

Un-comment the code in util.service.ts file. This service compares two objects and returns boolean to the caller.
It is called from app.component.ts file. Currently hard coded true value is returned from the util.service.


Use case is:
We create a private npm package (using Angular) to be used within my team. This package will have various common functions and utility methods.
One of the requirement is to deep compare two javascript objects. Previously we used lodash but due to various factors we decided to deprecate use of lodash. Deep-Equal looked promising as it had no security vulnerability, looks highly stable with 10 million downloads.


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
