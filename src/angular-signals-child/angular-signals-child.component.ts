import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-angular-signals-child',
  templateUrl: './angular-signals-child.component.html',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularSignalsChildComponent {
  @Input() count: any;
  @Input() todoList: any;
  @Input() doubleCount: any;
}
