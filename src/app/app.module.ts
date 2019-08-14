import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { FrequencyToolModule } from './frequency-tool/frequency-tool.module';

import { AppComponent } from './app.component';


@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        FrequencyToolModule,
        BrowserAnimationsModule,
    ],
    providers: [],
    bootstrap: [
        AppComponent,
    ]
})
export class AppModule { }
