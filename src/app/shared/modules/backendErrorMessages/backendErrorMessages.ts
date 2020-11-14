import { Component, Input, OnInit } from "@angular/core";
import { BackendErrorsInterface } from '../../types/backendErrors.interface';

@Component({
    selector: 'redux-backend-error-messages',
    templateUrl: './backendErrorMessages.html',
    styleUrls: ['./backendErrorMessages.scss'],
})
export class BackendErrorMessagesComponent implements OnInit {
    @Input('backendErrors') backendErrorsProps: BackendErrorsInterface;

    errorMessages: string[];

    ngOnInit(): void {
        this.errorMessages = Object.entries(this.backendErrorsProps).map(
            ([key, value]) => `${key} ${value.join(', ')}`
        );
    }
}