import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'account',
    templateUrl: 'account.component.html',
    styleUrls: ['account.component.scss']
})
export class AccountComponent implements OnInit {
    title = 'Account Rocks';
    constructor() { }

    ngOnInit() { }

}