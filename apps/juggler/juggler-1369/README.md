# loopback-sanbox
error for mongoDB exists

# Description/Steps to reproduce
1. git clone

2. npm i

3. excute
   ```
     DEBUG=loopback:connector:mongodb node .
   ```
   
4. add user 
5. query
  ```
    filter : {"where":{"email":{"exists":true}}}
  ```
6. see DEBUG log
  ```
    loopback:connector:mongodb all +31ms User { where: { email: '[object Object]' }, order: [ 'id' ] } null []
  ```
