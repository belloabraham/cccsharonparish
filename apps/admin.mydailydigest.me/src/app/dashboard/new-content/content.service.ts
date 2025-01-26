import { inject, Injectable } from '@angular/core';
import { REMOTE_DATA_TOKEN } from '../../services';

@Injectable({
  providedIn: 'any',
})
export class ContentService {
  private readonly remoteData = inject(REMOTE_DATA_TOKEN);
}
