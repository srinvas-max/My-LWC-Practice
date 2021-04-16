import { LightningElement, track, wire } from 'lwc';
import Field_Name from '@salesforce/schema/Account.Name';
import sObjectname from '@salesforce/schema/Account';
//import getContactList from '@salesforce/apex/contactController.getContactList';
export default class HelloWorld extends LightningElement {
  @track greeting = 'World';

  @track name=Field_Name;
  @track object=sObjectname;
  //@wire(getContactList) cont;

  contacts=[
  {
    id:'003445465747876',
    Name:'amit singh',
    title:'developer'
  },
  {
    id:'003445465746776',
    Name:'arjun singh',
    title:'tester'
  },
  {
    id:'003445465456876',
    Name:'rakesh singh',
    title:'Consultant'

  }
]
  changeHandler(event) {
    this.greeting = event.target.value;
  }
}