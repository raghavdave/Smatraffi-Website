import { Component, OnInit } from '@angular/core';
import { DashboardService } from "../dashboard.service";
import { ActivatedRoute } from "@angular/router";
import { Location } from "@angular/common";
import { Junction } from "../junction";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  //Coordinates around which the map will be centered
  centerLat: number = 28.6207298;
  centerLng: number = 77.227523;
  junctions: Junction[] = [];   //Array of junctions from API call
  userToken: string = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzdmZTEzMjQwMDNhOTAwMTdhYzJhZWEiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTUxODk5MTE1fQ.vt9o3jTNN98KnEnuibZd6j5YYk7Zhub-aCFkm36hWTY";

  constructor(
    private dashboardService: DashboardService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.getJunctions();
  }

  getJunctions(): void {
    //TODO: Implement this after routing. Pass the token via params
    // const id = this.route.snapshot.paramMap.get('id');
    // this.dashboardService.getLocations(id).subscribe(
    //   data => console.log(data)
    // );
    this.dashboardService.getJunctions(this.userToken).subscribe(
      data => this.junctions = data);
  }
}
