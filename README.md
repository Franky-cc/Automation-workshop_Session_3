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
Download the project 

#Install Artillery via npm:
*$ npm i artillery*

#Type on terminal the following line to execute those tests automatically using the CLI
*npm run test*

##To create a project from scratch 
#Create a node project via npm
npm init 

#Install Artillery via npm:
*$ npm i artillery*

#Create a yml file
for Mac typen *touch performance.yml*
for Windows type *fsutil file createnew performance.yml 0*

#Add a template using artillery plugin
add the Artillery.io snippets and click Ctrl+space to use a BasicConfig template

#Add your Todoist project

#Add your API token on windows type  
*setx TOKEN "your token"*

#Finally add your scenarios on the performance.yml file
  