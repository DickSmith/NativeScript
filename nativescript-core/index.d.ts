/**
 * @module "@nativescript/core"
 */ /** */

/// <reference path="./tns-core-modules.d.ts" />
import { getMainEntry, getRootView, setResources, setCssFileName, getCssFileName, loadAppCss, addCss, on, off, run, orientation, getNativeApplication, hasLaunched, AndroidApplication, iOSApplication } from "./application";
export { ApplicationEventData, LaunchEventData, OrientationChangedEventData, UnhandledErrorEventData, DiscardedErrorEventData, CssChangedEventData, LoadAppCSSEventData, iOSApplication, AndroidApplication, AndroidActivityEventData, AndroidActivityBundleEventData, AndroidActivityRequestPermissionsEventData, AndroidActivityResultEventData, AndroidActivityNewIntentEventData, AndroidActivityBackPressedEventData, } from "./application";
export declare const nsApp: {
    launchEvent: string;
    displayedEvent: string;
    uncaughtErrorEvent: string;
    discardedErrorEvent: string;
    suspendEvent: string;
    resumeEvent: string;
    exitEvent: string;
    lowMemoryEvent: string;
    orientationChangedEvent: string;
    getMainEntry: typeof getMainEntry;
    getRootView: typeof getRootView;
    setResources: typeof setResources;
    setCssFileName: typeof setCssFileName;
    getCssFileName: typeof getCssFileName;
    loadAppCss: typeof loadAppCss;
    addCss: typeof addCss;
    on: typeof on;
    off: typeof off;
    run: typeof run;
    orientation: typeof orientation;
    getNativeApplication: typeof getNativeApplication;
    hasLaunched: typeof hasLaunched;
    android: AndroidApplication;
    ios: iOSApplication;
};
import { setString, getString, clear, flush, getAllKeys, getBoolean, getNumber, hasKey, remove, setBoolean, setNumber } from "./application-settings";
export declare const nsSettings: {
    clear: typeof clear;
    flush: typeof flush;
    hasKey: typeof hasKey;
    remove: typeof remove;
    setString: typeof setString;
    getString: typeof getString;
    getAllKeys: typeof getAllKeys;
    getBoolean: typeof getBoolean;
    setBoolean: typeof setBoolean;
    getNumber: typeof getNumber;
    setNumber: typeof setNumber;
};
export { Color } from "./color";
import { connectionType, getConnectionType, startMonitoring, stopMonitoring } from "./connectivity";
export declare const nsConnectivity: {
    connectionType: typeof connectionType;
    getConnectionType: typeof getConnectionType;
    startMonitoring: typeof startMonitoring;
    stopMonitoring: typeof stopMonitoring;
};
export { ObservableArray, ChangeType, ChangedData } from "./data/observable-array";
export { Observable, PropertyChangeData, EventData } from "./data/observable";
export { File, FileSystemEntity, Folder, knownFolders, path } from "./file-system";
export { HttpRequestOptions, HttpResponse, Headers, HttpResponseEncoding, HttpContent } from "./http";
import { getFile, getImage, getJSON, getString as httpGetString, request } from "./http";
export declare const nsHttp: {
    getFile: typeof getFile;
    getImage: typeof getImage;
    getJSON: typeof getJSON;
    getString: typeof httpGetString;
    request: typeof request;
};
export { ImageAsset, ImageAssetOptions } from "./image-asset";
import { ImageSource, fromAsset, fromBase64, fromData, fromFile, fromFileOrResource, fromFontIconCode, fromNativeSource, fromResource, fromUrl } from "./image-source";
export declare const nsImageSource: {
    ImageSource: typeof ImageSource;
    fromAsset: typeof fromAsset;
    fromBase64: typeof fromBase64;
    fromData: typeof fromData;
    fromFile: typeof fromFile;
    fromFileOrResource: typeof fromFileOrResource;
    fromFontIconCode: typeof fromFontIconCode;
    fromNativeSource: typeof fromNativeSource;
    fromResource: typeof fromResource;
    fromUrl: typeof fromUrl;
};
export { isAndroid, isIOS, screen } from "./platform";
export { InstrumentationMode, Level, TimerInfo, disable, dumpProfiles, enable, isRunning, level, log, profile, resetProfiles, start, startCPUProfile, stop, stopCPUProfile, time, timer, trace, uptime } from "./profiling";
export { encoding } from "./text";
import { clearInterval, clearTimeout, setInterval, setTimeout } from "./timer";
export declare const nsTimer: {
    clearInterval: typeof clearInterval;
    clearTimeout: typeof clearTimeout;
    setInterval: typeof setInterval;
    setTimeout: typeof setTimeout;
};
import { DefaultErrorHandler, addCategories, addEventListener, addWriter, categories, clearWriters, disable, enable, error, getErrorHandler, isCategorySet, isEnabled, messageType, notifyEvent, removeEventListener, removeWriter, setCategories, setErrorHandler, write } from "./trace";
export declare const nsTrace: {
    DefaultErrorHandler: typeof DefaultErrorHandler;
    addCategories: typeof addCategories;
    addEventListener: typeof addEventListener;
    addWriter: typeof addWriter;
    categories: typeof categories;
    clearWriters: typeof clearWriters;
    disable: typeof disable;
    enable: typeof enable;
    error: typeof error;
    getErrorHandler: typeof getErrorHandler;
    isCategorySet: typeof isCategorySet;
    isEnabled: typeof isEnabled;
    messageType: typeof messageType;
    notifyEvent: typeof notifyEvent;
    removeEventListener: typeof removeEventListener;
    removeWriter: typeof removeWriter;
    setCategories: typeof setCategories;
    setErrorHandler: typeof setErrorHandler;
    write: typeof write;
};
export * from "./ui";
import { GC, isDataURI, ad, convertString, eliminateDuplicates, escapeRegexSymbols, hasDuplicates, ios as tnsIOS, isFileOrResourcePath, mergeSort, openUrl, layout } from "./utils/utils";
export declare const nsUtils: {
    GC: typeof GC;
    isDataURI: typeof isDataURI;
    ad: typeof ad;
    convertString: typeof convertString;
    eliminateDuplicates: typeof eliminateDuplicates;
    escapeRegexSymbols: typeof escapeRegexSymbols;
    hasDuplicates: typeof hasDuplicates;
    ios: typeof tnsIOS;
    isFileOrResourcePath: typeof isFileOrResourcePath;
    mergeSort: typeof mergeSort;
    openUrl: typeof openUrl;
    layout: typeof layout;
};
export { XmlParser, ParserEventType, ParserEvent } from "./xml";
