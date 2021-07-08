// First in first out (FIFO)
export class Queue {
  private queue: Array<string | number> = [];
  private maxLength: number = 0;

  constructor(maxLength: number) {
    this.maxLength = maxLength;
  }

  get length(): number {
    return this.queue.length;
  }

  get isEmpty(): boolean {
    return this.queue.length === 0;
  }

  enqueue(item: string | number) {
    if (this.length < this.maxLength) {
      this.queue.push(item);
    }
  }

  dequeue(): string | number | undefined {
    if (!this.isEmpty) {
      return this.queue.shift();
    }
  }
}
