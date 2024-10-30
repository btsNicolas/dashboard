import { Component } from '@angular/core';
import { RedirectApplicationService } from '../../services/redirect-app.service';
import { Application } from '../../models/redirect-application-model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  applications: Application[] = [];

  constructor(private redirectApplicationsService: RedirectApplicationService) { }

  ngOnInit(): void {
    this.applications = this.redirectApplicationsService.getApplications();

  }

  openApplication(url: string): void {
    this.redirectApplicationsService.navigateToApp(url);
  }
}
