// we need to import our fake data here so we can pass it as the props to the VideoList
import exampleVideoData from "/src/data/exampleVideoData.js";
// We also need to get acces to render it
import VideoList from "./VideoList.js";
// same thing with the VideoPlayer component
import VideoPlayer from "./VideoPlayer.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
    // styling best practice: put bind functions below state
    this.onVideoClick = this.onVideoClick.bind(this);
  }

  onVideoClick (video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <h5>
                <em>search</em> view goes here
              </h5>
            </div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div>
              <h5>
                {/* I commented this out because I think it was also a place holder */}
                {/* <em>{this.state.currentVideo.snippet.title}</em> */}
                <VideoPlayer video={this.state.currentVideo} />
              </h5>
            </div>
          </div>
          <div className="col-md-5">
            {/* because of the way props is defined on VideoList, it has to be called "videos", see line 14 of that file */}
            {/* when you bind the click to the div with the video list, you can click on the titles */}
            <div>
              {/* here is another way to not have to bind an onClick event on a component with line 16 above */}
              {/* <button onClick={() => this.onVideoListEntryClick}></button> */}
              <h5>
                {/* I commented this out because I think this was more of a place holder <em>videoList</em> */}
                {/* This is the tricky part, first you have to realize that in order for the
                    actual VideoListEntry component to get access to the onVideoClick fucntion
                    you'll have to pass down that function from the parent - App - to its child
                    - the Video List component - and then, to Video List Entry. But in order to do that
                    You have to create a new prop to hold this info and you'll have to create it
                    on both children */}
                <VideoList videos={this.state.videos} videoClick={this.onVideoClick} />
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
