import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-http-tut',
  templateUrl: './http-tut.component.html',
  styleUrls: ['./http-tut.component.scss'],
})
export class HttpTut implements OnInit, OnDestroy {
  constructor(public httpService: HttpService) {}

  post = null;
  unsub: Subscription[] = null;

  ngOnInit(): void {
    console.log('init');
    // this.unsub.push(
    //   this.httpService.posts.subscribe((data) => {
    //     this.post = data;
    //   })
    // );
    // this.unsub.push(
    //   this.httpService.posts.subscribe((data) => {
    //     console.log(data);
    //   })
    // );
  }
  ngOnDestroy(): void {
    console.log('destroyed');
    // this.unsub.forEach((sub) => sub.unsubscribe());
  }

  onSubmit(inputElement: HTMLInputElement) {
    this.post = this.httpService.getById(+inputElement.value);
  }
}
