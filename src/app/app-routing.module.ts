import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './component/add-form/add-form.component';
import { ViewFormComponent } from './component/view-form/view-form.component';
import { EditFormComponent } from './component/edit-form/edit-form.component';

const routes: Routes = [
  {
    path : "add-form",
    component : AddFormComponent
  },
  {
    path : "",
    component : ViewFormComponent
  },
  { path: 'add-form/:id', component: AddFormComponent },
  { path: 'edit-form', component: EditFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
