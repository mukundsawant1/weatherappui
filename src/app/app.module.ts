import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  
import { GoogleLoginProvider, AuthService } from 'angularx-social-login';  
import { SocialLoginModule, AuthServiceConfig } from 'angularx-social-login';  
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { DashboardComponent } from './dashboard/dashboard.component';  
import { AppRoutingModule } from './app-routing.module';  
import { LoginComponent } from './login/login.component';  

export function socialConfigs() {  
  const config = new AuthServiceConfig(  
    [   
      {  
        id: GoogleLoginProvider.PROVIDER_ID,  
        provider: new GoogleLoginProvider('844730874749-9e6vcfnfsh67ij8gak0q1uki25r0tqsa.apps.googleusercontent.com')  
      }  
    ]  
  );  
  return config;  
}  

@NgModule({
  imports:      [ BrowserModule, FormsModule,AppRoutingModule,HttpClientModule  ],
  declarations: [ AppComponent, HelloComponent, LoginComponent,  
    DashboardComponent   ],
     providers: [  
    AuthService,  
    {  
      provide: AuthServiceConfig,  
      useFactory: socialConfigs  
    }  
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
