class StringIterator {
    compressedString: string = '';
    stack = []
    num: string = '';
    constructor(compressedString: string) {
      this.compressedString = compressedString;
      compressedString.split('').forEach((item: string) => {
        if (/^[a-zA-Z]$/.test(item)) {
          const str = this.stack[this.stack.length - 1];
          if (this.num.length) {
            console.log('123', this.num, parseInt(this.num, 10));
            for (let i = 1; i < parseInt(this.num, 10); i++) {
                this.stack.push(str)
            }
          }
          this.stack.push(item);
          this.num = '';
        } else {
            this.num = `${this.num}${item}`;
            console.log('111', item, this.num)
        }
      });
        if (this.num.length) {
        const str = this.stack[this.stack.length - 1];
        for (let i = 1; i < parseInt(this.num, 10); i++) {
            this.stack.push(str)
        }
        }
    }
    next(): string {
      return this.stack.length > 0 ? this.stack.shift() : ' ';
    }
    hasNext(): boolean {
        return this.stack.length > 0
    }
}