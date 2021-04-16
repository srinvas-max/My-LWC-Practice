import { LightningElement, wire } from 'lwc';
import mapDemo from '@salesforce/apex/testUtility.mapDemo'
export default class LogicalLWCDemo extends LightningElement {

    @wire(mapDemo) records;
}