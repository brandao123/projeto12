import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroClientesComponent } from './cadastro-clientes/cadastro-clientes.component';

const routes: Routes = [
{ path: '', redirectTo: '/home', pathMatch: 'full' },
{ path: 'cadastro-clientes', component: CadastroClientesComponent },
{ path: 'login', component: LoginComponent }

];

@NgModule({
imports: [ RouterModule.forRoot(routes) ],
exports: [ RouterModule ]
})

export class AppRoutingModule {}