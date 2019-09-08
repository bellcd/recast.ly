

var Search = (props) => (
  <form className="search-bar form-inline" onSubmit={props.searchSubmit}>
    <input className="form-control" type="text" onChange={props.searchTerm}/>
    <button className="btn hidden-sm-down" type="submit">
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </form>
);

Search.propTypes = {
  searchSubmit: React.PropTypes.func.isRequired,
  searchTerm: React.PropTypes.func.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
