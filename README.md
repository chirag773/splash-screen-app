1. Run backend
   - after cloning this, cd into backend.
   - run command _yarn or npm install_.
   - above command will install all the packages.
   - please do remember that you should have mongoDB install locally.
   - inside index.js file you can see database link.
   - once everything is setup then run the following command - _yarn start or npm start_.
   - if you get error while running yarn or npm command run it as _sudo or root-user_.
   - ex - _sudo yarn start_ or _sudo npm start_
   - please remember if your are using _yarn_ then do not mismatch using npm.
   - and vice versa
2. Run App.
   -after cloning this, cd into splashScreen.
   - run command _yarn or npm install_.
   - above command will install all the packages.
   - navigate to App.js.
   - replace the _baseURL: 'http://192.168.29.173:5001'_ to your IP of your machine.
   - ex - _baseURL: 'http://YOUR_IP:5001'_.
   - run the app by _npx react-native start_.
   - to install App in your phone, connect your phone with usb and on the developer option by navigating to phone setting.
   - run the following command into terminal _npx react-native run-android_
