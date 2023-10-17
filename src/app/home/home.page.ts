// home.page.ts

import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CerbungserviceService } from '../cerbungservice.service';
import { AuthService } from '../auth-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  index = 0
  
  cerbungData:any[]=[]

  jenistampilan = 'all';
  isListView = true;
  cerbungDataFiltered: any[] = this.cerbungData;
  searchQuery: string = '';


  constructor(
    private cerbungservice: CerbungserviceService, 
    private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router) { }

  ngOnInit() {

    this.cerbungData=this.cerbungservice.cerbungData

    // Menjalankan filter pertama saat halaman dimuat
    this.route.params.subscribe(params => {
      this.index = params['index'];
    })
    this.filterCerbung();

    this.authService.loggedIn$.subscribe((isLoggedIn) => {
      if (!isLoggedIn) {
        // Setelah logout, refresh halaman saat ini
        this.router.navigate(['.'], { relativeTo: this.route });
      }
    });

  }

  filterCerbung() {
    if (this.jenistampilan === 'all') {
      this.cerbungDataFiltered = this.cerbungData;
      this.isListView = true; // Tampilkan sebagai daftar
    } else {
      this.cerbungDataFiltered = this.cerbungData.filter((cerbung) =>
        cerbung.genre === this.jenistampilan
      );
      this.isListView = false; // Tampilkan sebagai kartu
    }

    if (this.searchQuery.trim() !== '') {
      this.cerbungDataFiltered = this.cerbungDataFiltered.filter((cerbung) =>
        cerbung.title.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        cerbung.shortDescription.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    }
  }

  searchCerbung() {
    this.filterCerbung();
  }
  

}
