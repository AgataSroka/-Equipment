import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-reward',
  templateUrl: './reward.component.html',
  styleUrls: ['./reward.component.scss']
})
export class RewardComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    function reward_hidden() {

      let button = document.getElementById('close_view');
      let element = document.getElementById('reward_view_equipment');

      button.addEventListener('click', function () {
        if (element.style.display == 'block') {
          element.style.display = 'none';
        }
      })
    }

    reward_hidden();
  }

}
