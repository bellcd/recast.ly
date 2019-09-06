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
                <em>{this.state.currentVideo.snippet.title}</em>
                <VideoPlayer video={this.state.currentVideo} />
              </h5>
            </div>
          </div>
          <div className="col-md-5">
            {/* because of the way props is defined on VideoList, it has to be called "videos", see line 14 of that file */}
            <div>
              <h5>
                <em>videoList</em>
                <VideoList videos={this.state.videos} />
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
