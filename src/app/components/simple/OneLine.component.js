import React, {Component} from 'react';
import {Field} from 'redux-form';
import {requiredValidator} from '../../libs/validators.lib';

class OneLine extends Component {

  constructor(props) {
    super(props);
    this.handleOnRemoveLine = this.handleOnRemoveLine.bind(this);
    this._renderField = this._renderField.bind(this);
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

  _renderField({input, type, meta: {touched, error}}) {
    return (<div className="input-group">
      <div className="input-group-button">
        <button className="button alert" type="button" onClick={this.handleOnRemoveLine}>
          <i className="fa fa-trash"/>
        </button>
      </div>
      <input {...input} type={type} className="input-group-field"/>
        {!touched && error && <span className="input-group-label"><i className="fa fa-info"/></span>}
        {touched && error && <span className="input-group-label"><i className="fa fa-times"/></span>}
        {touched && !error && <span className="input-group-label"><i className="fa fa-check"/></span>}
    </div>);
  }

  render() {
    const {label, line} = this.props;
    return (<div className="row column">
      <label>{label}</label>
      <Field component={this._renderField} name={`${line}.influencers`} type="text" validate={requiredValidator}/>
    </div>);
  }
}

export default OneLine;
