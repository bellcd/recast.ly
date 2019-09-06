// couldn't get the other way of destructuring to work // This looks great (I think I misunderstood the destructuring syntax!)
// I cleaned up the destructuring so it's not so nested and so we can pass video as an argument

// videosClick = {props.videoClick} passed in as props from VideoList
var VideoListEntry = ({videoClick, video, video: {snippet: {title, description, thumbnails}}}) => (
  // if you don't pass in an anonymous function so you can pass the arguments for "onClick"
  // it will click on load since you're invoking it
  // you want it to invoke... on the actual clicking event
  <div className="video-list-entry media" onClick={ () => videoClick(video)}> {/* does it matter if video is found through closure (like it is currently, right? or should we pass it into the anonymous function? */}
    <div className="media-left media-middle">
      <img className="media-object" src={thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      {/* Also commenting this out since it's a place holder from before <div><h5><em>{title}</em></h5></div> */}
      <div className="video-list-entry-title">{title}</div>
      <div className="video-list-entry-detail">{description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired,
  // we conveniently name the prop that takes in the function the same as its parent so we
  // can keep the "passing down" a bit easier to follow and don't follow into
  // prop hell or whatever it is they call it
  videoClick: React.PropTypes.func.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
