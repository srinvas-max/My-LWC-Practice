import { api, LightningElement, track } from 'lwc';
import id from '@salesforce/user/Id';
export default class MyFirstLWC extends LightningElement {
    @api name='Mythri';
    @track title='CRM Consultant';
    @track email='srinivasd42@gmail.com';
    @track phone='9876647383';
    userid=id;

    handleClick(){
        console.log('inside JS');
        this.name='arjun singh';
        this.title='Salesforce developer'
    }
}