import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'img[appImgBroken]'
})
export class ImgBrokenDirective {

  @HostListener('error') handleError(): void {
    const elNative = this.elHost.nativeElement;
    elNative.src = 'https://via.placeholder.com/356x520?text=Image%20not%20found'
  }

  constructor(private elHost:ElementRef) { }

}
