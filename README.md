# Automation-workshop_Session_3
Performance testing Automation workshop

Scenarios covered: Create a new project that will contain the following requests:

- Create a project
- Get a project
- Get active tasks
- Create a new task
- Get an active task
- Update a task
- Change a task status to ‘complete’
- Reopen a task
- Delete a task

#Instalation and execution for this project 

Download the ZIP project 

#Install Artillery via npm:

*$ npm i artillery*

#Install fakers plugin via npm:

*$ npm i faker*

#Type on terminal the following line to execute those tests automatically using the CLI

- This will create a Project with a task and get/update/close/reopen/delete the task and project

*$ npm run test_CreateProjectwithTask* 

- This will create inbox tasks and get/update/close/reopen/delete the task created

*$ npm run test_CreateTasks*

- This will create inbox tasks with random data using fakers and get and delete the task created

*$ npm run test_CreateTaskUsingFakers*

# To create a project from scratch 
#Create a node project via npm

*$ npm init*

#Install Artillery via npm:

*$ npm i artillery*

#Create a yml file

for Mac typen *$ touch performance.yml*

for Windows type *$ fsutil file createnew performance.yml 0*

#Add a template using artillery plugin
add the Artillery.io snippets and click Ctrl+space to use a BasicConfig template

#Add your Todoist project

#Add your API token on windows type  

*$ setx TOKEN "your token"*

#Finally add your scenarios on the performance.yml file
  
