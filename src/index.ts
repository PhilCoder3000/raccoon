// import { button } from 'DOMElements/Button';
// import { div } from 'DOMElements/div';
// import { p } from 'DOMElements/p';
// import { ProxyFactory } from 'Proxy/ProxyFactory';

(function main() {
  //   const root = div()
  //   const paragraph = p()
  //   root.appendChild(paragraph);
  //   const proxyInstance = new ProxyFactory({ a: 2, b: 3 })
  //   proxyInstance.addSub((_0: unknown, _1: unknown, val: unknown) => (paragraph.textContent = 'a = ' + val))
  //   paragraph.textContent = 'a = ' + proxyInstance.data.a;
  //   const btn = button();
  //   btn.innerText = 'increment';
  //   btn.onclick = () => {
  //     proxyInstance.data.a++;
  //   };
  //   root.appendChild(btn);
  //   document.body.prepend(root.render());
  // function findPosition1(num: string): number {
  //   let str = '';
  //   let number = 1;
  //   let index = 0;
  //   while (true) {
  //     let buffer = '';
  //     while (!buffer.includes(num[0])) {
  //       buffer += `${number++}`;
  //     }
  //     str += buffer;
  //     if (str.length > num.length * num.length) {
  //       const index1 = str.indexOf(num);
  //       if (index1 > -1) {
  //         return index + index1;
  //       }
  //       str = str.slice(num.length * num.length - num.length);
  //       index += num.length * num.length - num.length;
  //     }
  //   }
  // }
  // function findPosition2(num: string): number {
  //   let str = '';
  //   let number = 1;
  //   let index = 0;
  //   while (true) {
  //     str += Array.from({ length: 5 })
  //       .map(() => `${number++}`)
  //       .join('');
  //     if (str.length > num.length * 5) {
  //       const index1 = str.indexOf(num);
  //       if (index1 > -1) {
  //         return index + index1;
  //       }
  //       str = str.slice(num.length * 4);
  //       index += num.length * 4;
  //     }
  //   }
  // }
  // function findPosition3(num: string): number {
  //   let str = '';
  //   let number = 1;
  //   let index = 0;
  //   while (true) {
  //     str += Array.from({ length: 10 })
  //       .map(() => `${number++}`)
  //       .join('');
  //     if (str.length > 10) {
  //       const index1 = str.indexOf(num);
  //       if (index1 > -1) {
  //         return index + index1;
  //       }
  //       const lastIndexOf = str.lastIndexOf(num[0]);
  //       str = str.slice(lastIndexOf);
  //       index += lastIndexOf;
  //     }
  //   }
  // }
  // console.log(findPosition('89'), 7);
  // console.log(findPosition("040") , 1091)
  // let start = performance.now();
  // console.log(findPosition1('09991'), 35286);
  // let end = performance.now();
  // console.log('1 = ', start - end);
  // start = performance.now();
  // console.log(findPosition2('09991'), 35286);
  // end = performance.now();
  // console.log('2 = ', start - end);
  // start = performance.now();
  // console.log(findPosition3('09991'), 35286);
  // end = performance.now();
  // console.log('3 = ', start - end);
  // console.log(findPosition("949225100") , 382689688)
  // console.log(findPosition("58257860625") , 24674951477)
  // console.log(findPosition("3999589058124") , 6957586376885)
  // console.log(findPosition("555899959741198") , 1686722738828503)
  // function lessThan(s: string) {
  //   if (s[0] == '-') {
  //     return 0
  //   }
  //   const a = +s.slice(0, Math.ceil(s.length / 2))
  //   console.log('🚀 ~ file: index.ts:106 ~ lessThan ~ a:', a);
  //   const b = 10 ** Math.floor(s.length / 2)
  //   console.log('🚀 ~ file: index.ts:108 ~ lessThan ~ b:', b);
  //   let n = a + b
  //   console.log('🚀 ~ file: index.ts:110 ~ lessThan ~ n:', n);
  //   if (s.slice(Math.ceil(s.length / 2)) < [...s].slice(0, Math.floor(s.length / 2)).reverse().join('')) {
  //     return n - 1
  //   }
  //   return n
  // }
  // function countPalindromes1(a: number, b: number){
  //   a = Math.ceil(a), b = Math.floor(b)
  //   if (a > b) {
  //     return 0
  //   }
  //   return lessThan(b.toString()) - lessThan((a - 1).toString())
  // }
  // function countPalindromes(a: number, b: number) {
  //   let count = 0;
  //   let start = Math.ceil(a);
  //   while (start <= b) {
  //     if (start < 10) {
  //       start++;
  //       count++;
  //       continue;
  //     }
  //     const str = String(start);
  //     const length = str.length;
  //     let cursor = 0;
  //     while (cursor < length - 1 - cursor) {
  //       if (str.charAt(cursor) !== str.charAt(length - 1 - cursor)) {
  //         break;
  //       }
  //       cursor++;
  //     }
  //     if (cursor >= length - 1 - cursor) {
  //       count++;
  //     }
  //     start++;
  //   }
  //   return count;
  // }
  // let start = performance.now();
  // console.log(countPalindromes(10, 10000000));
  // let end = performance.now();
  // console.log('1 = ', start - end);
  // start = performance.now();
  // console.log(countPalindromes(10, 10000000));
  // end = performance.now();
  // console.log('2 = ', start - end);
  // start = performance.now();
  // console.log(countPalindromes(10, 10000000));
  // end = performance.now();
  // console.log('3 = ', start - end);
  // start = performance.now();
  // console.log(countPalindromes(10, 10000000));
  // end = performance.now();
  // console.log('4 = ', start - end); 1221
  // start = performance.now();
  // console.log(countPalindromes1(10, 10000000));
  // end = performance.now();
  // console.log('1 = ', start - end);
  // start = performance.now();
  // console.log(countPalindromes1(10, 10000000));
  // end = performance.now();
  // console.log('2 = ', start - end);
  // start = performance.now();
  // console.log(countPalindromes1(10, 10000000));
  // end = performance.now();
  // console.log('3 = ', start - end);
  // start = performance.now();
  // console.log(countPalindromes1(10, 10000000));
  // end = performance.now();
  // console.log('4 = ', start - end);
})();
