import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  // showMsg = true;



  title = 'MyProjects';

  readme(){
    console.log('button clicked');
  }

}
