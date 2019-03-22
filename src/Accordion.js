import React, { Component } from 'react'

export class Accordion extends Component {

  static defaultProps = {
    sections: []
  }

    constructor(props) {
        super(props);
        this.state = {
            currentOpenSection: null,
            contentParagraph: null
        }
    }


    handleClick(index) {

        this.setState((prevState) => {
            return {
                currentOpenSection: index
            }
        }, this.renderContent(index))
    }

    renderContent(index) {
        this.setState({
            currentParagraph: (<p>{this.props.sections[index].content}</p>)
        })
    }

    renderButtons() {
        return this.props.sections.map((section, index) => {
            return (
                  <li key={index}>
                      <button onClick={() => this.handleClick(index)}>{section.title}</button>
                  </li>
              )
        })
    }


  render() {
    return (
      <ul>
        {this.renderButtons()}
        {this.state.currentParagraph}
      </ul>
    )
  }
}

export default Accordion
