import { Component } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  private destroy$ = new Subject<void>();

  isMenuOpen = true;

  constructor(private menuService: MenuService) {}

  ngOnInit() {
    // Nos suscribimos a los cambios del estado del menú
    this.menuService.menuState$.subscribe(
      state => this.isMenuOpen = state
    );
  }

  closeMenu() {
    this.menuService.closeMenu();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
