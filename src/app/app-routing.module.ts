import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'about', loadChildren: './pages/about/about.module#AboutPageModule' },
  { path: 'settings', loadChildren: './pages/settings/settings.module#SettingsPageModule' },
  { path: 'edit-profile', loadChildren: './pages/edit-profile/edit-profile.module#EditProfilePageModule' },
  { path: 'home-results', loadChildren: './pages/home-results/home-results.module#HomeResultsPageModule' },
  { path: 'prehome', loadChildren: './pre-home/pre-home.module#PreHomePageModule' },
  { path: 'list-lub', loadChildren: './pages/list-lub/list-lub.module#ListLubPageModule' },
  { path: 'list-carb', loadChildren: './pages/list-carb/list-carb.module#ListCarbPageModule' },
  { path: 'geo-localisation', loadChildren: './pages/geo-localisation/geo-localisation.module#GeoLocalisationPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
