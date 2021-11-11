import { Component, OnInit } from '@angular/core';
import { HttpErrorService } from '../../services/http-error.service';

@Component({
  selector: 'app-alert-error',
  templateUrl: './alert-error.component.html',
  styleUrls: ['./alert-error.component.css'],
})
export class AlertErrorComponent implements OnInit {
  isError$ = this.httpErrorService.isError$;

  constructor(private httpErrorService: HttpErrorService) {}

  ngOnInit(): void {}
}
