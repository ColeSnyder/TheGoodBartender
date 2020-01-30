import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FindMyDrinkComponent } from './find-my-drink/find-my-drink.component';
import { DrinkListComponent } from './drink-list/drink-list.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'FindMyDrink',
    component: FindMyDrinkComponent
  },
  {
    path: 'DrinkList',
    component: DrinkListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
