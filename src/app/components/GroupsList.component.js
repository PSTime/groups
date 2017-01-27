import React, {Component} from 'react';

class GroupsList extends Component {

  static get propTypes() {
    return {};
  }

  render() {
    return (<div className="row">
      <div className="column">
        <div className="card">
          <div className="card-divider">
            <div className="row align-middle">
              <div className="column">
                <label>Card name
                  <input type="text" placeholder="card name"/>
                </label>
              </div>
              <div className="column text-right">
                <button className="alert button">Remove group</button>
              </div>
            </div>
          </div>
          <div className="card-section">
            <div className="row">
              <div className="column">
                <div className="row column">
                  <label>Label</label>
                  <div className="input-group">
                    <div className="input-group-button">
                      <button className="button alert" type="button">
                        <i className="fa fa-trash"/>
                      </button>
                    </div>
                    <input className="input-group-field" type="text"/>
                    <span className="input-group-label">$</span>
                  </div>
                </div>
              </div>
              <div className="column">
              </div>
              <div className="column">
              </div>
            </div>
          </div>
        </div>
        <button className="success button">Add card</button>
      </div>
    </div>);
  }
}

export default GroupsList;
