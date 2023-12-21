import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './signup/signup.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { CoupClassiqueComponent } from './coup-classique/coup-classique.component';
import { ParentListComponent } from './parent-list/parent-list.component';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  { path: 'user', component: UserProfileComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'coup-classique', component: CoupClassiqueComponent },
  { path: 'liste', component: ParentListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export { routes };
