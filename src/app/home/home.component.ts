import { Component } from '@angular/core';
import { MdIconRegistry, MdDialog } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';



@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],

})
export class HomeComponent {

  users = [
    {
      name: 'Setup',
      icon: 'settings',
      avatar: 'svg-11',
      url: '/setup',
    },
    {
      name: 'Profile',
      avatar: 'svg-12',
      icon: 'account_circle',
      url: '/profile',
    },
    {
      name: 'Calendar',
      avatar: 'svg-12',
      icon: 'perm_contact_calendar',
      url: '/register',
    },
    {
      name: 'Purchase',
      avatar: 'svg-12',
      icon: 'payment',
      url: '/register',
    }
  ];

  selectedUser = this.users[0];
  isDarkTheme = false;

  constructor(iconRegistry: MdIconRegistry, sanitizer: DomSanitizer, private dialog: MdDialog) {
    // To avoid XSS attacks, the URL needs to be trusted from inside of your application.
    const avatarsSafeUrl = sanitizer.bypassSecurityTrustResourceUrl('./assets/avatars.svg');

    iconRegistry.addSvgIconSetInNamespace('avatars', avatarsSafeUrl);
  }

  private openAdminDialog() {
    // this.dialog.open(DialogComponent).afterClosed()
    //   .filter(result => !!result)
    //   .subscribe(user => {
    //     this.users.push(user);
    //     this.selectedUser = user;
    //   });
  }

}
