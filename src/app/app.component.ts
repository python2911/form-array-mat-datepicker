import { Component, VERSION } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  public myForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      quantities: this.fb.array([]),
    });
  }

  ngOnInit() {
    this.addRow();
  }

  addRow() {
    const quantArr = this.myForm.controls['quantities'] as FormArray;

    quantArr.push(
      this.fb.group({
        myDt: new FormControl(),
        myQty: 0,
      })
    );
  }

  quantities() {
    return this.myForm.get('quantities') as FormArray;
  }

  removeRow(formId: any) {
    (<FormArray>this.myForm.controls['quantities']).removeAt(formId);
  }

  onSubmit() {
    console.log(this.myForm.controls['quantities'].value);
  }
}
