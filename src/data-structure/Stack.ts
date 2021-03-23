// Last in first out (LIFO)
export class Stack {
  private stack: Array<string | number> = [];
  private maxLength: number = 0;

  constructor(maxLength: number) {
    this.maxLength = maxLength;
  }

  get length(): number {
    return this.stack.length;
  }

  get isEmpty(): boolean {
    return this.stack.length === 0;
  }

  push(item: string | number) {
    if (this.length < this.maxLength) {
      this.stack.push(item);
    }
  }

  pop(): string | number | undefined {
    if (!this.isEmpty) {
      return this.stack.pop();
    }
  }
}
