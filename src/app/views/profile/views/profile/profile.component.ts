import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Profile } from '../../models/profile.models';
// import { ProfileService } from '../../services/profile.service';
import { ProfileState, selectProfile } from '../../store';
import * as fromAction from '../../store/profile.actions';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  history: any;
  profile$: Observable<Profile>;
  constructor(private store: Store<ProfileState>, private router: Router) {
    this.history = window.history.state;
    if (!this.history.data) {
      this.router.navigate(['**']);
    }
  }

  ngOnInit() {
    this.store.dispatch(fromAction.loadProfiles(this.history.data.keyword));
    // this.store.dispatch(fromAction.loadProfiles('defunkt'));
    this.getProfile();
  }

  getProfile() {
    this.profile$ = this.store.pipe(select(selectProfile));
  }

  handleOnRepo() {
    this.navigateTo('/profile/detail-profile', { keyword: this.history.data.keyword });
    // this.navigateTo('/profile/detail-profile', { keyword: 'defunkt' });
  }

  handleOnBack() {
    this.router.navigate(['/']);
  }

  navigateTo(url: string, data?) {
    this.router.navigateByUrl(url, {
      state: { data },
    });
  }
}
