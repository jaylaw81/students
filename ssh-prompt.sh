#!/usr/bin/expect -r
# set variables
set password @marnie2037
spawn git push
# Look for password prompt
expect "'/home/ec2-user/.ssh/id_rsa':"
# Send password aka $password
send -- "$password\r"
expect eof
