import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FirstComponent } from "./first/first.component";
import { SecondComponent } from "./second/second.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'first' },
  { path: 'first', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeRoutingModule {}
