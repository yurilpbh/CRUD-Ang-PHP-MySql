import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { StudentsService} from '../students.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private studentService: StudentsService,
    private router: Router,
    private routes: ActivatedRoute) { }
  
  addForm: FormGroup;
  
  ngOnInit(): void {
    const routeParams = this.routes.snapshot.params;

    this.studentService.getById(routeParams.id).subscribe((data:any) =>{
        this.addForm.patchValue(data);
    });

    this.addForm = this.formBuilder.group({
      sId: [''],
      fName: ['', Validators.required],
      lName: ['', [Validators.required, Validators.maxLength(12)]],
      email: ['', [Validators.required, Validators.maxLength(30)]]
    });
  }

  update(){
    this.studentService.update(this.addForm.value).subscribe(() =>{
      this.router.navigate(['view']);
    },
    error => {
      alert(error);
    })
  }

}
