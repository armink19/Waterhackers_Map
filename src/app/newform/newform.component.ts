import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {FormArray, FormGroup} from '@angular/forms';
import {SampleService} from '../services/sample.service';
import {Router} from '@angular/router';
import {Sample} from '../sample';
import {DatePipe} from '@angular/common';
import {Point} from '../point';
import {Observable} from 'rxjs';

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

  message = '';

  fileInfos: Observable<any>;

  constructor(private sampleService: SampleService , private router: Router) { }
 date = new Date();
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
          key: 'datepicker',
          type: 'input',

          defaultValue: this.date.toLocaleDateString('en-CA'),
          templateOptions: {

            type: 'date',

            required: true,
            attributes: {
              style: 'text-indent:50px',
            },

            },

        }
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
            maxLength: 100,
            attributes: {
              style: 'height:80px'
            }
          },
        },

        {
          key: 'watersource',
          type: 'select',
          templateOptions: {
            type: 'select',
            placeholder: 'Watersource',
            options: [
              {label: 'River', id: 'river', value: 'River'},
              {label: 'Lake', id: 'lake', value: 'Lake'},
              {label: 'Rain', id: 'rain', value: 'Rain'},
              {label: 'Tap', id: 'tap', value: 'Tap'},

            ],
required: true
          },
        }, {
          key: 'river',
          type: 'select',
          templateOptions: {
            type: 'select' ,
            placeholder: 'River Name',
            options: [
              {label: 'Moselle', id: 'moselle', value: 'Moselle'},
              {label: 'Sauer', id: 'sauer', value: 'Sauer'},
              {label: 'Black Ernz', id: 'blackernz', value: 'Black Ernz'},
              {label: 'White Ernz', id: 'whiteernz', value: 'White Ernz'},
              {label: 'Our', id: 'our', value: 'Our'},
              {label: 'Blees', id: 'blees', value: 'Blees'},
              {label: 'Alzette', id: 'alzette', value: 'Alzette'},
              {label: 'Wark', id: 'wark', value: 'Wark'},
              {label: 'Attert', id: 'attert', value: 'Attert'},
              {label: 'Eisch', id: 'eisch', value: 'Eisch'},
              {label: 'Mamer', id: 'mamer', value: 'Mamer'},
              {label: 'Pétrusse', id: 'petrusse', value: 'Petrusse'},
              {label: 'Mess', id: 'mess', value: 'Mess'},
              {label: 'Wiltz', id: 'wiltz', value: 'Wiltz'},
              {label: 'Clerve', id: 'clerve', value: 'Clerve'},
              {label: 'Syre', id: 'syre', value: 'Syre'},
              {label: 'Gander', id: 'gander', value: 'Gander'},

            ],

          },
          hideExpression: 'model.watersource!="River"'
        }, {
          key: 'lake',
          type: 'select',
          templateOptions: {
            type: 'select' ,
            placeholder: 'Lake Name',
            options: [
              {label: 'Remerschen Baggerweier', id: 'remerschenbaggerweier', value: 'Remerschen Baggerweier'},
              {label: 'Upper Sûre Lake ', id: 'uppersurelake', value: 'Upper Sure Lake'},
              {label: 'Weiswampach Lake', id: 'weiswampachlake', value: 'Weiswampach Lake '},




            ],

          },
          hideExpression: 'model.watersource!="Lake"'
        },
        {
          key: 'location',
          type: 'input',
          id: 'location-input-section',
          templateOptions: {

            placeholder: 'Location',
            required: true,
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
    this.sampleService.createSample(this.sample, this.selectedFiles.item(0))
      .subscribe(data => console.log(data), error => console.log(error));
    this.sample = new Sample();
  }

  submit() {
    const temp = JSON.stringify(this.model);
    const values = JSON.parse(temp);

    this.sample.date = values.datepicker;
    this.sample.time = values.time;
    this.sample.description = values.description;
    this.sample.address = values.location;
    this.sample.latitude = this.point.lat;
    this.sample.longitude = this.point.lng;
    this.sample.watersource = values.watersource;
    this.sample.temperature = values.temperature;
    this.sample.ph = values.ph;
    this.sample.dissolvedoxygen = values.dissolvedoxygen;
    this.sample.turbidity = values.turbidity;
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

  ngOnInit(): void {

   this.locate();



    }


}
