import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { MotocycleComponent } from './motocycle/motocycle.component';
import { ErreurComponent } from './erreur/erreur.component';
import { LoginComponent } from './login/login.component';
import { SelectedMotoComponent } from './selected-moto/selected-moto.component';
import { InfoPipe } from './info.pipe';
import { KgPipe } from './kg.pipe';
import { ContactComponent } from './contact/contact.component';
import { EditComponent } from './edit/edit.component';
import { FilterPipe } from './filter.pipe';
import { Filter1Pipe } from './Filter1.pipe';
import { SelectedClothingComponent } from './selected-clothing/selected-clothing.component';
import { ClothingComponent } from './clothing/clothing.component';
import { HelmetPipe } from './filtercloth/helmet.pipe';
import { ClothfilterPipe } from './filtercloth/Clothfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    MotocycleComponent,
    ErreurComponent,
    LoginComponent,
    SelectedMotoComponent,
    InfoPipe,
    KgPipe,
    ContactComponent,
    EditComponent,
    FilterPipe,
    Filter1Pipe,
    SelectedClothingComponent,
    ClothingComponent,
    ClothfilterPipe,
    HelmetPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
