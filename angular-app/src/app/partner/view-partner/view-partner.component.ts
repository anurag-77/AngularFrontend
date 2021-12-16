import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Routes, RouterModule } from '@angular/router';
import { Partner } from "../../models/partner";
import { baseURL } from "../../baseurl";
import { CreatePartnerComponent } from "../create-partner/create-partner.component";

@Component({
  selector: 'app-view-partner',
  templateUrl: './view-partner.component.html',
  styleUrls: ['./view-partner.component.css']
})


export class ViewPartnerComponent implements OnInit {
  partners: Array<Partner> = [];

  lstheaderList: Array<string> = [];

  selectedPartner?: Partner;

  editPartner(partner: Partner): void {
    this.selectedPartner = partner;
  }

  deletePartner(partner: Partner): void {
    this.http.post<Partner>(`${baseURL}/api/partner/deletesinglepartner`, partner).subscribe(Response => {
      // console.log(Response)
      partner = Response;
    });
    window.location.reload();
  }

  viewEmployees() : void {
    this.http.get<Array<any>>(`${baseURL}/api/partner/getpartners`).subscribe(Response => {
  
      // for (let index = 0; index < Response.length; index++) {
      //   let myObj: {[index: string]:any} = {}
      //   myObj = Response[index];
      //   this.employees.push(myObj);
      // }

      this.partners = Response;

      this.lstheaderList = Object.keys(Response[0]);
      
    })
  }

  constructor(private http : HttpClient) {

  }

  ngOnInit(): void {
    setTimeout(() => {
      this.viewEmployees();
    },10)
  }

}
