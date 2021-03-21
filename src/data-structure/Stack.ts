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
    return this.isEmpty ? undefined : this.stack.pop();
  }
}
