// we need to import our face data here so we can pass it as the props to the VideoList
// import exampleVideoData from "/src/data/exampleVideoData.js";
// We also need to get acces to render it
import VideoList from "./VideoList.js";
// same thing with the VideoPlayer component
import VideoPlayer from "./VideoPlayer.js";
import YOUTUBE_API_KEY from "../config/youtube.js";
import exampleVideoData from "../data/exampleVideoData.js";
import Search from "./Search.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //one video object with empty fields initially
      videos: [],
      //videos: exampleVideoData,
      //default video?
      currentVideo: exampleVideoData[0],
      query: 'cats',
      timeout: null
    };
    // styling best practice: put bind functions below state
    this.onVideoClick = this.onVideoClick.bind(this);
    // uncontrolled component
    // this.input = React.createRef();
  }


  onVideoClick (video) {
    this.setState({
      currentVideo: video
    });
  }

  // // controlled component
  // // will render for every change in the search bar -> input
  // onSearchUpdate (event) {
  //   this.setState({
  //     query: event.target.value
  //   });
  // }

  // will get the right videos from youtube with the search term
  onSearchSubmit (event, inputField) {
    event.preventDefault();
    var options = {
      key: YOUTUBE_API_KEY,
      max: '5',
      // query: this.state.query
      query: inputField.value // reads the value of the inputField argument, the <input> DOM node
    };

    // debouncing the ajax request so it only fires 1x per 500ms max
    let debounce = () => {
      // user feedback would go here that they're sending requests too quickly
      if (this.state.timeout !== null) {
        alert(`Too many searches too quickly. Please wait a moment and search again for ${inputField.value}`);
        clearTimeout(this.state.timeout);
      }

      this.props.searchYouTube(options, (data) => {
        this.setState({
          videos: data.items
        });
      });
    };

    // queueing the debounced ajax call, and keeping track of its timer in state
    this.setState({
      timeout: setTimeout(debounce, 500)
    });
  }


  componentDidMount() {
    var options = {
      key: YOUTUBE_API_KEY,
      max: '5',
      query: this.state.query // hardcoded sample string, this will change as we collect input from the search field
    };
    this.props.searchYouTube(options, (data) => {
      this.setState({
        videos: data.items
      });
    });
  }

  render() {
    // console.log('hello', this.state);
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div>
              <h5>
                {/* for controlled components */}
                {/* <Search searchTerm={this.onSearchUpdate.bind(this)} searchSubmit={this.onSearchSubmit.bind(this)} /> */}
                <Search searchSubmit={this.onSearchSubmit.bind(this)} />
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
              {/* I don't follow what's happening here ... will experiment a bit ... */}
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
