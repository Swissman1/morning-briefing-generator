export const config = {
  // Location for weather (Islington, London)
  location: {
    name: 'Charlotte',
    latitude: 35.2183,
    longitude: -80.8433,
    timezone: 'America/New_York'
  },


  // RSS feeds to monitor (name: url)
  rssFeeds: {
    'Simon Willison': 'https://simonwillison.net/atom/everything/'
    // Add more RSS feeds here, e.g.:
    // 'Julia Evans': 'https://jvns.ca/atom.xml',
    // 'Dan Luu': 'https://danluu.com/atom.xml'
  },



  // Tide location RSS feed
  tideFeed: 'https://www.tidetimes.org.uk/london-bridge-tower-pier-tide-times.rss',



  // Weather settings
  weather: {
    // Hours ahead to check for rain
    hoursAhead: 12,
    // Rain probability thresholds
    rainThresholds: {
      definitelyNeed: 60,  // "Take umbrella"
      maybeNeed: 30        // "Maybe take umbrella"
    }
  },

  // Content settings
  content: {
    // Hours to look back for new content
    recentHours: 48,
  }
};
