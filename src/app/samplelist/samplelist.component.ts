import { Component, OnInit } from '@angular/core';
import {SampleService} from '../services/sample.service';
import {Observable} from 'rxjs';
import {Sample} from '../sample';
import {Router} from '@angular/router';

@Component({
  selector: 'app-samplelist',
  templateUrl: './samplelist.component.html',
  styleUrls: ['./samplelist.component.css']
})
export class SamplelistComponent implements OnInit {

  samples: Observable<Sample[]>;

  constructor(private sampleService: SampleService,
              private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.samples = this.sampleService.getSampleList();
  }

  /*deleteEmployee(id: number) {
    this.sampleService.deleteSample(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }*/

  sampledetails(id: number) {
    this.router.navigate(['details', id]);
  }
}
