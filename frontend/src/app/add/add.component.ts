import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestsService} from '../requests.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private request: RequestsService,
    private router: Router) { }

  addForm: FormGroup;

  ngOnInit(): void {
    this.addForm = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.maxLength(40)]],
      telefone: ['', [Validators.required, Validators.maxLength(11)]],
      email: ['', [Validators.required, Validators.maxLength(40)]],
      pedido: ['', [Validators.required, Validators.maxLength(50)]],
      descricao: ['', [Validators.required, Validators.maxLength(255)]],
      condicao: ['', [Validators.required, Validators.maxLength(16)]]
    });
  }

  onSubmit(){
    this.request.create(this.addForm.value).subscribe(() => {
      this.router.navigate(['view']);
    })
  }

}
