import { LightningElement, wire,track } from 'lwc';
import getAccountList from '@salesforce/apex/Aura_Example_4.getAccountList';
  
export default class aura_Example_4lwc extends LightningElement {
    @track accounts;
    @track error;
    @wire(getAccountList)
    wiredAccounts({ error, data }) {
        if (data) {
            this.accounts = data;
        } else if (error) {
            console.log(error);
            this.error = error;
        }
    }
}