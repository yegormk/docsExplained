import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppComponent } from './app.component';

import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CatGalleryEffects } from './store/cats.effects';
import { CatGalleryState } from './store/cats.state';
import { loadingImages, loadingListOfBreeds } from './store/cats.reducers'
import { AuthInterceptor } from './service/apiToken.interceptor';

const catGalleryReducerMap: ActionReducerMap<CatGalleryState> = {
  imageData: loadingImages, 
  listOfBreeds: loadingListOfBreeds
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ 
    BrowserModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot(catGalleryReducerMap),
    EffectsModule.forRoot([CatGalleryEffects])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

