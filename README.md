# T8-Homework

In the following Repo you will find two folders, one called UI Tests, which has the UI tests done covering team 1 user stories "Add topic to guide" and "Edit topic to guide" (can't link them, because Confluence is currently down), and the other folder, API Tests which has a json file that can be run from Postman.

# Acclarations

I did an actual copy of the repository we are using https://github.com/dossas95/PRAXIS-integrador to my GitHub, that way I could do any kind of tests without damaging our app, and we can be sure that the tests will run without any problems on UI or API updates. The copied repo is available here https://github.com/sacardonaur/UI-homework and was deployed to heroku:

  -BackEnd:https://backend-copy.herokuapp.com/  
  -FrontEnd:https://frontend-copy.herokuapp.com
  
Since the app goes to sleep when it's not being used, I recommend opening the app before starting to run the tests

# UI Automation

For UI automation, I used protractor with Gherkin. And was basically a nightmare to make them work together on windows, but I managed to do it without problem, by using cucumber 1.3.1

For running the project, you just have to go to the UI Tests directory and execute an **nmp install**, have protractor globally installed in your machine and then execute **protractor protractorConfig.js**.

![alt text](https://github.com/sacardonaur/T8-Homework/edit/master/images/nmpinstall.png)
![alt text](https://github.com/sacardonaur/T8-Homework/edit/master/images/protractorconfig.png)


The tests are running against the app in heroku without a problem. Here there is a video showing a perfect run of the tests https://youtu.be/qwjksQKvMkw

# API Automation

For API automation, I used postman. Created the API tests for the same 2 behaviors and exported them on a json file. In order to run them, you just have to open Postman, import the file and run it. As well as with the UI automation, it's running against the heroku deployed App



