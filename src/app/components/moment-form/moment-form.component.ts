import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';

import { Moment } from 'src/app/Moment';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css'],
})
export class MomentFormComponent implements OnInit {
  @Input() btnText!: string;
  @Output() onSubmit = new EventEmitter<Moment>();

  @Input() momentData: Moment | null = null;


  imageURL!: string;
  momentForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.momentForm = this.fb.group({
      avatar: [null],
      name: [''],
    });
  }

  ngOnInit(): void {
    this.momentForm = new FormGroup({
      id: new FormControl(this.momentData ? this.momentData.id : ''),
      title: new FormControl(this.momentData? this.momentData.title : '', [Validators.required]),
      description: new FormControl(this.momentData ? this.momentData.description : '', [Validators.required]),
      image: new FormControl( this.momentData ? this.imageURL = this.momentData.image : ''),
    });
  }

  get title() {
    return this.momentForm.get('title')!;
  }

  get description() {
    return this.momentForm.get('description')!;
  }

  showPreview(event: any) {
    const file = (event.target as HTMLInputElement).files![0];

    this.momentForm.get('image')?.updateValueAndValidity();

    const reader = new FileReader();
    reader.onload = () => {
      this.momentForm.patchValue({
        image: this.imageURL = reader.result as string,
      });
    };

    reader.readAsDataURL(file);
  }

  submit() {
    if (this.momentForm.invalid) {
      return;
    }
    console.log(this.momentForm.value);

    this.onSubmit.emit(this.momentForm.value);

  }
}
