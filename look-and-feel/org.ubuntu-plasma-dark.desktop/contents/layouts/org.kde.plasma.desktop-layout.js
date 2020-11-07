var ksplashrcConfig = ConfigFile('ksplashrc');
ksplashrcConfig.group = 'KSplash';
ksplashrcConfig.writeEntry('Engine', 'None');
ksplashrcConfig.writeEntry('Theme', 'None');

var kscreenlockerrcConfig = ConfigFile('kscreenlockerrc');
kscreenlockerrcConfig.group = 'Greeter';

var wallpaperConfig = ConfigFile(kscreenlockerrcConfig, 'Wallpaper');
wallpaperConfig.group = 'Wallpaper';

var imageConfig = ConfigFile(wallpaperConfig, 'org.kde.image');
imageConfig.group = 'org.kde.image';

var generalConfig = ConfigFile(imageConfig, 'General');
generalConfig.group = 'General';
generalConfig.writeEntry('Image', '/usr/share/wallpapers/Ubuntu');

var desktopsArray = desktopsForActivity(currentActivity());
for( var j = 0; j < desktopsArray.length; j++) {
    desktopsArray[j].wallpaperPlugin = 'org.kde.image';
}

