import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { routes } from './app-routing.module';
import { MenuComponent } from './menu/menu.component';
import { CoupClassiqueComponent } from './coup-classique/coup-classique.component';

@NgModule({
  declarations: [AppComponent, UserProfileComponent, SignupComponent, MenuComponent, CoupClassiqueComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
