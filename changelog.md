# Finish Customers and New-Customer components

Make `new-customer` component return to `customers` page on save, and add customers table

- use `router` service to change navigation on save
- create customers table on `components/customers`
- create component and make route `components/customer-details` on `/customers/:id`
- create component and make route `components/customer-edit` on `/customers/:id/edit`

# Aside: work with FireStore service

Practice firestore api using Observable objects and "async" pipe

- see the following components
  - components/firebase-tut
  - services/firebase-tut.service.ts

# Connect app to firebase services

Connect angular app to firebase services.

> use `ng add @angular/fire` for angular schematics

- install packages
  - `npm i firebase @angular/fire`
- add configurations to environment
  - add `firebaseConfig` object to `src/environments/environment.prod.ts` and `src/environments/environment.ts`
- import `@angular/fire` modules and initialize with `firebaseConfig` from `src/environments/environment.ts` module
  - `import { AngularFireModule } from '@angular/fire';`
  - `import { AngularFirestoreModule } from '@angular/fire/firestore';`
  - `import { AngularFireAuthModule } from '@angular/fire/auth';`
  - `import { environment } from '../environments/environment';`
  - ```javascript
    imports: [
      AngularFireModule.initializeApp(environment.firebaseConfig),
      AngularFireAuthModule,
      AngularFirestoreModule,
    ];
    ```

# Create deploy script in package.json

Create in package.json a deploy script which will build and deploy project

- `"deploy": "ng build --prod && firebase deploy --only hosting"`

# Create new customer form

Create a form for new customer and validations.

- create a form in `components/new-customer`
  - make validations
  - use `interfaces/customer`
- create interface for customer `interfaces/customer`

# Upload app to firebase hosting service

Upload your SPA Angular app to firebase hosting service.
[Review Current Project](https://w291219m-royalcrm.web.app/)

- `npm i -g firebase-tools`
  - install firebase tools package globally
- `firebase login`
  - login into the firebase account holding the project
- `cd` to angular project
- `firebase init`
  - initialize project's settings
  - select hosting service
  - select the correct project to upload to (_Warning: selecting the wrong project may cause an overwrite_)
  - enter the public directory (`angular.json` -> `architect.build.options.outputPath`)
  - select `Yes` when asked
    > `Configure as a single-page app (rewrite all urls to /index.html)?`
  - select `No` when asked
    > `File dist/{project name}/index.html already exists. Overwrite?`
- ng build --prod
  - build the angular project with production configurations
- firebase deploy
  - deploy angular app to firebase hosting service
  - click the provided link to view your online site or dashboard

# Add customers/new route and component

- create "components/new-customer" component.
- connect component to "/customers/new" route

# Add create new button to customers page

Add button to components/customers with route to "customers/new"

# Aside: create HTTP requests

Practice HTTP requests using Observable objects and "async" pipe

- see the following components
  - components/http-tut
  - services/http.service.ts

# Configure active route to pop

Add to "routerLink" element the "routerLinkActive" directive, so current route link will pop.

# Configure routing for app

- configure routes on app-routing.module.ts
- add `<route-outlet>` tag where components should appear
- use `[routerLink]` directive for links

# Create customers component

Create a customers page component

- components/customers

# Create Page-Not-Found component

Create a page not found (404) component

- components/page-not-found

# Connect contacts.service to contacts.component.html template

Connect the services/contacts.service.ts to the template created on last step (components/contacts/contacts.component.html)

# Create a contact API service and contact interface

Create a contact API service with mock-data and an interface to configure it's type.

- services/contacts
- interfaces/contact

# Create components/contacts component template

Create a template for contacts page in components/contacts

# Create pipes/paragraph-capital.pipe.ts

Create a pipe which will capital the first letter and trim spaces.
Use it on utils/page-header.component.html for the description value.

# Create utils/page-header component

Create the page-header component under folder named utils.
This component will be used for every page on top of it.

# Refactor all to app.module

Extract sidnav.component and navbar.component to app.module.
Add title pipe to sidenav.component.html links.

# Create sidnav

set sidenav.component.html to nav items

- on sidenav.component.ts add a nav items array
- iterate through the array on sidenav.component.html to show all nav items

# Create navbar

set navbar.component.html to show nav with the following drop down

- {user's email}
  - my preferences
  - log out

# Create navigation module and set app.component.html

- create navigation module
  - ng g m modules/navigation
- create sidenav and navbar
  - ng g c modules/navigation/navbar
  - ng g c modules/navigation/sidenav
- export sidenav and navbar from navigation module
- use components on app.component.html

# Add installed packages to angular.json

Add to styles and scripts array the installed packages

- styles:

```javascript
"styles": [
  "src/styles.scss",
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "node_modules/@fortawesome/fontawesome-free/css/all.min.css"
]
```

- scripts:

```javascript
"scripts": [
  "node_modules/jquery/dist/jquery.min.js",
  "node_modules/popper.js/dist/umd/popper.min.js",
  "node_modules/bootstrap/dist/js/bootstrap.min.js",
  "node_modules/@fortawesome/fontawesome-free/js/all.js"
]
```

# Install style dependencies

Install Bootstrap, JQuery, Popper.js and @fortawesome/fontawesome-free

- npm i bootstrap jquery popper.js @fortawesome/fontawesome-free

# Install a new Angular Project

- ng new royalCrm
