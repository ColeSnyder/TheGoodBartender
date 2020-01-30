import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-find-my-drink',
  templateUrl: './find-my-drink.component.html',
  styleUrls: ['./find-my-drink.component.css']
})
export class FindMyDrinkComponent implements OnInit {

  drinkForm: FormGroup;
  // mixerForm: FormGroup;
  liquorArray = [
    { type: 'Vodka' },
    { type: 'Rum' },
    { type: 'Tequila' },
    { type: 'Whiskey' },
    { type: 'Brandy' },
    { type: 'Gin' },
    { type: 'Scnapps' }
  ];
  mixerArray = [
    { type: 'Club Soda' },
    { type: 'Orange Juice' },
    { type: 'Coke' },
    { type: 'Diet Coke' },
    { type: 'Tonic Water' },
    { type: '7 UP' },
    { type: 'Sour Mix' }
  ];
  garnishArray = [
    { type: 'Orange Slice' },
    { type: 'Lemon Slice' },
    { type: 'Lime Slice' },
    { type: 'Cherry' },
    { type: 'Olive' },
    { type: 'Mint Leaf' }
  ];
  glassArray = [
    { type: 'Tumbler Glass' },
    { type: 'Highball Glass' },
    { type: 'Lowball Glass' },
    { type: 'Hurricane Glass' },
    { type: 'Collins Glass' },
    { type: 'Margarita Glass' },
    { type: 'Martini Glass' },
    { type: 'Pint Glass' }
  ];
  // in the future, separate these into 2d arrays, make different kinds of mixers (sodas, juices etc.) ^^^

  constructor(private fb: FormBuilder, private router: Router) {

    const liquorFormControls = this.liquorArray.map(control => new FormControl(false));
    const mixerFormControls = this.mixerArray.map(control => new FormControl(false));
    const garnishFormControls = this.garnishArray.map(control => new FormControl(false));
    const glassFormControls = this.glassArray.map(control => new FormControl(false));

    this.drinkForm = this.fb.group({
      liquorArray: new FormArray(liquorFormControls),
      mixerArray: new FormArray(mixerFormControls),
      garnishArray: new FormArray(garnishFormControls),
      glassArray: new FormArray(glassFormControls)
    });

   }

  submit() {
    this.router.navigate(['/DrinkList']);
  }

  ngOnInit() {

  }

}
