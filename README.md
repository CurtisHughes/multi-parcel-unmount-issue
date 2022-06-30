# Steps to reproduce the issue

1. Start the parcel

```
$ cd parcel
$ npm i
$ npm run start -- --port 8500
```

2. Start the application

```
$ cd application
$ npm i
$ npm run start -- --port 8600
```

3. Configure import map overrides
Navigate to http://single-spa-playground.org/playground/instant-test?name=@organization/parcel&url=8500
Navigate to http://single-spa-playground.org/playground/instant-test?name=@organization/application&url=8600

4. From the home page click "About"

5. Wait a few seconds for warnings and error to show up in console

[![Watch the video]](./example.mov)
