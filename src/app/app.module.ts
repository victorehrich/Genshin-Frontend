import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material/material.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HttpClientModule } from "@angular/common/http";
import { CharactersComponent } from './pages/characters/characters.component';
import { CharacterMiniatureComponent } from './components/character-miniature/character-miniature.component';
import { CharacterPageComponent } from './pages/character-page/character-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidebarComponent,
    CharactersComponent,
    CharacterMiniatureComponent,
    CharacterPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
