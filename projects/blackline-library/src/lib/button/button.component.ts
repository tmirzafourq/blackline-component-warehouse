import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() buttonText;

  constructor() {}

  ngOnInit(): void {}
}
