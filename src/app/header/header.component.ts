import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    menu: any[] = [
    {
      "subitem": "Service 1"
    },
    {
      "subitem": "Service 2"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
