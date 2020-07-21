# React Basics

### Setup

Basic React App creation
```
$ npx create-react-app APPNAME
```

React App creation using a template
```
$ npx create-react-app APPNAME --template TEMPLATE NAME
```
*App Academy's simple template is "@appacademy/simple"*

##### Neccesary components of default React Apps
- public/
    - index.html
        ```html
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="utf-8" />
                <title>React App</title>
            </head>
            <body>
                <div id="root"></div>
            </body>
        </html>
        ```
- src/
    - App.js
        ```js
        import React from 'react';

        function App() {
            return (
                <h1>Hello world!</h1>
            );
        }
        export default App;
        ```
    - index.css
    - index.js
        ```js
        import React from 'react';
        import ReactDOM from 'react-dom';
        import './index.css';
        import App from './App';

        ReactDOM.render(
            <React.StrictMode>
                <App />
            </React.StrictMode>,
        document.getElementById('root')
        );
        ```