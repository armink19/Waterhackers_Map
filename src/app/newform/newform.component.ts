import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {FormArray, FormGroup} from '@angular/forms';
import {GeocodingService} from '../services/geocoding.service';
import {SampleService} from '../services/sample.service';
import {UploadFileService} from '../services/upload-file.service';
import {Router} from '@angular/router';
import {Sample} from '../sample';
import {DatePipe} from '@angular/common';
import {Point} from '../point';
import {Observable} from 'rxjs';
import {HttpEventType, HttpResponse} from '@angular/common/http';

export interface StepType {
  label: string;
  fields: FormlyFieldConfig[];

}



@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent implements OnInit {

  sample: Sample = new Sample();
 point: Point = new Point();
  pipe = new DatePipe('en-US');
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  message = '';

  fileInfos: Observable<any>;

  constructor(private sampleService: SampleService , private uploadService: UploadFileService , private router: Router) { }
 date = new Date();
 formatteddate =  this.pipe.transform(this.date, 'dd/MM/yyyy');
 formattedtime = this.pipe.transform(this.date, 'HH:mm');

  activedStep = 0;

  model = {};
  steps: StepType[] = [
    {
      label: '',
      fields: [
     /*   {

          key: 'picture',
          type: 'input',
          id: 'picture',

          templateOptions: {

            placeholder: 'Picture',
            type: 'file',
            URL: 'http://localhost:8080/api/v1/files' ,
            required: true,
            attributes: {
              style: ''

            },
            accept: '.jpg',
            icon: 'assets/camera.svg'
          },

        },*/
        {
          key: 'time',
          type: 'input',
          defaultValue: this.formattedtime,
          templateOptions: {
            type: 'time',
            placeholder: 'Time',
            required: true,
            attributes: {
              style: 'text-indent:60px'
            }
          },
        },
        {
          key: 'Datepicker',
          type: 'datepicker',

          defaultValue: this.date,
          templateOptions: {

            type: 'date',

            required: true,
            attributes: {
              style: 'text-indent:100px'
            }
          }, }
      ],
    },

    {
      label: '',
      fields: [
        {
          key: 'description',
          type: 'textarea',
          id: 'description',

          templateOptions: {
            placeholder: 'Description',
            required: true,
            attributes: {
              style: 'height:80px'
            }
          },
        },
        {
          key: 'address',
          type: 'input',
          id: 'location-input-section',
          templateOptions: {

            placeholder: 'Address',
            required: true,
          },
        },
        {
          key: 'watersource',
          type: 'select',
          templateOptions: {
            type: 'select',
            placeholder: 'Watersource',
            options: [
              {label: 'Stream', id: 'stream', value: 'Stream'},
              {label: 'Pond', id: 'pond', value: 'Pond'},
              {label: 'Rain', id: 'rain', value: 'Rain'},
              {label: 'Tap', id: 'tap', value: 'Tap'},

            ],
required: true
          },
        },
      ],
    },

    {
      label: '',
      fields: [
        {
          key: 'temperature',
          type: 'input',
          templateOptions: {
            placeholder: 'Temperature',
            required: true,
            type: 'number'
          },

        },
        {
          key: 'ph',
          type: 'select',

          templateOptions: {

            options: [
              {label: '4', id: '4', value: '4'},
              {label: '4,5', id: '4,5', value: '4.5'},
              {label: '5', id: '5', value: '5'},
              {label: '5,5', id: '5,5', value: '5.5'},
              {label: '6', id: '6', value: '6'},
              {label: '6,5', id: '6,5', value: '6.5'},
              {label: '7', id: '7', value: '7'},
              {label: '7,5', id: '7,5', value: '7.5'},
              {label: '8', id: '8', value: '8'},
              {label: '8,5', id: '8,5', value: '8.5'},
              {label: '9', id: '9', value: '9'},
              {label: '9,5', id: '9,5', value: '9.5'},
              {label: '10', id: '10', value: '10'},

            ],
            placeholder: 'pH',
            required: true
          },
        },
        {
          key: 'dissolvedoxygen',
          type: 'input',
          templateOptions: {
            placeholder: 'Dissolved oxygen',
            required: true,
            type: 'number',
            min: 0
          },
        },
        {
          key: 'turbidity',
          type: 'input',

          templateOptions: {

            placeholder: 'Turbidity',
            required: true,
            type: 'number',
            min: 0,
            max: 100,
            pattern: /^[0-9][0-9]?$|^100$/,
          }, expressionProperties: {
            'templateOptions.min': 'formState.changed ? 500 : 0',
            'templateOptions.max': 'formState.changed ? 510 : 100'
          },
          validation: {
            messages: {
              pattern: (error, field: FormlyFieldConfig) => `"${field.formControl.value}" is not a valid Turbidity value.
              \n Value must be between 0 and 100`,
            },
          },
        },
      ],
    },

  ];

  form = new FormArray(this.steps.map(() => new FormGroup({})));
  options = this.steps.map(() => <FormlyFormOptions> {});

  newSample(): void {
    this.sample = new Sample();
  }

  prevStep(step) {

    this.activedStep = step - 1;

  }

  nextStep(step) {

    this.activedStep = step + 1;

  }

  save() {
    this.sampleService.createSample(this.sample)
      .subscribe(data => console.log(data), error => console.log(error));
    this.sample = new Sample();
  }

  submit() {
    const temp = JSON.stringify(this.model);
    const values = JSON.parse(temp);

    this.sample.date = this.date;
    this.sample.time = this.date.getTime();
    this.sample.description = values.description;
    this.sample.address = values.address;
    this.sample.latitude = this.point.lat;
    this.sample.longitude = this.point.lng;
    this.sample.watersource = values.watersource;
    this.sample.temperature = values.temperature;
    this.sample.ph = values.ph;
    this.sample.dissolvedoxygen = values.dissolvedoxygen;
    this.sample.turbidity = values.turbidity;
    this.upload();
    this.save();


    this.router.navigate(['submitted']);
  }
  locate() {
     let self = this;
     (() => {
      navigator.geolocation.getCurrentPosition(function(position) {
          console.log(position.coords.latitude);
          console.log(position.coords.longitude);
          self.point.lat = position.coords.latitude;
          self.point.lng = position.coords.longitude;

        },
        error => {
          console.log('The Locator was denied. :(');
        });
    })();
  }
  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upl(file) {
    this.uploadService.upload(file);
  }

  upload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.message = event.body.message;
          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.message = 'Could not upload the file!';
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }


  ngOnInit(): void {

   this.locate();
   this.fileInfos = this.uploadService.getFiles();

   /*   this.geoLocationService.getPosition().subscribe(
        (pos: Position) => {
          this.coordinates = {
            latitude:  +(pos.coords.latitude),
            longitude: +(pos.coords.longitude),

          };

        });*/

    }


}
