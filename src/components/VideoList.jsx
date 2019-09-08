import VideoListEntry from "./VideoListEntry.js";

// props passed in were videos={App.state.videos.items} and videosClick={[function]}
var VideoList = (props) => {
  return (
    <div className="video-list" >
      {props.videos.map((video) => {
        // similar to what happend in App, we have to pass the right props to VideListEntry
        // key is like a "private" prop type - that's how we can do a fix for the
        // ERROR: react.js:18798 Warning: Each child in an array or iterator should have a unique "key" prop.
        return <VideoListEntry video={video} key={video.id.videoId} videoClick={props.videoClick}/>;
        // had to take off the code before <VideoListEntry... and add it to VideoListEntry file on line 8
        // in order for it to pass the tests <div><h5><em>{video.snippet.title}</em></h5> ...</div>
      })}
    </div>
  );
};


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired,
  // we want to not name our prop that will take in our clicking event handling function
  // the same as "onClick" because that is a naming convention reserved for that event
  // happening on the actual (html) component - See VideListEntry line 5
  videoClick: React.PropTypes.func.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
