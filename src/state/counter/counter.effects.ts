import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { CounterActionTypes } from './counter.actions';

@Injectable()
export class CounterEffects {

  constructor(
    private http: HttpClient,
    private actions$: Actions
  ) {}

  @Effect() login$: Observable<Action> = this.actions$.ofType(CounterActionTypes.LOAD)
    .pipe(
      mergeMap(action =>
        // [ Hack ] should typeckeck `payload`
        this.http.get('//localhost:3000/counter')
        .pipe(
          map(data => ({ type: CounterActionTypes.LOAD_SUCCEEDED, payload: { data } })),
          catchError(() => of({ type: CounterActionTypes.LOAD_FAILED }))
        )
      )
    );
}
