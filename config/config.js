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
				albums: ["11 days in California"], // Set your album name. like ["My wedding", "family share", "Travle to Paris"]
				updateInterval: 1000 * 60, // minimum 10 seconds.
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
		/*{
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
