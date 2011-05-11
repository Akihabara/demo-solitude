{
	// Graphic resources.
	addImage:[
		["logo","resources/logo.png"],
		["sea","resources/sea.png"],
		["seaside","resources/seaside.png"],
		["seaside2","resources/seaside2.png"],
		["beach","resources/beach.png"],
		["beach2","resources/beach2.png"],
		["sprites","resources/cels.png"],
		["fontbig","resources/fontbig.png"],
		["font","resources/font.png"]
	],
	addFont:[
		{id:"small",image:"font",firstletter:" ",tileh:8,tilew:8,tilerow:255,gapx:0,gapy:32},
		{id:"big",image:"fontbig",firstletter:" ",tileh:16,tilew:8,tilerow:255,gapx:0,gapy:0},
		{id:"bigred",image:"fontbig",firstletter:" ",tileh:16,tilew:8,tilerow:255,gapx:0,gapy:64}
	],
	addTiles:[
		{id:"player",image:"sprites",tileh:30,tilew:40,tilerow:9,gapx:0,gapy:0},
		{id:"bulletbig",image:"sprites",tileh:14,tilew:15,tilerow:9,gapx:0,gapy:30},
		{id:"spark",image:"sprites",tileh:15,tilew:15,tilerow:3,gapx:0,gapy:44},
		{id:"explosion",image:"sprites",tileh:40,tilew:40,tilerow:6,gapx:0,gapy:59},
		{id:"bulletsmall",image:"sprites",tileh:10,tilew:10,tilerow:2,gapx:0,gapy:99},
		{id:"enemy1",image:"sprites",tileh:30,tilew:30,tilerow:10,gapx:0,gapy:109},
		{id:"enemy2",image:"sprites",tileh:50,tilew:50,tilerow:4,gapx:0,gapy:139},
		{id:"boss",image:"sprites",tileh:97,tilew:188,tilerow:2,gapx:0,gapy:189},
		{id:"powerup",image:"sprites",tileh:20,tilew:20,tilerow:2,gapx:0,gapy:286},
		{id:"symbols",image:"sprites",tileh:13,tilew:17,tilerow:1,gapx:0,gapy:306},
		{id:"faces",image:"sprites",tileh:50,tilew:50,tilerow:7,gapx:0,gapy:319}
	],

	// Audio resources
	addAudio:[
		["default-music",[audioserver+"intro.mp3",audioserver+"intro.ogg"],{channel:"bgmusic",loop:true}],
		["ingame",[audioserver+"ingame.mp3",audioserver+"ingame.ogg"],{channel:"bgmusic",loop:true}],
		["ending",[audioserver+"ending.mp3",audioserver+"ending.ogg"],{channel:"bgmusic",loop:true}],
		["boss",[audioserver+"boss.mp3",audioserver+"boss.ogg"],{channel:"bgmusic",loop:true}],
		["default-menu-option",[audioserver+"select.mp3",audioserver+"select.ogg"],{channel:"sfx"}],
		["default-menu-confirm",[audioserver+"start.mp3",audioserver+"start.ogg"],{channel:"sfx"}],
		["explosion",[audioserver+"explosion.mp3",audioserver+"explosion.ogg"],{channel:"sfx"}],
		["megaexplosion",[audioserver+"megaexplosion.mp3",audioserver+"megaexplosion.ogg"],{channel:"sfx"}],
		["powerup",[audioserver+"powerup3.mp3",audioserver+"powerup3.ogg"],{channel:"sfx"}],
		["beep",[audioserver+"voice_narrator.mp3",audioserver+"voice_narrator.ogg"],{channel:"sfx"}],
		["beepbad",[audioserver+"voice_bad.mp3",audioserver+"voice_bad.ogg"],{channel:"sfx"}],
		["foefire",[audioserver+"eat.mp3",audioserver+"eat.ogg"],{channel:"sfx"}],
		["laser",[audioserver+"laser.mp3",audioserver+"laser.ogg"],{channel:"sfx",volume:0.5}]
	],

	// Sub-resource files.
	addBundle:[
		// This file contains dialogue data
		{file:"resources/bundle-dialogues.js"},

		// Enemies logic and models
		{file:"resources/bundle-enemies.js"},

		// These are stage data
		{file:"resources/bundle-attractmode.js"},
		{file:"resources/bundle-stage1.js"}
		// {file:"resources/bundle-stage2.js"}, // For now stage2 is only a placeholder. Uncomment and start developing!

	]
}
