# UberTravel

# prefered requirements:
 - python: 3.5.2
 - npm: 5.6.0
 - Angular CLI: 1.5.5
 - Node: 9.2.1
 - OS: linux x64

# to install:
- https://nodejs.org/en/download/current/ (nodejs + npm)
- npm install -g @angular/cli
- pip install Django==1.11.11
- pip install djangorestframework==3.8.2
- pip install django-cors-headers==2.2.0

# commands:
 - run server
```
python3 server/uberTravel/manage.py runserver
```
 - install client modules
```
cd client/
npm install
```
 - run client
```
cd client/
ng serve
```

# default ports:
 - client - localhost:4200
 - server - localhsot:8000

# api endpoint
 - places http://127.0.0.1:8000/api/places/ 

# migrations 
 - python manage.py makemigrations
 - python manage.py migrate
 - python manage.py loaddata .\api\fixtures\places.json