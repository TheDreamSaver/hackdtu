import { Component, Input, OnInit, AfterViewChecked } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit {

  
  constructor() { }

  ngOnInit() {
    
    if( $(".toggle .toggle-title").hasClass('active') ){
      $(".toggle .toggle-title.active").closest('.toggle').find('.toggle-inner').show();
    }
    $(".toggle .toggle-title").click(function(){
      if( $(this).hasClass('active') ){
        $(this).removeClass("active").closest('.toggle').find('.toggle-inner').slideUp(200);
      }
      else{	$(this).addClass("active").closest('.toggle').find('.toggle-inner').slideDown(200);
      }
    });
  }

}
