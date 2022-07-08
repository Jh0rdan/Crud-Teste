import { Injectable } from '@nestjs/common';
import { appendFile } from 'fs';
import { lastValueFrom } from 'rxjs';
import { Task } from './task';

const cors = require('cors')


@Injectable()
export class TaskService {
task: Task[] = [
    {id: 1, nome: 'jhordan', email: 'jw.pastorello@gmail.com', telefone: 46935051256, obs: 'wasdasdasdsa'}
];

getAll() {
    return this.task;
}

getById(id: number){
    const task = this.task.find((value) => value.id == id);
    return task;
}

create(task: Task){

    
    let lastId = 0;
    if (this.task.length > 0) {
        lastId = this.task[this.task.length - 1].id;
    }

    task.id = lastId + 1;
    this.task.push(task)

    return task
}

update(task: Task){

    const taskArray = this.getById(task.id);
    if (taskArray) {
        taskArray.nome = task.nome;
        taskArray.email = task.email;
        taskArray.telefone = task.telefone;
        taskArray.obs = task.obs;
    }
    return taskArray;

}

delete(id: number){
        const index = this.task.findIndex((value) => value.id ==id);
        this.task.splice(index,1);

}

}
