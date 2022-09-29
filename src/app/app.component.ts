import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { select, Store } from '@ngrx/store';

import { CatGalleryState } from './store/cats.state';
import * as CatGalleryActions from './store/cats.actions'
import { selectBreeds, selectCats } from './store/cats.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private store: Store<CatGalleryState>) {}
  
  imagesData$ = this.store.pipe(select(selectCats));
  searchForm!: FormGroup;
  listOfBreeds$ = this.store.pipe(select(selectBreeds));

  loadImages(): void {
    this.store.dispatch(
      CatGalleryActions.LoadImages({
        limit: this.searchForm.value.quantity,
        breed: this.searchForm.value.breed,
      })
    );
  }

  ngOnInit(): void{  
    this.searchForm = new FormGroup({
      breed: new FormControl('all', [
        Validators.required,
      ]),
      quantity: new FormControl('10', [
        Validators.required,
      ])
    });
    this.loadImages();
    this.store.dispatch(CatGalleryActions.LoadListOfBreeds());  
  }

  onSubmit(){
    this.loadImages();
  }
}
