import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { MatListModule } from '@angular/material';

import { AppComponent } from './app.component';
import { HogeComponent } from './hoge/hoge.component';
import { FooComponent } from './foo/foo.component';
import { BarComponent } from './bar/bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HogeComponent,
    FooComponent,
    BarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'hoge', pathMatch: 'full' },
      { path: 'hoge', component: HogeComponent },
      { path: 'foo', component: FooComponent },
      { path: 'bar', component: BarComponent },
      { path: '**', redirectTo: 'hoge' }
    ]),
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
