import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  posts: Observable<Post[]> = null;

  readonly url = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private httpClient: HttpClient) {
    this.posts = httpClient.get<Post[]>(this.url);
  }

  getById(id: number) {
    return this.httpClient.get<Post>(this.url + '/' + id);
  }
}
