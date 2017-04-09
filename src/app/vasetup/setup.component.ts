import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    templateUrl: 'setup.component.html',
    styleUrls: ['./setup.component.css']
})
export class SetupComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
    }
}