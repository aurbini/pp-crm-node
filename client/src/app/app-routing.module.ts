import { ErrorComponent } from './pages/error/error.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonorsComponent } from './pages/donors/donors.component';
import { VotersComponent } from './pages/voters/voters.component';
// import { LoginComponent } from './pages/login/login.component';
import { DonorDetailComponent } from './pages/donor-detail/donor-detail.component';
// import { RegisterComponent } from './pages/register/register.component';
import { SearchComponent } from './pages/search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/donors', pathMatch: 'full' },
  // redirect to `first-component`
  { path: 'donors', component: DonorsComponent },
  { path: 'donors/:id', component: DonorDetailComponent },
  { path: 'search', component: SearchComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  { path: 'voters', component: VotersComponent },
  { path: 'server-error', component: ErrorComponent },
  // Wildcard route for a 404 page
  { path: '**', component: DonorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
