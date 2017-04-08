import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    moduleId: module.id,
    templateUrl: 'register.component.html',
})
export class RegisterComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
    }
}