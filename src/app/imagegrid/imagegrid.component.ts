import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Sample} from '../sample';
import {SampleService} from '../services/sample.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-imagegrid',
  templateUrl: './imagegrid.component.html',
  styleUrls: ['./imagegrid.component.css']
})
export class ImagegridComponent implements OnInit {

  // TODO get all samples, use their ids to generate their photo/thumbnail urls,
  // insert them into html.
  samples: Observable<Sample[]>;
  backendUrl: String;

  constructor(private sampleService: SampleService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
    this.backendUrl = SampleService.getBackendUrl();
  }

  reloadData() {
    this.samples = this.sampleService.getSampleList();
  }

}
