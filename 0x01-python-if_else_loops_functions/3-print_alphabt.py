#!/usr/bin/python3
for alphabet in range(26):
    if alphabet != 4 and alphabet != 16:
        print("{:s}".format(chr(alphabet + ord("a"))), end="")
