import VideoListEntry from "./VideoListEntry.js";

var VideoList = (props) => (
  <div className="video-list">
    {props.videos.map((video) => {
      // similar to what happend in App, we have to pass the right props to VideListEntry
      return <VideoListEntry video={video} upDateCurrentVideo={props.upDateCurrentVideo}/>;
      // had to take off the code before <VideoListEntry... and add it to VideoListEntry file on line 8
      // in order for it to pass the tests <div><h5><em>{video.snippet.title}</em></h5> ...</div>
    })}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;
