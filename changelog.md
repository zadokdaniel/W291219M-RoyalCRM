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
