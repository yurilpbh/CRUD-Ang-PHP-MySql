import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { RequestsService} from '../requests.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private requestService: RequestsService,
    private router: Router,
    private routes: ActivatedRoute) { }
  
  addForm: FormGroup;
  
  ngOnInit(): void {
    const routeParams = this.routes.snapshot.params;

    this.requestService.getById(routeParams.id).subscribe((data:any) =>{
        this.addForm.patchValue(data);
    });

    this.addForm = this.formBuilder.group({
      clientId: [''],
      nome: ['', [Validators.required, Validators.maxLength(40)]],
      telefone: ['', [Validators.required, Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.maxLength(40)]],
      pedido: ['', [Validators.required, Validators.maxLength(50)]],
      descricao: ['', [Validators.required, Validators.maxLength(255)]],
      condicao: ['', [Validators.required, Validators.maxLength(16)]]
    });
  }

  update(){
    this.requestService.update(this.addForm.value).subscribe(() =>{
      this.router.navigate(['view']);
    },
    error => {
      alert(error);
    })
  }

}
