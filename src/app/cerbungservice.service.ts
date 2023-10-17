import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CerbungserviceService {

  step1Data: any = {};
  step2Data: any = {};

  setStep1Data(data: any) {
    this.step1Data = data;
  }

  setStep2Data(data: any) {
    this.step2Data = data;
  }

  getStep1Data() {
    return this.step1Data;
  }

  getStep2Data() {
    return this.step2Data;
  }

  cerbungData: any[] = [
    {
      id: 1,
      title: 'Selamat Dari Tumbal Pesugihan ',
      shortDescription: 'Aqila harus mengahadapi kenyataan kehilangan anggota keluarganya satu-persatu, akibat pesugihan. Entah siapa yang tega melakukan itu. Dia hanya bisa bertahan, dan berusaha selamat dari jeratan pesugihan.',
      genre: 'Horor',
      imageCover: 'https://img.wattpad.com/cover/241719476-416-k923397.jpg',
      by: 'Ramdan_Nahdi',
      like: 40,
      paragraphs: 13,
      accessControl: "public",
      firstParagraph: "ini first paragraph",
    },
    {
      id: 2,
      title: 'FRIENDSHIT',
      shortDescription: 'Hanya kehidupan sehari-hari tentang Kana, cewek super pemales yang tidak mau melakukan semua hal karena dianggap repot. Keseharian Arlan, cowok terlalu rajin yang mau melakukan semua hal yang Kana anggap repot. Juga orang-orang di sekitar mereka, yang tidak percaya dan seringkali dibuat jengkel karena Arlan dan Kana yang tidak peka pada perasaan mereka. Friendship or FRIENDSHIT?!!',
      genre: 'Aksi',
      imageCover: 'https://img.wattpad.com/cover/123301262-512-k856099.jpg',
      by: 'QueenNakey',
      like: 32,
      paragraphs: 8,
      accessControl: "public",
      firstParagraph: "ini first paragraph",
    },
    {
      id: 3,
      title: 'Stand Up Comedy',
      shortDescription: 'Cerita seorang komika wanita yang sangat humoris!!',
      genre: 'Comedy',
      imageCover: 'https://img.wattpad.com/cover/62961295-416-k158891.jpg',
      by: 'NB_Moonlight',
      like: 51,
      paragraphs: 5,
      accessControl: "public",
      firstParagraph: "ini first paragraph",
    },
  ];


  saveCerbung(cerbung: any) {
    
    this.cerbungData.push(cerbung);
  }

  genres: string[] = ['Horror', 'Comedy', 'Aksi'];

  constructor() { }
}
