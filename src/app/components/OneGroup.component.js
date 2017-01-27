import React, {Component} from 'react';
import OneColumn from './simple/OneColumn.component';
import {FieldArray, Field} from 'redux-form';

class OneGroup extends Component {

  constructor(props) {
    super(props);
    this.handleOnRemoveCard = this.handleOnRemoveCard.bind(this);
  }

  static get propTypes() {
    return {
      removeGroup: React.PropTypes.func,
      index: React.PropTypes.number,
      group: React.PropTypes.string.isRequired
    };
  }

  handleOnRemoveCard() {
    const {removeGroup, index} = this.props;
    console.log(index, removeGroup);
    removeGroup(index);
  }

  render() {
    const {group, index} = this.props;
    console.log(group);
    return (<div className="row">
      <div className="column">
        <div className="card">
          <div className="card-divider">
            <div className="row align-middle">
              <div className="column">
                <label>Card name
                  <Field type="text" component="input" name={`${group}.name`} placeholder="card name"/>
                </label>
              </div>
              <div className="column text-right">
                <button className="alert button" type="button" onClick={this.handleOnRemoveCard}>Remove group</button>
              </div>
            </div>
          </div>
          <div className="card-section">
            <div className="row">
              <div className="column">
                <FieldArray name={`${group}[${index}].twitterMatchGroups`} label={'twitter influencer'} component={OneColumn}/>
              </div>
              <div className="column">
                <FieldArray name={`${group}[${index}].instagramMatchGroups`} label={'instagram influencer'} component={OneColumn}/>
              </div>
              <div className="column">
                <FieldArray name={`${group}[${index}].keywords`} label={'keywords'} component={OneColumn}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>);
  }
}

export default OneGroup;

