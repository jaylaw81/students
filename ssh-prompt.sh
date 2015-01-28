#!/usr/bin/expect -r
# set variables
set password software
spawn service kdump propagate
# Look for password prompt
expect "password:"
# Send password aka $password
send -- "$password\r"
expect eof
