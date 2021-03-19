export class Stack {
  stack: Array<string | number> = [];
  maxLength = 15;

  constructor(maxLength: number = 15) {
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
    if (this.isEmpty) {
      return undefined;
    } else {
      return this.stack.pop();
    }
  }
}
