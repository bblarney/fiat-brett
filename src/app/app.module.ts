import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './module/app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './component/nav/nav.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { HomeComponent } from './component/home/home.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { FooterComponent } from './component/footer/footer.component';
import { PageNotFoundComponent } from './component/page-not-found/page-not-found.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { AdvisorsComponent } from './component/advisors/advisors.component';
import { PerformanceComponent } from './component/performance/performance.component';
import { RegistrationComponent } from './component/registration/registration.component';
import { LoginComponent } from './component/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SidebarComponent,
    HomeComponent,
    DashboardComponent,
    FooterComponent,
    PageNotFoundComponent,
    PortfolioComponent,
    AdvisorsComponent,
    PerformanceComponent,
    RegistrationComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }