import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CerbungserviceService } from '../../cerbungservice.service';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss'],
})
export class Step3Component {
  cerbung = {
    id: 0,
    title: '',
    shortDescription: '',
    imageCover: '',
    genre: '',
    accessControl: '',
    firstParagraph: '',
    agreeToRules: false,
    by: 'User1',
    like: 32,
    paragraphs: 8,
  };

  constructor(private router: Router, private cerbungservice: CerbungserviceService) {
    this.cerbung = { ...this.cerbungservice.getStep1Data(), ...this.cerbungservice.getStep2Data() };
  }

  prevStep() {
    this.router.navigate(['create', 'step2']);
  }

  publishCerbung() {
    // Add code to publish the cerbung
    console.log('Cerbung published:', this.cerbung);
    // You can send the cerbung data to your server or perform any necessary actions here
  }

  saveCerbung() {
    // Pastikan data cerbung diisi dengan benar
    if (this.isCerbungValid(this.cerbung)) {
      // Panggil layanan untuk menyimpan cerbung
      this.cerbungservice.saveCerbung(this.cerbung);

      // Redirect pengguna ke halaman lain setelah penyimpanan berhasil
      this.router.navigate(['/home']);
    } else {
      // Tampilkan pesan kesalahan jika data tidak valid
      alert('Silakan isi semua kolom dengan benar sebelum menyimpan cerbung.');
    }
  }

  private isCerbungValid(cerbung: any): boolean {
    // Tambahkan logika validasi sesuai kebutuhan
    // Contoh: Pastikan semua properti yang diperlukan telah terisi dengan benar
    return cerbung.title && cerbung.shortDescription && cerbung.imageCover && cerbung.genre && cerbung.firstParagraph;
  }
}
