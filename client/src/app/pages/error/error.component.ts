import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css'],
})
export class ErrorComponent implements OnInit {
  error: any;
  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    // this.error = navigation?.extras?.state?
    console.log(navigation);
  }

  ngOnInit(): void {}
}
