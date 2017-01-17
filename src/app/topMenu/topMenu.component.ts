import { Component } from '@angular/core';
@Component({
    selector: 'qu-top-menu',
    template: `
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <ul class="nav navbar-nav">
                <li routerLink="/new" routerLinkActive="active">
                    <a href="#" (click)="falseClick()">New</a>
                </li>
                <li routerLink="/random" routerLinkActive="active">
                    <a href="#" (click)="falseClick()">Random</a>
                </li>
                <li routerLink="/best" routerLinkActive="active">
                    <a href="#" (click)="falseClick()">Best</a>
                </li>
                <li routerLink="/add" routerLinkActive="active">
                    <a href="#" (click)="falseClick()">Add</a>
                </li>
            </ul>
        </div>
    </nav>
    `
})
export class TopMenuComponent {
    public falseClick(): boolean {
        return false;
    }
}
