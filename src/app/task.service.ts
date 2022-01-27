import { Injectable } from '@angular/core';
import { WebRequestsService } from './web-requests.service';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private webReqService: WebRequestsService) { }

  createList(title: string) {
    return this.webReqService.postUri('lists', { title });
  }

  getLists() {
    return this.webReqService.getUri('lists');
  }

  getTasks(listId: string) {
    return this.webReqService.getUri(`lists/${listId}/tasks`);
  }
}
