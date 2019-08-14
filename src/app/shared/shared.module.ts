import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolHeaderComponent } from './components/tool-header/tool-header.component';
import { MyUppercasePipe } from './pipes/my-uppercase.pipe';
import { MyAppendPipe } from './pipes/my-append.pipe';
import { MyEllipsisPipe } from './pipes/my-ellipsis.pipe';
import { SafeStylePipe } from './pipes/safe-style.pipe';
import { TrailingSpacePipe } from './pipes/trailing-space.pipe';

@NgModule({
    declarations: [
        ToolHeaderComponent,
        MyUppercasePipe,
        MyAppendPipe,
        MyEllipsisPipe,
        SafeStylePipe,
        TrailingSpacePipe,
    ],
    exports: [
        ToolHeaderComponent,
        MyUppercasePipe,
        MyAppendPipe,
        MyEllipsisPipe,
        SafeStylePipe,
        TrailingSpacePipe,
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
