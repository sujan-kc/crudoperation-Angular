import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './componentCommunication/parent/parent.component';
import { AddformComponent } from './components/form/addform/addform.component';
import { FormComponent } from './components/form/form.component';

const routes: Routes = [
  { path: '', component: FormComponent },
  { path: 'addform', component: AddformComponent },
  { path: 'edit/:id', component: AddformComponent },
  { path: 'parent', component: ParentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
