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


    function open_item() {

      let button_open = document.getElementById('open');
      let element_remove = document.getElementById('item').firstChild;

      button_open.addEventListener('click', function () {
        element_remove.remove()
      })
    }

    open_item()
  }
}

