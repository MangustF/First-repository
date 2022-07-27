import { LightningElement, api, wire } from 'lwc';
import {NavigationMixin} from 'lightning/navigation';
/*import { getRecord } from 'lightning/uiRecordApi';

import Name_FIELD from '@salesforce/schema/Speaker__c.Name';
import Email__c_FIELD from '@salesforce/schema/Speaker__c.Email__c';
import About_Me__c_FIELD from '@salesforce/schema/Speaker__c.About_Me__c';

const FIELDS = ['speaker.name', 'speaker.email', 'speaker.about'];*/


export default class SubSpeakersDetails extends NavigationMixin(LightningElement) {

    @api recordId;
    @api objectApiName;
    
    
    handleNavigateToNewSpeaker() {
    
            
            let cpmDef = {
                componentDef:"c:newSpeaker"
            };
    
            let encodeDef = btoa(JSON.stringify(cpmDef));
            
            this[NavigationMixin.Navigate]({
                type: 'standard__webPage',
                attributes: {
                    url: "one/one.app#" + encodeDef
                     },
                 });
        }
}