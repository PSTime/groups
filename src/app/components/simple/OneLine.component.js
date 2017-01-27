import React, {Component} from 'react';
import {Field} from 'redux-form';

class OneLine extends Component {

  constructor(props) {
    super(props);
    this.handleOnRemoveLine = this.handleOnRemoveLine.bind(this);
  }

  static get propTypes() {
    return {
      label: React.PropTypes.string,
      removeLine: React.PropTypes.func,
      index: React.PropTypes.number,
      line: React.PropTypes.string
    };
  }

  handleOnRemoveLine() {
    const {removeLine, index} = this.props;
    removeLine(index);
  }

  render() {
    const {label, line} = this.props;
    return (<div className="row column">
      <label>{label}</label>
      <div className="input-group">
        <div className="input-group-button">
          <button className="button alert" type="button" onClick={this.handleOnRemoveLine}>
            <i className="fa fa-trash"/>
          </button>
        </div>
        <Field component="input" name={`${line}.influencers`} className="input-group-field" type="text"/>
        <span className="input-group-label">$</span>
      </div>
    </div>);
  }
}

export default OneLine;
