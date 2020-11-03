import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Students } from '../students';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  students: Students[];
  id: any;

  constructor(private studentsService: StudentsService,
    private router: Router) { }

  ngOnInit(): void {
    this.studentsService.get().subscribe((data: Students[]) => {
      this.students = data;
    });
  }

  edit(student: Students){
    this.id = student.sId;
    this.router.navigate(['edit/' + this.id]);
  }

  delete(student: Students): void{
    this.studentsService.delete(student.sId).subscribe(() => {
      this.students = this.students.filter(u => u !== student);
    });
    document.location.reload();
  }

}
