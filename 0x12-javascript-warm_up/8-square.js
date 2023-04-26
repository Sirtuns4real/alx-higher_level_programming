#!/usr/bin/node
const sizer = Math.floor(Number(process.argv[2]));
if (isNaN(sizer)) {
  console.log('Missing size');
} else {
  for (let r = 0; r < sizer; r++) {
    let rw = '';
    for (let c = 0; c < sizer; c++) rw += '*';
    console.log(rw);
  }
}
