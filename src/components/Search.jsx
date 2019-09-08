var Search = (props) => {
  let inputField;
  return (
    // passing a reference to the <input> DOM node to the submit click handler. e is the React synthetic event
    <form className="search-bar form-inline" onSubmit={(e) => props.searchSubmit(e, inputField)}>
      {/* The ref attribute on <input> gets a reference to the DOM node for the <input> element */}
      <input className="form-control" type="text" ref={(inputDOMNode) => inputField = inputDOMNode}/>
      <button className="btn hidden-sm-down" type="submit">
        <span className="glyphicon glyphicon-search"></span>
      </button>
    </form>
  );
};

// form and input button to use with controlled components
{/* <form className="search-bar form-inline" onSubmit={props.searchSubmit}></form>
<input className="form-control" type="text" onChange={props.searchTerm}/> */}

Search.propTypes = {
  searchSubmit: React.PropTypes.func.isRequired,
  searchTerm: React.PropTypes.func.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
