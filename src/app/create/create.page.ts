import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})

export class CreatePage implements OnInit {

  cerbung = {
    cerbungtitle: '',
    shortdescription: '',
    cerbungimagecover: '',
    choosegenere: '' // Perbaiki penulisan properti di sini
  };

  constructor() { }

  createCerbung() {
    // Lakukan logika untuk membuat cerbung baru di sini
    // Anda dapat mengirim data cerbung ini ke backend melalui layanan HTTP
    console.log('Cerbung baru:', this.cerbung);
  }

  ngOnInit() {
  }
}
