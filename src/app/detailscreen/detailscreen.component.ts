import { Component, OnInit } from '@angular/core';
import {Sample} from '../sample';
import {ActivatedRoute, Router} from '@angular/router';
import {SampleService} from '../services/sample.service';

@Component({
  selector: 'app-detailscreen',
  templateUrl: './detailscreen.component.html',
  styleUrls: ['./detailscreen.component.css']
})

export class DetailscreenComponent implements OnInit {

  id: number;
  sample: Sample;
  imageUrl: String;


  constructor(private route: ActivatedRoute, private router: Router,
              private sampleService: SampleService) { }

  ngOnInit() {
    this.sample = new Sample();

    this.id = this.route.snapshot.params[`id`];

    this.sampleService.getSample(this.id)
      .subscribe(data => {
        console.log(data);
        this.sample = data;
        this.imageUrl = SampleService.getBackendUrl() + '/' + data.id + '/photo';
      }, error => console.log(error));

  }



  grid() {
    this.router.navigate(['imagegrid']);
  }

  map() {
    this.router.navigate(['/']);
  }



}
