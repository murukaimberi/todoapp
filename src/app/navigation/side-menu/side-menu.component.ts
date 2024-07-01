import {Component, computed, input, signal} from '@angular/core';
import {MatListModule} from "@angular/material/list";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MenuItem} from "./model/menu-item.model";
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [MatListModule, MatIconModule, MatButtonModule, CommonModule, RouterModule],
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.scss'
})
export class SideMenuComponent {
  collapsed = input.required<boolean>();
  menuItems = signal<MenuItem[]>([
    new MenuItem("dashboard", "Dashboard", "dashboard", []),
    new MenuItem("event_list", "To Do List", "todos", []),
    new MenuItem("format_list_bulleted", "Notes", "notes", [])
  ]);
  profilePicSize = computed(() => this.collapsed() ? '32' : '100');
}
