// couldn't get the other way of destructuring to work // This looks great (I think I misunderstood the destructuring syntax!)
var VideoListEntry = ({video: {snippet: {title, description, thumbnails: {default: {url}}}}}) => (
  <div className="video-list-entry media">
    <div className="media-left media-middle">
      <img className="media-object" src={url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{title}</div>
      <div className="video-list-entry-detail">{description}</div>
    </div>
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoListEntry.propTypes = {
  video: React.PropTypes.object.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default VideoListEntry;
