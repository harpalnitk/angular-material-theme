import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
 
// @HostBinding('class.app-banner')
// hostClass = true;

//needed if we are using .app-banner class in
//theme file of this component
//instead of directly using component name


  @Input()
  message = '';

@Input()
type: 'success' | 'info' | 'warn' | 'none' = 'none';

@HostBinding('class')
get hostClass(){
  if (this.type !== 'none'){
    return `app-banner-${this.type}`;
  }else{
    return '';
  }
 
}

  constructor() { }

  ngOnInit(): void {
  }

}
