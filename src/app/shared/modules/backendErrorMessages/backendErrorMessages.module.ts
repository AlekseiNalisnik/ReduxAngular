import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendErrorMessagesComponent } from './backendErrorMessages';

@NgModule({
    declarations: [BackendErrorMessagesComponent],
    imports: [CommonModule],
    exports: [BackendErrorMessagesComponent],
})
export class BackendErrorMessagesModule { }
