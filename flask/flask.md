# Flask

##### Initialize and Install 
First things first, we initialize pipenv to create our working directory. Installing Flask here makes sense, but like any package, it could be done afterwards.
``` 
$ pipenv install flask
```

##### Import, Declare, Point
```py
# project.py

from flask import Flask

app = Flask(__name__)

@app.route('/')
def hello():
    return '<h1>Hello World!</h1>'
```

##### Manage Environmental Variables
Install python's env package
```
$ pipenv install python-dotenv
```

Create '.flaskenv'
```
FLASK_APP=project.py
FLASK_ENV=development
FLASK_VAR=example
```

##### Setup Configuration Class
Create 'config.py'
```py
import os

class Config(object):
    ENVIRONMENT_DEPENDENT_VARIABLE = os.environment.get('FLASK_VAR') or 'default'
```

Then call the Config with the app
```py
# project.py

from flask import Flask
from config import Config

app = Flask(__name__)
app.config.from_object(Config)

@app.route('/')
def hello():
    return '<h1>Hello World!</h1>'
```

