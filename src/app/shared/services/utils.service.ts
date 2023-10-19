import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilsService {

    static isMobileDevice(): boolean {
        return !!(
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/iPod/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/Windows Phone/i)
        );
    }

}
