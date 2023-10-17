import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CerbungserviceService } from '../cerbungservice.service';

@Component({
  selector: 'app-cerbungdetail',
  templateUrl: './cerbungdetail.page.html',
  styleUrls: ['./cerbungdetail.page.scss'],
})
export class CerbungdetailPage implements OnInit {

  // cerbung!: { title: string, content: string };

  cerbungs:any;

  constructor(private cerbungservice: CerbungserviceService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const cerbungId = params.get('id');

      // Cari cerbung yang sesuai berdasarkan id
      this.cerbungs = this.cerbungservice.cerbungData.find(c => c.id.toString() === cerbungId);
    });
  }

}
