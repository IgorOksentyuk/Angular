import { Component } from '@angular/core';
import { TokenStorageService } from 'src/app/login/services/token-storage.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(private tokenStorageService: TokenStorageService) {}

  signOut() {
    this.tokenStorageService.signOut();
    location.reload();
  }
}
