import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() name: string | undefined;

  isOpen = false;
  isDropdownOpen = false;
  constructor() { }

  ngOnInit() {
    this.getData();
  }

  toggleNavbar() {
    this.isOpen = !this.isOpen;
  }

  toggleDropDown() {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  getData() {
   
  }
}
