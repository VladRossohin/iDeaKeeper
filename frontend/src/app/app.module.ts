import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AccordionModule, AlertModule} from 'ngx-bootstrap';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './modules/layout/components/home/home.component';
import {AccountComponent} from './modules/layout/components/account/account.component';
import {HeaderComponent} from './modules/header/components/header.component';
import {FooterModule} from './modules/footer/footer.module';
import {FooterComponent} from './modules/footer/components/footer.component';
import {LayoutModule} from './modules/layout/layout.module';
import {HeaderModule} from './modules/header/header.module';
import {HttpClientModule} from '@angular/common/http';
import {SigninComponent} from './modules/layout/components/signin/signin.component';
import {SignupComponent} from './modules/layout/components/signup/signup.component';
import {NotFoundComponent} from './modules/layout/components/not-found/not-found.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'account', component: AccountComponent},
  { path: 'signin', component: SigninComponent},
  { path: 'signup', component: SignupComponent},
  { path: '**', component: NotFoundComponent}
  ];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AlertModule.forRoot(),
    LayoutModule,
    HeaderModule,
    FooterModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
