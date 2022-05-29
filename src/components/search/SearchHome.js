//search
import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../constants/api";

import { withRouter } from "react-router";
import PropTypes from "prop-types";

import { IoMdSearch } from "react-icons/io";

//IoMdSearch

class SearchHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectOptions: [],
      id: "",
      name: "",
    };
  }

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  async getOptions() {
    const res = await axios.get(BASE_URL + "wc/store/products?per_page=27");
    const data = res.data;

    const options = data.map((d) => ({
      value: d.id,
      label: d.name,
    }));

    this.setState({ selectOptions: options });
  }

  handleChange(e) {
    this.setState({ id: e.value, name: e.label });
  }

  componentDidMount() {
    this.getOptions();
  }

  browseList(e) {
    if (e.code !== "Enter") {
    } else if (e.code === "Enter") {
      this.props.history.push(`./detail/${this.state.id}`);
      e.target.value = "";
    }
  }

  render() {
    console.log(this.state.selectOptions);
    return (
      <div className="search" props={this.props}>
        <div className="search__input">
          <Select
            className="searchselect"
            onChange={this.handleChange.bind(this)}
            onKeyDown={this.browseList.bind(this)}
            placeholder="Search for accommodation ..."
            components={{
              DropdownIndicator: () => "",
              IndicatorSeparator: () => "",
            }}
            options={this.state.selectOptions}
          />
        </div>
        <div className="search__icon">
          <Link to={`./detail/${this.state.id}`}>
            <IoMdSearch />
          </Link>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchHome);
