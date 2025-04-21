import { Injectable } from '@angular/core';
import { ApprovedService } from '../approved/approved.service';

@Injectable({
  providedIn: 'any',
})
export class TranslateService extends ApprovedService {}
