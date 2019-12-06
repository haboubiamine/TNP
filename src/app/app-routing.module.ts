import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MotocycleComponent } from './motocycle/motocycle.component';
import { ErreurComponent } from './erreur/erreur.component';
import { MenuComponent } from './menu/menu.component';
import { SelectedMotoComponent } from './selected-moto/selected-moto.component';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { EditComponent } from './edit/edit.component';
import { ClothingComponent } from './clothing/clothing.component';
import { SelectedClothingComponent } from './selected-clothing/selected-clothing.component';

const routes: Routes = [
  {path:'login',component:LoginComponent },
  {path:'cloth',component:ClothingComponent },
  {path:'Home',component:HomeComponent },
  {path:'Motocycle',component:MotocycleComponent},
  {path:'Menu',component:MenuComponent },
  {path:'Motocycle/:ID',component:SelectedMotoComponent},
  {path:'cloth/:ID',component:SelectedClothingComponent},
  {path:'Edit',component:EditComponent },
  {path:'contact',component:ContactComponent },
  {path:'Erreur',component:ErreurComponent },
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'**',component:ErreurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
