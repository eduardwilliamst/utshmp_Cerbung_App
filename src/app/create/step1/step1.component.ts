import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CerbungserviceService } from '../../cerbungservice.service';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss'],
})
export class Step1Component {

  genres: any[] = [];

  cerbung: {
    id: number;
    title: string;
    shortDescription: string;
    imageCover: string;
    genre: string;
    accessControl: String;
    firstParagraph: String;
    by: String;
    like: number;
    paragraphs: number;
  } = {
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

  selectedGenre: string = '';

  constructor(private router: Router, private cerbungservice: CerbungserviceService) {
    this.cerbung = this.cerbungservice.getStep1Data() || {
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

  ngOnInit() {
    this.genres = this.cerbungservice.genres;
    const lastId = this.cerbungservice.cerbungData[this.cerbungservice.cerbungData.length - 1].id;

    this.cerbung.id = lastId + 1;
    this.cerbung.like = 0;
    this.cerbung.by= 'User1';
    this.cerbung.paragraphs= 0;
  }

  nextStep() {
    this.cerbung.genre = this.selectedGenre;
    console.log('Selected Genre:', this.selectedGenre); // Log selected genre
    this.cerbungservice.setStep1Data(this.cerbung);
    console.log('Step 1 Cerbung Data:', this.cerbung); // Log cerbung data
    this.router.navigate(['/create/step2'], { state: { cerbung: this.cerbung } });
  }
}
