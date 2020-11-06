var config = ConfigFile('ksplashrc');
config.group = 'KSplash';
config.writeEntry('Engine', 'None');
config.writeEntry('Theme', 'None');

var desktopsArray = desktopsForActivity(currentActivity());
for( var j = 0; j < desktopsArray.length; j++) {
    desktopsArray[j].wallpaperPlugin = 'org.kde.image';
}

