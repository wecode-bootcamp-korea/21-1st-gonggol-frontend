import React from 'react';

class CheckBox extends React.Component {
  render() {
    return (
      <>
        <label className="item">
          {this.props.name}
          <span className="required">*</span>
        </label>
        <div className="item">
          <input type={this.props.type} />
          {<span>{this.props.consent}</span>}
          {<p>{this.props.text}</p>}
        </div>
      </>
    );
  }
}

export default CheckBox;
