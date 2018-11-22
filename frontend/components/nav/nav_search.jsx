import React from 'react';

class NavSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
    };

    this.search = this.search.bind(this);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  search(e) {
    e.preventDefault();
    const {search} = this.state;
    if (search.length != 0) {
      this.props.submitSearch(search);
    }
  }

  render () {
    return (
      <form onSubmit={this.search} className="nav-search">
        <input type="text" placeholder="Search" onChange={this.update("search")} value={this.state.search}/>
        <input type="submit" style={{display: "none"}} />
        <i onClick={this.search} className="fab fa-sistrix"></i>
      </form>
    );
  }
}

export default NavSearch;
