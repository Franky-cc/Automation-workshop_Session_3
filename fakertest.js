'use strict';
var faker = require('faker');
module.exports = { createTask };

function createTask(taskContext,events,done){
    
    // add variables to virtual user's context:
    var content = faker.lorem.sentence(3,5);
    var due_string = faker.date.weekday();
    var due_lang = faker.locale = "en";
    var priority= faker.random.number({
        'min': 1,
        'max':4
    });

    taskContext.vars.content = content;
    taskContext.vars.due_string = due_string;
    taskContext.vars.due_lang = due_lang;
    taskContext.vars.priority = priority;
    // continue with executing the scenario:
    return done();
}
