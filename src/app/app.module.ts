import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AdminPanelComponent } from './component/adminpanel/adminpanel.component';
import { UserregisterComponent } from './component/userregister/userregister.component';
import { UserDashboardComponent } from './component/userdashboard/userdashboard.component';
import { AdminComponent } from './component/admin/admin.component';
import { LoginComponent } from './component/login/login.component';
import { UserlocationComponent } from './component/userlocation/userlocation.component';
import { HomeComponent } from './component/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ExcelService } from './service/excel.service';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    AdminPanelComponent,
    UserregisterComponent,
    UserDashboardComponent,
    AdminComponent,
    LoginComponent,
    UserlocationComponent,
    HomeComponent

    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule ,
    HttpClientModule,
    CommonModule,

  ],
  providers: [ExcelService],
  bootstrap: [AppComponent]
})
export class AppModule { }