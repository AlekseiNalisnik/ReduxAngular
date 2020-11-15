import { Component, OnInit } from "@angular/core";
import { Observable } from 'rxjs';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { Store, select } from '@ngrx/store';
import { isLoggedInSelector, isAnonymousSelector, currentUserSelector } from 'src/app/auth/store/selectors';

@Component({
    selector: 'redux-topBar',
    templateUrl: './topBar.component.html',
    styleUrls: ['./topBar.component.scss'],
})
export class TopBarComponent implements OnInit {
    public isLoggedIn$: Observable<boolean>;
    public isAnonymous$: Observable<boolean>;
    public currentUser$: Observable<CurrentUserInterface | null>;

    constructor(private readonly store: Store) { }

    public ngOnInit(): void {
        this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
        this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector));
        this.currentUser$ = this.store.pipe(select(currentUserSelector));
    }
}