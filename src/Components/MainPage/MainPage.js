import React, { Component } from "react";

import "../../../src/App.css";

import Header from "../Header/Header";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundry";
import SearchBox from "../SearchBox/SearchBox";
import Scroll from "../Scroll/Scroll";
import CardList from "../CardList/CardList";

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots();
  }

  filterRobots = () => {
    return this.props.robots.filter(robot => {
      return robot.name
        .toLowerCase()
        .includes(this.props.searchField.toLowerCase());
    });
  };

  render() {
    const { robots, onSearchChange, isPending } = this.props;

    return (
      <div className="tc">
        <Header />
        <SearchBox onSearchChange={e => onSearchChange(e)} />
        <Scroll>
          {isPending ? (
            <h1>Loading</h1>
          ) : (
            <ErrorBoundary>
              <CardList robots={this.filterRobots()} />
            </ErrorBoundary>
          )}
        </Scroll>
      </div>
    );
  }
}

export default MainPage;
