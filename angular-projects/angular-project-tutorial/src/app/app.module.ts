import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './components/server/server.component';
import { ServersComponent } from './components/servers/servers.component';
import { WarningAlertComponent } from './components/warning-alert/warning-alert.component';
import { SuccessMessageComponent } from './components/success-message/success-message.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, ServersComponent, WarningAlertComponent, SuccessMessageComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
