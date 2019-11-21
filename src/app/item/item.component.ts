import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    function hidden() {

      let button = document.getElementById('close');
      let element = document.getElementById('view_equipment');

      button.addEventListener('click', function () {
        if (element.style.display == 'block') {
          element.style.display = 'none';
        }
      })
    }

    hidden();
  }

}

