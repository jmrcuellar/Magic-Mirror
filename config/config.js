/* Magic Mirror Config Sample
 *
 * By Michael Teeuw https://michaelteeuw.nl
 * MIT Licensed.
 *
 * For more information on how you can configure this file
 * see https://docs.magicmirror.builders/getting-started/configuration.html#general
 * and https://docs.magicmirror.builders/modules/configuration.html
 */
let config = {
	address: "localhost", 	// Address to listen on, can be:
							// - "localhost", "127.0.0.1", "::1" to listen on loopback interface
							// - another specific IPv4/6 to listen on a specific interface
							// - "0.0.0.0", "::" to listen on any interface
							// Default, when address config is left out or empty, is "localhost"
	port: 8080,
	basePath: "/", 	// The URL path where MagicMirror is hosted. If you are using a Reverse proxy
					// you must set the sub path here. basePath must end with a /
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"], 	// Set [] to allow all IP addresses
															// or add a specific IPv4 of 192.168.1.5 :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.1.5"],
															// or IPv4 range of 192.168.3.0 --> 192.168.3.15 use CIDR format :
															// ["127.0.0.1", "::ffff:127.0.0.1", "::1", "::ffff:192.168.3.0/28"],

	useHttps: false, 		// Support HTTPS or not, default "false" will use HTTP
	httpsPrivateKey: "", 	// HTTPS private key path, only require when useHttps is true
	httpsCertificate: "", 	// HTTPS Certificate path, only require when useHttps is true

	language: "en",
	locale: "en-US",
	logLevel: ["INFO", "LOG", "WARN", "ERROR"], // Add "DEBUG" for even more logging
	timeFormat: 24,
	units: "imperial",
	// serverOnly:  true/false/"local" ,
	// local for armv6l processors, default
	//   starts serveronly and then starts chrome browser
	// false, default for all NON-armv6l devices
	// true, force serveronly mode, because you want to.. no UI on this device

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},
		{
			module: "calendar",
			header: "US Holidays",
			position: "top_left",
			config: {
				calendars: [
					{
						symbol: "calendar-check",
						url: "webcal://www.calendarlabs.com/ical-calendar/ics/76/US_Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third",
			config: {
				updateInterval: 14400000 , //Every 4 hours
				morningEndTime: 14,
				afternoonStartTime: 14,
				remoteFile: "https://raw.githubusercontent.com/jmrcuellar/Magic-Mirror/master/config/dependency/compliments.json"
			}
		},
		{
			module: "weather",
			position: "top_right",
			config: {
				weatherProvider: "openweathermap",
				type: "current",
				showWindDirection: false,
				showFeelsLike: true,
				showSun: true,
				location: "Van Nuys",
				locationID: "5377613", //Van nuys ID
				apiKey: "eac72b34425db3a61ff74815b144eced"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				weatherEndpoint: "/onecall",
				type: "forecast",
				colored: true,
				lat: 34.189857,
				lon: -118.451355,
				locationID: "5395244",  //Van nuys ID
				apiKey: "eac72b34425db3a61ff74815b144eced"
			}
		},
		{
			module: "weather",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				weatherProvider: "openweathermap",
				type: "forecast",
				colored: true,
				location: "Santa Monica",
				locationID: "5393212",  //Van nuys ID
				apiKey: "eac72b34425db3a61ff74815b144eced"
			}
		},
		{
			module: "newsfeed",
			position: "bottom_bar",
			config: {
				feeds: [
					{
						title: "Nursing Times",
						url: "https://www.nursingtimes.net/careers/your-nursing-career/feed/"
					},
					{
						title: "Modern HealthCare",
						url: "https://www.modernhealthcare.com/section/rss/news?days=7&topics=81631",
						reloadInterval: 900000 //15 Minutes
					},
					{
						title: "Life Hacker",
						url: "https://lifehacker.com/rss",
						reloadInterval: 900000 //15 Minutes
					},
					{
						title: "LA Times",
						url: "https://www.latimes.com/local/rss2.0.xml"
					}
				],
				reloadInterval: 900000, //15 Minutes
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true,
				showDescription: true,
				updateInterval: 30000,
				prohibitedWords: ["porn", "murder", "cheat"]
			}
		},
		{
			module: "MMM-GooglePhotos",
			position: "fullscreen_below",
			config: {
				albums: ["Magic Mirror"], // Set your album name. like ["My wedding", "family share", "Travle to Paris"]
				updateInterval: 86400000, // Every 24 hours fetch a new one.
				sort: "random", // "old", "random"
				uploadAlbum: null, // Only album created by `create_uploadable_album.js`.
				condition: {
					fromDate: null, // Or "2018-03", RFC ... format available
					toDate: null, // Or "2019-12-25",
					minWidth: null, // Or 400
					maxWidth: null, // Or 8000
					minHeight: null, // Or 400
					maxHeight: null, // Or 8000
					minWHRatio: null,
					maxWHRatio: null,
					// WHRatio = Width/Height ratio ( ==1 : Squared Photo,   < 1 : Portraited Photo, > 1 : Landscaped Photo)
				},
				showWidth: 1080, // These values will be used for quality of downloaded photos to show. real size to show in your MagicMirror region is recommended.
				showHeight: 1920,
				timeFormat: "YYYY/MM/DD HH:mm", // Or `relative` can be used.
			  }
		},
		{
			module: "MMM-Traffic",
			position: "top_left",
			config: {
				firstLine: "{duration} mins",
				secondLine: "Traffic to Work",
				accessToken: "pk.eyJ1IjoianJlY2lub3MiLCJhIjoiY2t1bWUzNmxsM3FoejJvcWxtdHRqbndjcSJ9.P1bVqKGKhEJfAwr_cUTA_Q",
				//Coordinates must be inputed as Longitude,longitude (reverse order from google maps)
				originCoords: "-118.466753,34.175497", //Target, Sepulveda
				destinationCoords: "-118.485494,34.025318", //BeachWood
				days: [1,2,3,4,5],
				hoursStart: "04:30",
				hoursEnd: "07:30"
			}
		},
		{
			module: "MMM-Traffic",
			position: "top_left",
			config: {
				firstLine: "{duration} mins",
				secondLine: "Traffic to Baby",
				accessToken: "pk.eyJ1IjoianJlY2lub3MiLCJhIjoiY2t1bWUzNmxsM3FoejJvcWxtdHRqbndjcSJ9.P1bVqKGKhEJfAwr_cUTA_Q",
				originCoords: "-118.46675356111979,34.175497370327214", //Target, Sepulveda
				destinationCoords: "-118.42951941843046,34.20717903787753", // Home
				days: [6,0],
				interval: 600000, //10 mins
				hoursStart: "09:00",
				hoursEnd: "2:00"
			}
		},
		{
		    module: 'MMM-connection-status',
		    header: "Internet Connection",
		    position: 'top_left', // Or any valid MagicMirror position.
		    config: {
		        // See 'Configuration options' for more information.
		    }
		},
		{
			module: "MMM-Reddit",
			position: "bottom_left",
			header: "Nature Pics",
			config: {
				subreddit: ['EarthPorn', "funny"],
				displayType: 'image',
				imageQuality: 'high',
				count: 20,
				rotateInterval: 90, //seconds
				show: 1,
				width: 500,
				showAll: true,
				colorText: true,
				titleReplacements: [{toReplace: 'porn', replacement: '', caseSensitive: 'false'}],
				showNumComments: false,
				showScore: false,
				showRank: false
			}
		},
			
		/*
		{
			module: 'MMM-iFrame',
			position: 'bottom_bar',	// This can be any of the regions.
			config: {
				// See 'Configuration options' for more information.
					url: ["ENTER IN URL", "ENTER IN URL2"],  // as many URLs you want or you can just ["ENTER IN URL"] if single URL.
					updateInterval: 0.5 * 60 * 1000, // rotate URLs every 30 seconds
					width: "1280", // width of iframe
					height: "720", // height of iframe
					frameWidth: "400" // width of embedded iframe, height is beeing calculated by aspect ratio of iframe
				}
		}{
			module: 'MMM-BackgroundSlideshow',
		    position: 'fullscreen_below',
		    config: {
		      imagePaths: ['modules/MMM-BackgroundSlideshow/exampleImages/'],
		      transitionImages: true,
		      randomizeImageOrder: true
		    }
		}*/
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}
