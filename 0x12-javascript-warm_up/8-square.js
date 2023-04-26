#!/usr/bin/node
const sizer = parseInt(process.argv[2]);
if (Number.isNaN(sizer)) {
  console.log('Missing size');
} else {
  for (let i = 0, s; i < sizer; i++) {
    sq = '';
    for (let j = 0; j < sizer; j++) {
      sq += 'X';
    }
    console.log(sq);
  }
