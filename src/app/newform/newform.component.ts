import { Component, OnInit } from '@angular/core';
import {FormlyFieldConfig, FormlyFormOptions} from '@ngx-formly/core';
import {FormArray, FormGroup} from '@angular/forms';
export interface StepType {
  label: string;
  fields: FormlyFieldConfig[];
}
@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent {
 date = new Date();

  constructor() { }


  activedStep = 0;

  model = {};
  steps: StepType[] = [
    {
      label: 'Step one',
      fields: [
        {
          key: 'picture',
          type: 'input',
          id: 'picture',
          templateOptions: {
            placeholder: 'Picture',
            type: 'file',

            required: true,
            accept: 'image/*'

          },
        },
        {
          key: 'time',
          type: 'input',
          defaultValue: this.date.getHours() + ':' + this.date.getMinutes(),
          templateOptions: {
            type: 'time',
            placeholder: 'Time',
            required: true,
          },
        },
        {
          key: 'Datepicker',
          type: 'datepicker',

          defaultValue: new Date(),
          templateOptions: {



            required: true,
          }, }
      ],
    },

    {
      label: 'Step two',
      fields: [
        {
          key: 'description',
          type: 'input',
          templateOptions: {
            placeholder: 'Description',
            required: true,
          },
        },
        {
          key: 'address',
          type: 'input',
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
              {label: 'Stream', id: 'stream', value: 'stream'},
              {label: 'Pond', id: 'pond', value: 'pond'},
              {label: 'Rain', id: 'rain', value: 'rain'},
              {label: 'Tap', id: 'tap', value: 'tap'},

            ],
required: true
          },
        },
      ],
    },

    {
      label: 'Step tree',
      fields: [
        {
          key: 'temperature',
          type: 'input',
          templateOptions: {
            placeholder: 'Temperature',
            required: true,
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
              {label: '5,5', id: '5,5', value: '5,5'},
              {label: '6', id: '6', value: '6'},
              {label: '6,5', id: '6,5', value: '6,5'},
              {label: '7', id: '7', value: '7'},
              {label: '7,5', id: '7,5', value: '7,5'},
              {label: '8', id: '8', value: '8'},
              {label: '8,5', id: '8,5', value: '8,5'},
              {label: '9', id: '9', value: '9'},
              {label: '9,5', id: '9,5', value: '9,5'},
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
          },
        },
        {
          key: 'turbidity',
          type: 'input',
          templateOptions: {

            placeholder: 'Turbidity',
            required: true,
          },
        },
      ],
    },
    {
      label: 'Well done',
      fields: [

      ],
    },
  ];

  form = new FormArray(this.steps.map(() => new FormGroup({})));
  options = this.steps.map(() => <FormlyFormOptions> {});

  prevStep(step) {
    this.activedStep = step - 1;
  }

  nextStep(step) {
    this.activedStep = step + 1;
  }

  submit() {
    alert(JSON.stringify(this.model));

  }
}
