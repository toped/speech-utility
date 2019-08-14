import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import { FrequencyHomeComponent } from './components/frequency-home/frequency-home.component';
import { SpeechBoxComponent } from './components/speech-box/speech-box.component';

@NgModule({
    declarations: [
        FrequencyHomeComponent,
        SpeechBoxComponent,
    ],
    exports: [
        FrequencyHomeComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        ReactiveFormsModule
    ]
})
export class FrequencyToolModule { }
