import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service';
import { Requests } from '../requests';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  requests: Requests[];
  id: any;

  constructor(private requestsService: RequestsService,
    private router: Router) { }

  ngOnInit(): void {
    this.requestsService.get().subscribe((data: Requests[]) => {
      this.requests = data;
    });
    
  }

  edit(request: Requests){
    this.id = request.clientId;
    this.router.navigate(['edit/' + this.id]);
  }

  delete(request: Requests): void{
    this.requestsService.delete(request.clientId).subscribe(() => {
      this.requests = this.requests.filter(u => u !== request);
    });
    document.location.reload();
  }

}
