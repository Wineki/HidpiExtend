HipdiExtend

针对retina屏幕为高倍屏，在High Dpi(高分辨率)的情况下，canvas渲染的画布会出现模糊的现象，
所以该插件重写了getContext()的方法，可以通过调用getContextHidpi()来替代原有的getContext()方法，
插件可以根据设备像素比做相应的缩放。



