import { Component, ViewChildren, QueryList, AfterViewInit } from '@angular/core';
import { HelloComponent } from './hello.component';
import { Observable, BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements AfterViewInit {
  name = 'Angular';
  list = [];
  compCount = 0;
  spanCount = 0;

  // Añadir un contador de cuántos HelloComponent hay en el template

  @ViewChildren(HelloComponent) compList: QueryList<HelloComponent>;

  ngAfterViewInit() {
    this.compList.changes.pipe(delay(0)).subscribe(changes => {
       this.compCount = changes.length;
    });
  }

}
