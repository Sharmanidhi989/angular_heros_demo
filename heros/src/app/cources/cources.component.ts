import { Component, OnInit } from '@angular/core';
import {Cource} from '../cource'
@Component({
  selector: 'app-cources',
  templateUrl: './cources.component.html',
  styleUrls: ['./cources.component.scss']
})
export class CourcesComponent implements OnInit {
  course: Cource={
    id: 1,
    name: "Angurlar"
  }
  constructor() { }

  ngOnInit(): void {
    //initialization logic
  }

}
