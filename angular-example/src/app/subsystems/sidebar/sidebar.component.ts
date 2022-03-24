import {Component, HostListener, OnInit} from '@angular/core';
import {PAGES_ROUTE_PATH} from "../pages/pages-urls";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  opened = true;
  disabled = false;
  pagesUrl = PAGES_ROUTE_PATH;

  ngOnInit() {
    this.checkWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.checkWidth();
  }

  checkWidth() {
    if (window.innerWidth <= 1024) {
      this.opened = false;
      this.disabled = true;
    } else if (window.innerWidth > 1024 && this.disabled) {
      this.opened = true;
      this.disabled = false;
    }
  }

  toggleOpened() {
    this.opened = !this.opened;
  }
}
