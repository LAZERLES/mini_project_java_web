import {Component, OnInit} from '@angular/core';
import { NgbModal,NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';


interface Country {
  name: string;
  flag: string;
  area: number;
  population: number;
}

const COUNTRIES: Country[] = [
  {
    name: 'Russia',
    flag: 'f/f3/Flag_of_Russia.svg',
    area: 17075200,
    population: 146989754
  },
  {
    name: 'Canada',
    flag: 'c/cf/Flag_of_Canada.svg',
    area: 9976140,
    population: 36624199
  },
  {
    name: 'United States',
    flag: 'a/a4/Flag_of_the_United_States.svg',
    area: 9629091,
    population: 324459463
  },
  {
    name: 'China',
    flag: 'f/fa/Flag_of_the_People%27s_Republic_of_China.svg',
    area: 9596960,
    population: 1409517397
  }
];

@Component({
  selector: 'app-regular',
  templateUrl: './regular.component.html',
  styles: []
})
export class RegularComponent implements OnInit {

  heading = 'Regular Tables';
  subheading = 'Tables are the backbone of almost all web applications.';
  icon = 'pe-7s-drawer icon-gradient bg-happy-itmeo';

  constructor(private httpClient:HttpClient, private modalService: NgbModal) {
    this.getData();
  }

  countries: any = {};

  getData(){
    this.httpClient.get('http://localhost:8083/api/getData').subscribe((res: any) => {
      this.countries = res;
      console.log(res);
    });
  }

  ngOnInit() {
  }

  name = new FormControl("");
  area = new FormControl(0);
  population = new FormControl(0);
  flag = new FormControl(0);
  countryId = new FormControl(0);

  save(){
    let country = {name:this.name.value, area:this.area.value, population:this.population.value, countryId:this.countryId.value, flag:this.flag.value}
    this.httpClient.post('http://localhost:8083/api/country/save',country).subscribe((res: any) => {
      this.getData();
    });
  }

  delete(countryId: number){
    this.httpClient.get('http://localhost:8083/api/country/delete?countryId='+countryId).subscribe((res: any)=> {
      this.getData();
    });
  }

  open(content: any, name: string, area: number, population: number, flag: string, countryId: number){
    this.name.setValue(name);
    this.area.setValue(area);
    this.population.setValue(population);
    this.flag.setValue(flag);
    this.countryId.setValue(countryId);
    let ngbModalOptions: NgbModalOptions = {
      backdrop: false,
      keyboard: true

    };
    this.modalService.open(content, ngbModalOptions).result.then((result) => {

    },(reason) =>{

    });
  }

}
