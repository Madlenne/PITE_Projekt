# UberTravel [![Build Status](https://travis-ci.org/BMichalskiPITE/PITE_Projekt.svg?branch=master)](https://travis-ci.org/BMichalskiPITE/PITE_Projekt)<a href='https://coveralls.io/github/BMichalskiPITE/PITE_Projekt?branch=master'><img src='https://coveralls.io/repos/github/BMichalskiPITE/PITE_Projekt/badge.svg?branch=master' alt='Coverage Status' /></a>




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
- pip install -r requirements.txt
- pip install python-coveralls

# commands:
 - to see coverage
insted of: python my_program.py arg1 arg2
write: coverage run my_program.py arg1 arg2

 - to see the results:
```
coverage report -m
```
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
 
 # travis-ci
 - https://travis-ci.org/BMichalskiPITE/PITE_Projekt

# heroku deployment
- https://ubertravel.herokuapp.com/
