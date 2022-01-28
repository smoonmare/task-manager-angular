import { Injectable } from '@angular/core';
import { WebRequestsService } from './web-requests.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestsService) { }

  getLists() {
    return this.webReqService.getUri('lists');
  }

  createList(title: string) {
    return this.webReqService.postUri('lists', { title });
  
  }

  getTasks(listId: string) {
    return this.webReqService.getUri(`lists/${listId}/tasks`);
  }

  createTask(title: string, listId: string) {
    return this.webReqService.postUri(`lists/${listId}/tasks`, { title });
  }

}
