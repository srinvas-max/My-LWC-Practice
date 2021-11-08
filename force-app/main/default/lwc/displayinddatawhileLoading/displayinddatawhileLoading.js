import { LightningElement, track } from 'lwc';
import getAccounRecordtList  from '@salesforce/apex/AccountController.getAccounRecordtList';
export default class DataDisplaywithImperative extends LightningElement {
    @track accontrecords;
    @track errors;
    @track columns=[{label:'Name',fieldName:'Name',type:'text'},
    {label:'Inustry',fieldName:'Industry',type:'text'}
    ];
    connectedCallback(){
        getAccounts()
        .then(result=>{
            this.accontrecords=result;
        })
        .catch(error=>{
            this.errors=error;
        })
    }
}