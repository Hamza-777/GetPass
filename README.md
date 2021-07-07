# GetPass

### A password generator using NodeJS

### It consists of options such as:

### - Length of password can be set manually.

### - Can save the passwords created in a file (you can name the file yourself).

### - Can choose to exclude numbers or symbols or both.

### - The password will get copied to clipboard as soon as it is generated (using clipboardy).

### To get help

```
$ getpass -h
Usage: index [options]

A password generator

Options:
  -V, --version          output the version number
  -l, --length <length>  length of password (default: "7")
  -s, --save <name>      save the password to passwords.txt (default: "passwords")
  -nn, --no-numbers      exclude numbers
  -ns, --no-symbols      exclude symbols
  -h, --help             display help for command
```

### Some Examples:

```
$ getpass
Generated Password: -J=jU+q
Password copied to clipboard
Password saved to passwords.txt
```

```
$ getpass --length=20
Generated Password: =Fh@%4HKiAsND6w=39Pf
Password copied to clipboard
Password saved to passwords.txt
```

```
$ getpass --length=20 -nn
Generated Password: k$lTGcDKfsNxURfioMPO
Password copied to clipboard
Password saved to passwords.txt
```

```
$ getpass --length=20 -nn -ns
Generated Password: xEJpbdLbuQshjwpfvppL
Password copied to clipboard
Password saved to passwords.txt
```
