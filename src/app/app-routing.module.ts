import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarrinhoComponent } from './carrinho/carrinho.component';
import { InicialComponent } from './inicial/inicial.component';

const routes: Routes = [
  { path: 'carrinho', component: CarrinhoComponent },
  { path: 'index', component: InicialComponent },
  { path: '',   redirectTo: '/index', pathMatch: 'full' },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}