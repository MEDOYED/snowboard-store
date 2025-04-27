export class CircularLinkedListNode<T> {
  value: T;
  next: CircularLinkedListNode<T> | null;
  prev: CircularLinkedListNode<T> | null;

  constructor(
    value: T,
    next?: CircularLinkedListNode<T> | null,
    prev?: CircularLinkedListNode<T> | null,
  ) {
    this.value = value;
    this.next = next ?? null;
    this.prev = prev ?? null;
  }
}

export default class CircularLinkedList<T> {
  private head: CircularLinkedListNode<T> | null;
  private _size: number;

  constructor() {
    this.head = null;
    this._size = 0;
  }

  public push(value: T) {
    const newNode = new CircularLinkedListNode(value);

    if (this.head === null) {
      this.head = newNode;

      newNode.prev = newNode;
      newNode.next = newNode;
    } else {
      const tail = this.head.prev!;

      tail.next = newNode;
      newNode.prev = tail;
      newNode.next = this.head;
      this.head.prev = newNode;
    }

    this._size++;
  }

  public get size() {
    return this._size;
  }

  private assertHeadExists(): void {
    if (!this.head) throw new Error("List is empty");
  }

  public getCurrentNode(): CircularLinkedListNode<T> {
    this.assertHeadExists();
    return this.head!;
  }

  public next(): CircularLinkedListNode<T> {
    this.assertHeadExists();
    this.head = this.head!.next!;
    return this.head;
  }

  public prev(): CircularLinkedListNode<T> {
    this.assertHeadExists();
    this.head = this.head!.prev!;
    return this.head;
  }

  public peekNextNode(): CircularLinkedListNode<T> {
    this.assertHeadExists();
    return this.head!.next!;
  }

  public peekPrevNode(): CircularLinkedListNode<T> {
    this.assertHeadExists();
    return this.head!.prev!;
  }

  public static newFromArray<U>(nodes: U[]): CircularLinkedList<U> {
    const list = new CircularLinkedList<U>();
    nodes.forEach((node) => list.push(node));
    return list;
  }
}
