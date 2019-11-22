import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-all-items',
  templateUrl: './all-items.component.html',
  styleUrls: ['./all-items.component.scss']
})
export class AllItemsComponent implements OnInit {


  constructor() {
  }

  ngOnInit() {

    function show() {
      let item = document.getElementById('item');

      let element = document.getElementById('item_view');

      item.addEventListener('click', function () {
        if (element.style.display == 'none') {
          element.style.display = 'block';
        }
      })
    }

    show();


    function show_reward() {

      let item = document.getElementById('item2');
      let element = document.getElementById('reward_view');

      item.addEventListener('click', function () {
        if (element.style.display == 'none') {
          element.style.display = 'block';
        }
      })
    }

    show_reward();
  }
}
