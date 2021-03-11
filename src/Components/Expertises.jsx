import React, { Component } from "react";
import axios from "axios";
// import { APIHandler } from "./../api/handler";

// const apiHandler = new APIHandler("/api/expertises");
const apiExpertisesUrl = "http://localhost:4000/api/expertises";

export default class Expertises extends Component {
  state = {
    expertises: [],
  };

  async componentDidMount() {
    try {
      await axios.get(apiExpertisesUrl).then((res) => {
        this.setState( res.data );
      });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const expertises = this.state.expertises;
    return (
      <div>
        <h1>Hello !</h1>
        <ul style={{listStyle: "none"}}>
          {expertises.map((expertise, i) => (
            <li key={i} style={{textTransform: "uppercase"}} >{expertise.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
