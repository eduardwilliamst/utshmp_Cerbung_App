import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CerbungserviceService } from '../../cerbungservice.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss'],
})
export class Step2Component {
  cerbung: any;

  constructor(private router: Router, private cerbungservice: CerbungserviceService) {
    this.cerbung = this.cerbungservice.getStep2Data() || {
      id: 0,
      title: '',
      shortDescription: '',
      imageCover: '',
      genre: '',
      accessControl: '',
      firstParagraph: '',
      by: 'User1',
      like: 32,
      paragraphs: 8,
    };
  }

  nextStep() {
    this.cerbungservice.setStep2Data(this.cerbung);
    console.log('Step 2 Cerbung Data:', this.cerbung);
    this.router.navigate(['/create/step3']);
  }

  prevStep() {
    this.router.navigate(['/create/step1']);
  }
}
