import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';
import { Partner } from "../../models/partner";
import { baseURL } from "../../baseurl";
import { Country } from 'src/app/models/country';


@Component({
  selector: 'app-create-partner',
  templateUrl: './create-partner.component.html',
  styleUrls: ['./create-partner.component.css']
})
export class CreatePartnerComponent implements OnInit {
  lstCountriesList: Array<string> = [];

  Id?: string;

  strPartner?: string;

  strResponse?: string;

  partner: Partner = {
        UniqueID: "",
        partnerName: "",
        country: "",
        countryId: "",
        address: "",
        phoneno: "",
        conPerson: "",
        conPersonEmail: "",
        conPersonPhone: "",
        website: "",
        createdBy: "",
        createdDate: "",
        isActive: 1,
  };

  getRandomInt() {
      return `${Math.floor(Math.random() * (Math.floor(9999) - Math.ceil(1) + 1)) + Math.ceil(1)}`;
  }

  submitPartner(partner: Partner): void {
    debugger;

    if(partner.UniqueID == "" || partner.UniqueID == null){
      partner.createdDate = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`;
    }

    this.strPartner = JSON.stringify(partner);


    const headers = { 'content-type': 'application/json'};

    debugger;

    try {
      this.http.post<string>(`${baseURL}/api/partner/addpartner/`, this.strPartner, {headers: headers}).subscribe(data => {
        this.strResponse = data;
      });
    } catch (error) {
      console.error();
    }

  }

  constructor(private http : HttpClient, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe(params => {
    // this.Id = params.get('id'); 
    //   console.log(params.get('id'));
    // })

    var urlparams = window.location.href.split("/");

    if(urlparams.length > 4)
    {
      this.Id = urlparams[urlparams.length - 1];

      this.http.get<Partner>(`${baseURL}/api/partner/getsinglepartner/${this.Id}`).subscribe(Response => {
        this.partner = Response;
      })
    }

    this.http.get<Array<Country>>(`${baseURL}/api/partner/getcountries`).subscribe(Response => {
      // this.lstCountriesList = Response;

      Response.forEach(element => {
        this.lstCountriesList.push(element.CountryName);
      });
    })
  }

}
