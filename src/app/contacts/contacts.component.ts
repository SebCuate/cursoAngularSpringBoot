import { Component, OnInit } from '@angular/core';

export class Contact{
  constructor(
    public id: number,
    public nombre: string,
    public mobile: number,
    public email: string
  ){
  }

}

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts=[
    new Contact(1,'Abigail',5597798668,'abigail@mail.com'),
    new Contact(2,'Lourdes',5512213443,'lourdes@mail.com'),
    new Contact(3,'Octavio',5533445656,'octavio@mail.com'),
    new Contact(4,'Pablo',5573371991,'Pablo@mail.com')
  ]

  constructor() { }

  ngOnInit() {
  }

  sendEmail(email:string, nombre:string
  ){
    console.log('sending email to ' + email);
    alert('a email was sended to ' + nombre);
  }

  call(number: number, nombre: string
  ){
    console.log('Calling to '+ number);
    alert('you are in a call with ' + nombre);
  }

}
