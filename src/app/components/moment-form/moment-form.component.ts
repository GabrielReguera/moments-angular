import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css'],
})
export class MomentFormComponent implements OnInit {
  @Input() btnText!: string;

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
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('')
    })
  }

  get title(){
    return this.momentForm.get('title')!;
  }

  get description(){
    return this.momentForm.get('description')!;
  }
  
  showPreview(event: any) {
    const file = (event.target as HTMLInputElement).files![0];
    this.momentForm.patchValue({
      avatar: file
    });
    this.momentForm.get('avatar')?.updateValueAndValidity()
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file);
  }

  submit(){
    if(this.momentForm.invalid){
      return;
    }
  }
}
