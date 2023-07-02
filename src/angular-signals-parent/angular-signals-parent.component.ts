import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  computed,
  Signal,
  signal,
  WritableSignal,
} from '@angular/core';
import { AngularSignalsChildComponent } from '../angular-signals-child/angular-signals-child.component';

@Component({
  standalone: true,
  selector: 'app-angular-signals-parent',
  templateUrl: './angular-signals-parent.component.html',
  imports: [AngularSignalsChildComponent, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AngularSignalsParentComponent {
  // Angular Signals - Wrapper over a value
  // Can be primitive or a Data Structure

  // Writable Signals -
  // Values are updated directly using apis
  // Cached - computed after the writable signal is updated
  count: WritableSignal<number> = signal(5);
  todoList = signal([
    { title: 'Learn signals', done: false },
    { title: 'Learn signals', done: false },
    { title: 'Learn signals', done: false },
    { title: 'Learn signals', done: false },
    { title: 'Learn signals', done: false },
    { title: 'Learn signals', done: false },
  ]);

  // Computed Signals -
  // Value derived from other signals
  doubleCount: Signal<number> = computed(() => this.count() * 2);

  incrementCount() {
    // Can use set or update to compute value of signal
    this.count.set(this.count() + 1);
    // this.count.update((val) => val + 1);
  }

  // Computed Signals not writable - Cannot set value - doubleCount.set(5)
  incrementComputedSignals() {
    // Below line will throw error
    // this.doubleCount.set(5)
  }

  updateTodoList() {
    this.todoList.mutate((value) => {
      value[0].done = true;
    });
  }
}
