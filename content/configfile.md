---
title: "Configuration File"
metaTitle: "OpenDiablo II - Configuration File"
metaDescription: "OpenDiablo II configuration file"
---

There is a configuration file (config.json) that should be located in the root folder. The following table describes the different options and what they mean.

|Setting Name |	Description |
|-|-|
|`Language`	|Defines the locale the game is running in. For english this should be set to ENG. Other values include (but are not limited to) `CHI`, `DEU`, `ESP`, `FRA`, `ITA`, `JPN`, etc.|
| `FullScreen` |	Determines if the client is initially full screen or not. Do note that fullscreen mode can be toggled at any time with `ALT`+`ENTER`.|
| `Scale` |	Defines the graphical scale of the game. this value is a decimal number representing the direct scale of the game. For example, a scale of 1.25 will increase the size of the game to 1 1/4 the original size. Note that full screen will always scale to match the proper aspect ratio.|
| `TicksPerSecond` | Determines how often the engine updates. Please note that the core will always run game-level updates at exactly 25FPS to match the original engine.|
| `RunInBackground` |	If true, the game will continue running when the window is not focused. If false, the game will stop running when the window looses focus.|
| `VsyncEnabled` |	Determines if screen updates are synchronized on the (real or virtual) vblank of your display.|
| `SfxVolume` |	A decimal value between `0.0` and `1.0` representing how loud sound effects should be.|
| `BgmVolume` |	A decimal value between `0.0` and `1.0` representing how loud background music should be.|
| `MpqPath` |	The base path of where the MPQ files are located. If you install Diablo2+LOD on linux with wine using the default settings, OpenDiablo 2 will automatically check the wine prefix for the path if it is still set to the windows path.|
| `MpqLoadOrder` |	This is the list of MPQs to load. In the event that the same file is in multiple MPQs, the first MPQ (highest on the list) will be the one from which the file will be loaded.|