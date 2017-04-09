import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
    templateUrl: 'profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

    constructor(
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
    }
}