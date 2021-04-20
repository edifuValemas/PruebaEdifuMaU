import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
    servicios: any[] = [
        {
        "servicio": "Criminal Record",
        },
        {
        "servicio": "Credit Report"
        },
        {
        "servicio": "OFAC/ Patriot Act Search"
        },
        {
        "servicio": "Bankruptcies"
        },
        {
        "servicio": "Foreclousers"
        },
        {
        "servicio": "Medical Collections"
        },
        {
        "servicio": "Employment SumaryKnow Aliases"
        },
        {
        "servicio": "Past Address History"
        },
        {
        "servicio": "Sex Offender Search"
        },
        {
        "servicio": "Nationwide Eviction Report"
        },
        {
        "servicio": "Bank Assest Report"
        },
        {
        "servicio": "Credit-Based Resident Score"
        }
        

    ];
    constructor() { }

    ngOnInit(): void {
    }

}
