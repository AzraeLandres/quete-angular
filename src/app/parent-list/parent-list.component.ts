import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-list',
  templateUrl: './parent-list.component.html',
  styleUrl: './parent-list.component.css',
})
export class ParentListComponent {
  onomatopoeiaList: string[] = [];
  onReceiveNewOnomatopia(event: string): void {
    this.onomatopoeiaList.push(event);
  }
}
