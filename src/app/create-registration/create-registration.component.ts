import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-registration',
  templateUrl: './create-registration.component.html',
  styleUrls: ['./create-registration.component.scss']
})
export class CreateRegistrationComponent implements OnInit {
  public packages: string[] =[
  "Monthly",
  "Quarterly", 
  "Yearly"];
  public genders: string[] = ["Male", "Female"];
  public imporotantList: string[] =[
    "Toxic Fat reduction",
    "Energy and Endurance",
    "Building Lean Music",
    "Healthier Digestive System",
    "Sugar Craving Body",
    "Fitness"
  ];

  public registerForm!: FormGroup;

  constructor(private fb: FormBuilder){
    
  }
  ngOnInit(): void {
   this.registerForm = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    mobile: [''],
    weight: [''],
    height: [''],
    bmi: [''],
    bmiResult: [''],
    gender: [''],
    requireTrainer: [''],
    package: [''],
    important: [''],
    haveGymBefore: [''],
    enquiryDate: ['']
   });   
  }
  submit() {
    console.log(this.registerForm.value);
       }
}
