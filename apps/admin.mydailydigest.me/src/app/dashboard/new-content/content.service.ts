import { inject, Injectable } from '@angular/core';
import { REMOTE_DATA_TOKEN } from '../../services';

@Injectable()
export class ContentService {
  private readonly remoteData = inject(REMOTE_DATA_TOKEN);

  constructor() {}
}
