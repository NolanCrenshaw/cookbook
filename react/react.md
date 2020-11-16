# React
---
*Contents*
- [Setup](#setup)
- [Dockerizing](#dockerfile)
- [React-modal](#react-modal)

*Quick Links*
- [The Official Documentation](https://reactjs.org/docs/getting-started.html)
- [Create React App Templates](https://www.npmjs.com/search?q=cra-template-*)
---
### Setup
**Create React App**
*Builds directory with specified name.*
```bash
$ npx create-react-app {APPNAME}
```
**Create React App with Template**
*Builds with custom content. Templates can be searched for [on npmjs.com](https://www.npmjs.com/search?q=cra-template-*).*
```bash
$ npx create-react-app {APPNAME} --template @appacademy/simple
```
---
### Dockerizing
**Add Dockerfile**
*Basic development build example*
```yaml
FROM node:15.1.0-alpine3.10

WORKDIR /app

# adds '/app/node_modules/.bin' to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# command lists
COPY package.json ./
COPY package-lock.json ./
RUN npm install
RUN npm install react-scripts@4.0.0 -g

# copies '.' to container's './'
COPY . ./

# start script
CMD ["npm", "start"]
```
**Add .dockerignore**
```
node_modules
build
.dockerignore
Dockerfile
Dockerfile.prod
```
**Build the Image**
*```-t``` tags the container*
```bash
$ docker build -t {APPNAME}:dev
```
**Run the Container**
*```-it``` specifies interactive mode, otherwise react-scripts will exit on start-up.*
*```--rm``` removes the container and volumes on exit*
*```-v``` creates a volume*
*```-p``` sets ports for the container to expose*
*```-e CHOKIDAR_USEPOLLING=true``` sets the react-app watcher to enable hot loading in the container*
```bash
$ docker run \
    -it \
    --rm \
    -v ${PWD}:/app \
    -v /app/node_modules \
    -p 3001:3000 \
    -e CHOKIDAR_USEPOLLING=true \
    {APPNAME}:dev
```
---
### React-Modal
- [npmjs page](https://www.npmjs.com/package/react-modal)

*Install*
```bash
$ npm install react-modal
```
*Import*
```js
import Modal from 'react-modal';
```
*Style*
```js
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
```
*Subtitle*
```js
var subtitle;
```
*Bind to Element*
```js
Modal.setAppElement('#yourAppElement')
```
*State Hook*
```js
const [modalIsOpen, setIsOpen] = useState(false);
```
*Toggles*
```js
function openModal() {
    setIsOpen(true);
}

function closeModal() {
    setIsOpen(false);
}
```
*Controls*
```js
function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = '#f00';
}
```
*Render*
```js
return (
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </div>
    );
```
---
###~EVERYTHING BELOW NEEDS REWORKING~
---
##### Install Router Dom
```
npm install react-router-dom@^5.0.0
```

The basic components of React are two directories, labeled "public" and "src." The "public" directory contains an HTML file named "index.html," while the "src" directory will have contain the default "index.js" and "index.css" files.

-------
### Required Language

##### JSX
TODO: JSX

##### Import
Import statements in React must follow the proper frontend js syntax. The 'require' statements used with Express will error. Import statements use destructuring to extract specific methods, functions, and fragments from libraries. Importing React components from other files is also done with the import syntax, using the normal path prefixes.
```js
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './index.css';
```

##### Establishing a ROOT Element
The "index.js" file in the "src" directory serves as the core file of the application. The default "index.html" file contains a single DIV element in its BODY. The "index.js" file accesses this element with a central "ReactDOM.render()" call that establishes the "<ROOT />". Normal JS language is the backbone of this functionality, with "document.addEventListener()" and "document.getElementById()" serving perfectly normal roles in this React process.
```js
const Root = () => (
  <BrowserRouter>
    <MAIN_NON-DEFAULT_ELEMENT />
  </BrowserRouter>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(<Root />, document.getElementById('root'));
});
```
------
### Components
React relies on two main types of Element Components: Function and Class. Each has their own quirks and language requirements, but they are essentially JS elements. Because of this, much of the behavior can be easily predicted. The biggest difference between the two styles, is that Class Components can access the State through the Constructor.

##### Function Components
Components defined by a Function declaration. These components have no access to state.
```js
const NewElement = () => {
    return (
        <>
            {any javascript usage is contained by brackets}
            <div>
        </>
    )
};
export default NewElement;
```

##### Class Componments
Components defined by a Class declaraction. Has access to the State.
```js
export default class NewElement extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 'default',
            newMethod: this.newMethod,
        }
    }

    newMethod = () => {
        return "functionality";
    }

    render() {
        return (
            <>
                <div>
            </>
        )
    }
};
```
------
### Built-in Input and Button Functionality

##### onChange and onClick
```js
<input onChange={this.newMethod} value={num} placeholder="example" />

<button onClick={this.otherMethod}>Example Text</button>
```

------
### Context

##### Declaring Context Component
The "createContext" function comes standard from the React library, and only needs to be destructured to be accessed. A tiny JS file can be made to import, declare, and then export a Context function to be used elsewhere in the application.
```js
import { createContext } from 'react';

const NewContext = createContext();

export default NewContext;
```

##### Applying Context
Once a Context Component is established, a React Component can access it with the ".Provider" method. The Context Component is assigned a "value" attribute. The nested component that we want to have access to the context can have things passed in through either the spread operator or the data={data} syntax.
```js
import React from 'react';
import App from '.App';
import NewContext from './NewContext';

export default class AppWithContext extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
        }
    }

    render() {
        return (
            <NewContext.Provider value={this.state}>
                <App {...this.props} />MAIN_NON-DEFAULT_ELEMENT
            </NameContext.Provider>
        )
    }
};
```

##### Retreving Context
