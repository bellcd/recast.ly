var searchYouTube = (options, callback, timeout) => {
  // I patterned this ajax call off of what we did with the last sprint.
  // the specifics I got from the YouTube API docs
  $.ajax({
    url: `https://www.googleapis.com/youtube/v3/search`,
    type: 'GET',
    contentType: "application/json",
    dataType: 'json',
    data: {
      key: options.key, // almost certain this is an unsafe way to send an API key, I think we're learning a better method later ...
      part: `snippet`,
      q: options.query,
      maxResults: options.max ? options.max : 5,
      videoEmbeddable: true,
      type: 'video',
    },
    success: callback,
    error: function(message) {
      console.log(message);
    },
  });
};

export default searchYouTube;
