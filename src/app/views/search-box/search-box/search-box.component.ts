import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/alert/alert.service';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss'],
})
export class SearchBoxComponent implements OnInit {
  private input: string;
  constructor(private alertService: AlertService, private router: Router) {}

  ngOnInit() {}

  handleOnChange(e) {
    this.input = e.target.value;
  }

  handleOnClick() {
    if (!this.input) {
      this.alertService.error('Keyword may not be null', {
        id: 'app-alert',
        autoClose: true,
      });
      return;
    }
    this.navigateTo('/profile', { keyword: this.input });
  }

  navigateTo(url: string, data?) {
    this.router.navigateByUrl(url, {
      state: { data },
    });
  }
}
