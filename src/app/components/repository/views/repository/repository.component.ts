import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
// import { Profile } from 'src/app/views/profile/models/profile.models';
import { selectProfile } from 'src/app/views/profile/store';
import { Repository } from '../../models/repository.models';
import { RepositoryState, selectRepos } from '../../store';
import * as fromAction from '../../store/repository.actions';
import * as fromActionProfile from '../../../../views/profile/store/profile.actions';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
})
export class RepositoryComponent implements OnInit {
  currentPage = 1;
  perPageSize = 5;
  collectionSize = 0;
  history: any;
  repos$: Observable<Repository[]>;
  constructor(private store: Store<RepositoryState>, private router: Router) {
    this.history = window.history.state;
    if (!this.history.data) {
      this.router.navigate(['**']);
    }
  }

  ngOnInit() {
    this.store.dispatch(
      fromAction.loadRepositorys(this.history.data.keyword, this.currentPage, this.perPageSize)
      // fromAction.loadRepositorys('defunkt', this.currentPage, this.perPageSize)
    );
    this.populate();
    this.getUser();
  }

  populate() {
    this.repos$ = this.store.pipe(select(selectRepos));
  }

  async getUser() {
    this.store.dispatch(fromActionProfile.loadProfiles(this.history.data.keyword));
    // this.store.dispatch(fromActionProfile.loadProfiles('defunkt'));
    this.store.pipe(select(selectProfile)).subscribe((res) => {
      if (res) {
        this.collectionSize = res.public_repos;
      }
    });
  }

  handleOnPageChange(e: number) {
    this.currentPage = e;
    this.store.dispatch(
      fromAction.loadRepositorys(this.history.data.keyword, this.currentPage, this.perPageSize)
      // fromAction.loadRepositorys('defunkt', this.currentPage, this.perPageSize)
    );
  }

  handleOnClickClone() {
    alert('Feature Clone');
  }

  handleOnClicDownload() {
    alert('Feature Download');
  }
}
