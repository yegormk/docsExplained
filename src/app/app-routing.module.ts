import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { MainResolver } from './app.resolver'



const routes: Routes = [
    {
      path: 'main',
      component: AppComponent,
    //   resolve: { listOfBreeds: MainResolver }
    },
];
  
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }