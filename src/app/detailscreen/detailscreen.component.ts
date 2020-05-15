import { Component, OnInit } from '@angular/core';
import {Sample} from '../sample';
import {ActivatedRoute, Router} from '@angular/router';
import {SampleService} from '../services/sample.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-detailscreen',
  templateUrl: './detailscreen.component.html',
  styleUrls: ['./detailscreen.component.css']
})

export class DetailscreenComponent implements OnInit {

  id: number;
  sample: Sample;


  constructor(private route: ActivatedRoute, private router: Router,
              private sampleService: SampleService) { }

  ngOnInit() {
    this.sample = new Sample();

    this.id = this.route.snapshot.params[`id`];

    this.sampleService.getSample(this.id)
      .subscribe(data => {
        console.log(data);
        this.sample = data;
      }, error => console.log(error));

  }

  list() {
    this.router.navigate(['samples']);
  }

  map() {
    this.router.navigate(['/']);
  }


}
