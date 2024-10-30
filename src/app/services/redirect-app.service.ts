import { Injectable } from '@angular/core';



import { Application } from '../models/redirect-application-model';
import { environment } from '../configs/enviroment';

@Injectable({
  providedIn: 'root'
})
export class RedirectApplicationService {


  constructor() { }


  parseApplications(): Application[] {
    try {
      return JSON.parse(environment.applications);
    } catch (error) {
      console.error('Error al parsear el JSON:', error);
      return [];
    }
  }

  getApplications(): Application[] {
    // return this.parseApplications();
    return environment.applicationsExample;
  }


  navigateToApp(url: string): void {
    window.location.href = url;
    // Alternativa: window.open(url, '_blank');
  }

}
