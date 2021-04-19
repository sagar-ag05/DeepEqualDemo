import { Injectable } from "@angular/core";
// import { DeepEqual } from 'deep-equal';

@Injectable({
    providedIn: 'root'
})
export class UtilService {

    isEqual(objA: any, objB: any) {
        return true;
        //return DeepEqual(objA, objB);
    }

}