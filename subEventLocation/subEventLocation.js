import { LightningElement, api, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import Street__c_FIELD from '@salesforce/schema/Location__c.Street__c';
import City__c_FIELD from '@salesforce/schema/Location__c.City__c';
import State__c_FIELD from '@salesforce/schema/Location__c.State__c';
import Country__c_FIELD from '@salesforce/schema/Location__c.Country__c';
import Postal_Code__c_FIELD from '@salesforce/schema/Location__c.Postal_Code__c';


const FIELDS = [Street__c_FIELD, City__c_FIELD, State__c_FIELD, Country__c_FIELD, Postal_Code__c_FIELD];

export default class SubEventLocation extends LightningElement {
    @api recordId;

    @wire(getRecord, { recordId: '$recordId', fields: FIELDS })
    Location__c;

    get street() {
        return this.Location__c.data.fields.Street__c.value;
    }

    get city() {
        return this.Location__c.data.fields.City__c.value;
    }

    get state() {
        return this.Location__c.data.fields.State__c.value;
    }

    get country() {
        return this.Location__c.data.fields.Country__c.value;
    }

    get postal() {
        return this.Location__c.data.fields.Postal_Code__c.value;
    }
   
}