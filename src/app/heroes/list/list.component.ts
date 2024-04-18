import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public deletedHero? : string;
 public heroNames : string[] = ['Ironman', 'Spiderman', 'Thor', 'Hulk', 'Capitan America'];
 removeLastHero() : void {
   this.deletedHero = this.heroNames.pop();
 }
}
