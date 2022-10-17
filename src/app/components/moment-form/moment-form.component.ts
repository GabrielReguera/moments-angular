import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-moment-form',
  templateUrl: './moment-form.component.html',
  styleUrls: ['./moment-form.component.css'],
})
export class MomentFormComponent implements OnInit {
  @Input() btnText!: string;

  imageURL!: string;
  uploadForm: FormGroup;

  constructor(public fb: FormBuilder) {
    this.uploadForm = this.fb.group({
      avatar: [null],
      name: [''],
    });
  }

  ngOnInit(): void {}

  showPreview(event: any) {
    const file = (event.target as HTMLInputElement).files![0];
    this.uploadForm.patchValue({
      avatar: file
    });
    this.uploadForm.get('avatar')?.updateValueAndValidity()
    const reader = new FileReader();
    reader.onload = () => {
      this.imageURL = reader.result as string;
    }
    reader.readAsDataURL(file);
  }
}
