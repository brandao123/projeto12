import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClienteService } from '../services/clientes.service';


@Component({
  selector: 'app-cadastro-clientes',
  templateUrl: './cadastro-clientes.component.html',
  styleUrls: ['./cadastro-clientes.component.css']
})
export class CadastroClientesComponent implements OnInit {

formGroup : FormGroup;

  constructor(private formBuilder: FormBuilder, private clienteService : ClienteService) {
    this.formGroup = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
      telefone: ['', [Validators.required,]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required,]],
      datanascimento: ['', [Validators.required,]],
      endereco: ['', [Validators.required,]]
    }) 
  }

  ngOnInit() {
  }

  cadastrar(){
    this.clienteService.insert(this.formGroup.value)
    .subscribe(response => {
      console.log("Cadastrado com sucesso");
    }, error => {
      console.log("Erro ao cadastrar");
    })
    console.log(this.formGroup.value);
  }

}
