export const ACTION_INCREASE = 'INCREASE';
export const ACTION_DECREASE = 'DECREASE';

export class CounterStore {
  private value: number = 0

  public getValue(): number {
    return this.value;
  }

  public update(action, change): void {
    switch (action.type) {
      case ACTION_INCREASE:
        this.value++;
        break;
      case ACTION_DECREASE:
        this.value--
        break;
    }

    change();
  }
}