import { LightningElement, api, track, wire } from 'lwc';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';


export default class AbsoluteHighlightPanel extends LightningElement {
    @api recordId;
    @api objectApiName;


    @track contact;
    @track lead;

    @track objectInfo;

    @wire(getObjectInfo, { objectApiName:  "Contact"})
    objectInfo;

    get iconName(){
        return "standard:" + this.objectApiName.toLowerCase();
    }
}