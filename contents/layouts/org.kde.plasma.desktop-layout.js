var plasma = getApiVersion(1);

var layout = {
    "desktops": [
        {
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "0",
                            "configMigrated": "true"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "960",
                            "DialogWidth": "1280"
                        },
                        "/Units": {
                            "pressureUnit": "5008",
                            "speedUnit": "9000",
                            "temperatureUnit": "6001",
                            "visibilityUnit": "2007"
                        },
                        "/WeatherStation": {
                            "source": "wettercom|weather|Shah Alam, Negeri Selangor, MY|MY0SL0009;Shah Alam"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.weather",
                    "title": "Weather Report"
                },
                {
                    "config": {
                        "/": {
                            "CurrentPreset": "org.kde.plasma.systemmonitor",
                            "PreloadWeight": "0"
                        },
                        "/Appearance": {
                            "chartFace": "org.kde.ksysguard.piechart",
                            "title": "Memory Usage"
                        },
                        "/SensorColors": {
                            "memory/physical/used": "137,180,250"
                        },
                        "/Sensors": {
                            "highPrioritySensorIds": "[\"memory/physical/used\"]",
                            "lowPrioritySensorIds": "[\"memory/physical/total\"]",
                            "totalSensors": "[\"memory/physical/usedPercent\"]"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.systemmonitor.memory",
                    "title": "Memory Usage"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "0",
                            "formfactor": "0",
                            "immutability": "1",
                            "lastScreen": "-1",
                            "wallpaperplugin": ""
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "960",
                            "DialogWidth": "1280"
                        },
                        "/General": {
                            "positions": "{\"3840x2160\":[]}",
                            "url": "file:///home/mebaddev/Documents/Projects"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.folder",
                    "title": "Projects"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "29",
                            "popupHeight": "800",
                            "popupWidth": "704"
                        }
                    },
                    "geometry.height": 0,
                    "geometry.width": 0,
                    "geometry.x": 0,
                    "geometry.y": 0,
                    "plugin": "org.kde.plasma.digitalclock",
                    "title": "Digital Clock"
                }
            ],
            "config": {
                "/": {
                    "ItemGeometries-1366x768": "",
                    "ItemGeometries-3840x2160": "Applet-64:1280,608,1248,352,0;Applet-61:32,1536,416,544,0;Applet-62:3040,448,800,608,0;Applet-60:3200,1056,640,640,0;",
                    "ItemGeometriesHorizontal": "Applet-64:1280,608,1248,352,0;Applet-61:32,1536,416,544,0;Applet-62:3040,448,800,608,0;Applet-60:3200,1056,640,640,0;",
                    "formfactor": "0",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "960",
                    "DialogWidth": "1120"
                },
                "/Configuration": {
                    "PreloadWeight": "0"
                },
                "/General": {
                    "ToolBoxButtonState": "top",
                    "ToolBoxButtonX": "1484",
                    "ToolBoxButtonY": "72"
                },
                "/Wallpaper/org.kde.image/General": {
                    "Image": "/home/jay/Downloads/pexels-krivec-ales-547115.jpg",
                    "SlidePaths": "/home/jay/.local/share/wallpapers/,/usr/share/wallpapers/"
                }
            },
            "wallpaperPlugin": "org.kde.image"
        }
    ],
    "panels": [
        {
            "alignment": "left",
            "applets": [
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "960",
                            "DialogWidth": "1280"
                        },
                        "/General": {
                            "favoritesPortedToKAstats": "true"
                        }
                    },
                    "plugin": "org.kde.plasma.kicker"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "18"
                        },
                        "/ConfigDialog": {
                            "DialogHeight": "960",
                            "DialogWidth": "1280"
                        }
                    },
                    "plugin": "org.kde.plasma.appmenu"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "26"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "61"
                        }
                    },
                    "plugin": "org.kde.plasma.betterinlineclock"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "18"
                        }
                    },
                    "plugin": "org.kde.plasma.panelspacer"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "44"
                        },
                        "/General": {
                            "history": "#42acaf"
                        }
                    },
                    "plugin": "org.kde.plasma.colorpicker"
                },
                {
                    "config": {
                        "/": {
                            "PreloadWeight": "100"
                        }
                    },
                    "plugin": "org.kde.plasma.systemtray"
                }
            ],
            "config": {
                "/": {
                    "formfactor": "2",
                    "immutability": "1",
                    "lastScreen": "0",
                    "wallpaperplugin": "org.kde.image"
                },
                "/ConfigDialog": {
                    "DialogHeight": "127",
                    "DialogWidth": "3840"
                },
                "/Configuration": {
                    "PreloadWeight": "18"
                }
            },
            "height": 1.7142857142857142,
            "hiding": "normal",
            "location": "top",
            "maximumLength": 91.42857142857143,
            "minimumLength": 91.42857142857143,
            "offset": 0
        }
    ],
    "serializationFormatVersion": "1"
}
;

plasma.loadSerializedLayout(layout);
