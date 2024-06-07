import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './shared/contacto/contacto.component';
import { TableComponent } from './shared/table/table.component';
import { RedirectComponent } from './redirect/redirect.component';

const routes: Routes = [
  { path: '', redirectTo: '/contacto', pathMatch: 'full' },
  { path: 'contacto', component: ContactoComponent },
  { path: 'table', component: TableComponent },
  { path: 'external-link', component: RedirectComponent } // Nueva ruta para la redirección externa
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

