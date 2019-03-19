import React, { Component } from 'react';
import './App.css';

const data = [
  {
    name: "Winnie",
    cards: [
      "Lorem ipsum dolor.",
    "Ut enim ad minim."
    ]
  },
  {
    name: "Bob",
    cards: [
      "Lorem ipsum dolor.",
    "Ut enim ad minim."
    ]
  },
  {
    name: "Thomas",
    cards: [
      "Lorem ipsum dolor.",
    "Ut enim ad minim."
    ]
  },
  {
    name: "George",
    cards: [
      "Lorem ipsum dolor.",
    "Ut enim ad minim."
    ]
  }
]

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: data
    }
    this.handleClick = this.handleClick.bind(this)
    this.handleMove = this.handleMove.bind(this)
  }

  handleClick(e) {
    // console.log(e.target.name)
    let text = prompt("Add a card: ")

    let currentName = e.target.name
    let newData = [...this.state.data]
    let currentPersonIdx = newData.findIndex((person) => person.name === currentName)
    newData[currentPersonIdx].cards.push(text)
    // console.log(text)
    if (text) {
      this.setState({
        data: newData
      })
    }
  }

  handleMove(e) {
    // console.log("clicked")
    console.log(e.target.name)

    // let card = document.getElementById()

  }

  render() {
    return (
      <div className="App">
        {
          this.state.data.map((person, idx) => {
            return (
              <div key={`column-${idx}`} className="column">
                <h1 id={person.name}>{person.name}</h1>
                {
                  person.cards.map((card, idx) => {
                    if (person.name === "Winnie")
                    return (
                      <div className="card" key={`card-${idx}`}>
                        <p id={`${person.name}-card-${idx}`}>{card}</p>
                        <button
                        type="button"
                        name={`${person.name}-right`}
                        onClick={this.handleMove}>
                          >
                        </button>
                      </div>
                    )
                    else if (person.name === "George")
                    return (
                      <div className="card" key={`card-${idx}`}>
                        <button
                        type="button"
                        name={`${person.name}-left`}
                        onClick={this.handleMove}>
                          &lt;
                        </button>
                        <p>{card}</p>
                      </div>
                    )
                    else
                    return (
                      <div className="card" key={`card-${idx}`}>
                        <button
                        type="button"
                        name={`${person.name}-left`}
                        onClick={this.handleMove}>
                          &lt;
                        </button>
                        <p>{card}</p>
                        <button
                        type="button"
                        name={`${person.name}-right`}
                        onClick={this.handleMove}>
                          >
                        </button>
                      </div>
                    )
                  })

                }
                <button onClick={this.handleClick} type="button" name={person.name}>+ Add a card.</button>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default App;
