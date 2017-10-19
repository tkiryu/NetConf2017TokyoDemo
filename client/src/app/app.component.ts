import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    title = 'app';

    values: string[];

    constructor(private _httpClient: HttpClient) { }

    ngOnInit() {
        this._httpClient.get<string[]>('/api/values')
            .subscribe(response => this.values = response);
    }
}
