import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import Account_Name from '@salesforce/schema/Account.Name';
import Account_Type from '@salesforce/schema/Account.Type';
import Account_Industry from '@salesforce/schema/Account.Industry';
import {NavigationMixin} from 'lightning/navigation';

export default class AccountCreateComp extends NavigationMixin (LightningElement) {
    objectApiName='Account';
    fieldList=[Account_Name,Account_Type,Account_Industry];
    handleAccountCreate(){
        const event = new ShowToastEvent({
            title: "Account Create",
            message: "Record ID:"+event.detail.Id,
            variant: "success",
        });
        this.dispatchEvent(event);

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recorrdId:event.detail.id,
                objectApiName: 'Account',
                actionName: 'view',
            },
        });
    }
}