# Xcode

#

# gitignore contributors: remember to update Global/Xcode.gitignore, Objective-C.gitignore & Swift.gitignore

## User settings

xcuserdata/

## compatibility with Xcode 8 and earlier (ignoring not required starting Xcode 9)

_.xcscmblueprint
_.xccheckout

## compatibility with Xcode 3 and earlier (ignoring not required starting Xcode 4)

build/
DerivedData/
_.moved-aside
_.pbxuser
!default.pbxuser# TestAssignment

## Prerequisites

- [Node JS > 12](https://nodejs.org/) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman/)
- [JDK >11](http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html)
- [Xcode 13](https://developer.apple.com/xcode)
- [Android Studio and Android SDK](https://developer.android.com/studio/index.html)

## Running the project

- Clone this project

```
git clone < https://github.com/rakeshpalotra90/TestAssignment.git >
```

- Go to your project's root folder and run `yarn install`.
- If you are using Xcode 13 or higher got to /ios and execute `pod install`
- Run `npx react-native run-ios` or `npx react-native run-android` to start your application!
- [Install NodeJS](https://nodejs.org/en/) on your computer.

- [Install yarn](https://yarnpkg.com/en/docs/install) on your computer

  > Yarn is a dependency manager built by facebook and google. It is a more efficient and reliable (thanks to yarn.lock) alternative of npm.

- Launch ` yarn install` command in a terminal opened in the project folder.

  > This command will look into the _package.json_ file and install all the dependencies listed here.

- Install react-native-cli globally on your computer(if not installed)

```
yarn global add react-native-cli

### Android steps

- Launch a virtual android device [(through *Android Studio* for instance)](https://developer.android.com/studio/run/managing-avds.html#viewing)

> If you have never installed any android virtual device, [follow those instructions](https://developer.android.com/studio/run/managing-avds.html#createavd)

- Then, run the project in executing on your project folder:

```

react-native run-android

```

_.mode1v3
!default.mode1v3
_.mode2v3
!default.mode2v3
\*.perspectivev3
!default.perspectivev3

## Obj-C/Swift specific

\*.hmap

## App packaging

_.ipa
_.dSYM.zip
\*.dSYM

## Playgrounds

timeline.xctimeline
playground.xcworkspace

# Swift Package Manager

#

# Add this line if you want to avoid checking in source code from Swift Package Manager dependencies.

# Packages/

# Package.pins

# Package.resolved

# \*.xcodeproj

#

# Xcode automatically generates this directory with a .xcworkspacedata file and xcuserdata

# hence it is not needed unless you have added a package configuration file to your project

# .swiftpm

.build/

# CocoaPods

#

# We recommend against adding the Pods directory to your .gitignore. However

# you should judge for yourself, the pros and cons are mentioned at:

# https://guides.cocoapods.org/using/using-cocoapods.html#should-i-check-the-pods-directory-into-source-control

#

ios/Pods/

#

# Add this line if you want to avoid checking in source code from the Xcode workspace

# \*.xcworkspace
```
