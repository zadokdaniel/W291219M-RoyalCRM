import { Component, OnInit } from '@angular/core';
import { FirebaseTutService } from 'src/app/services/firebase-tut.service';
import { NgForm } from '@angular/forms';
import { tap, map } from 'rxjs/operators';

import { SeedData } from 'src/app/components/firebase-tut/data';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-firebase-tut',
  templateUrl: './firebase-tut.component.html',
  styleUrls: ['./firebase-tut.component.scss'],
})
export class FirebaseTutComponent implements OnInit {
  snapshot: Observable<any> = null;
  valueChanges = null;
  valueChangesWithId = null;

  form = {
    idValue: '',
    object: `
{
    "name": "",
    "age": "",
    "email": ""
}
  `,
  };

  message = [];

  constructor(public fTutService: FirebaseTutService) {
    this.snapshot = this.fTutService.snapshotChanges();
    this.valueChanges = this.fTutService.valueChanges();
    this.valueChangesWithId = this.fTutService.valueChanges({ idField: 'id' });
  }

  ngOnInit(): void {
    this.snapshot.pipe(tap(console.log)).subscribe();
  }

  initialize() {
    SeedData.forEach((item) => this.fTutService.add(item as object));
  }

  onSubmit(form: NgForm) {}

  onAdd() {
    this.fTutService.add(JSON.parse(this.form.object));
  }
  onUpdate() {
    this.fTutService.update(this.form.idValue, JSON.parse(this.form.object));
  }
  onSet() {
    this.fTutService.set(this.form.idValue, JSON.parse(this.form.object));
  }
  async onDelete() {
    await this.fTutService.delete(this.form.idValue);
    this.message.push('success');
  }
  onReset(form: NgForm) {
    form.resetForm({
      idValue: '',
      object: `
      {
          "name": "",
          "age": "",
          "email": ""
      }
    `,
    });
  }
}
