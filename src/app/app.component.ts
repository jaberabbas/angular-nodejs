import {Component} from '@angular/core';
import {SizerComponent} from './sizer/sizer.component';
import {FormsModule} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [FormsModule, SizerComponent],
})
export class AppComponent {
  fontSizePx = 16;
}
