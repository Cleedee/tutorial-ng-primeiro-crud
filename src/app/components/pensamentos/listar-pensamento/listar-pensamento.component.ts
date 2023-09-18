import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent {

  listaPensamentos = [
    {
      conteudo: 'Comunicação entre componentes',
      autoria: 'Claudio',
      modelo: 'modelo3'
    },
    {
      conteudo: 'I love Angular',
      autoria: 'Claudio',
      modelo: 'modelo1'
    },
    {
      conteudo: 'Elit cursus ullamcorper suspendisse ipsum convallis aliquam faucibus phasellus vestibulum vivamus consequat sit ut consectetur a in ac euismod gravida, finibus et nec diam suspendisse dignissim. Convallis diam vestibulum dui habitasse quis nec elementum velit tristique, magna platea laoreet felis eget, condimentum dapibus dui, molestie erat suspendisse condimentum sagittis praesent orci et metus augue ac tempus. Et elementum tristique urna tincidunt diam imperdiet donec malesuada. Blandit etiam semper, quam dui at pellentesque porttitor risus in nibh lorem arcu amet nam sed cras pellentesque efficitur enim felis. Eu ac felis nunc porta magna ante ultricies, convallis vel efficitur velit lectus auctor nunc sed odio placerat nec dictum tincidunt consectetur auctor pharetra enim vel. Convallis nunc dignissim dignissim sapien amet sit eget posuere in eleifend velit odio quis eu ultricies sed nulla in nibh vulputate. Erat nunc eu interdum mus eleifend nunc eget praesent elit sit pharetra finibus purus turpis luctus ac. Urna metus in et, eget ac at in, imperdiet luctus suspendisse rhoncus tempor at, sem bibendum amet est in efficitur auctor leo, augue. Felis elit nullam suspendisse, molestie duis mus faucibus ultricies, eget dolor eleifend curabitur dignissim, lorem id duis id pellentesque, ac posuere est lectus dignissim molestie vestibulum nisl.',
      autoria: '',
      modelo: 'modelo1'
    }
  ]

}
