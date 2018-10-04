# React Native Deep Linking Example App

This app demonstrates dynamic deep linking using React Native.

![](http://i.imgur.com/szcU9ML.gif)

## To test this out

1. Clone repository   
```
git clone https://github.com/dabit3/react-native-deep-linking.git
```

2. Change into directory   
```
cd react-native-deep-linking
```

3. Install dependencies   
```
yarn // or npm i
```

4. Run project

## Testing for Android

You can easily test out via terminal using following command.

adb shell am start -a android.intent.action.VIEW \ -c android.intent.category.BROWSABLE \ -d "<scheme>://<host>/<id>"

example :

adb shell am start -a android.intent.action.VIEW \ -c android.intent.category.BROWSABLE \ -d "peopleapp://people/1"
