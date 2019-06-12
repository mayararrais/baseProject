import { Component } from "@angular/core";

@Component({
    selector: 'app-lista-sono',
    templateUrl: './app-lista-sono.component.html',
    styleUrls: ['./app-lista-sono.component.css']
})
export class AppListaSonoComponent {
    people: any[] = [
        {
            name: 'Amanda',
            age: 17,
            level: 'G'
        },
        {
            name: 'Mayara',
            age: 25,
            level: 'M'
        },
        {
            name: 'Toguro',
            age: 1,
            level: 'G'
        },
        {
            name: 'Gabriel',
            age: 34,
            level: 'M'
        },
        {
            name: 'Vanessa',
            age: 32,
            level: 'P'
        },
        {
            name: 'Doguinho',
            age: 2,
            level: 'D'
        }
    ];
}
