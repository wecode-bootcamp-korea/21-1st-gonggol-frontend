import React from 'react';

class InputBox extends React.Component {
  render() {
    return (
      <>
        <label className="item">
          {this.props.name}
          <span className="required">*</span>
        </label>
        <div className="item">
          <input type={this.props.type} />
          {this.props.text && <span>{this.props.text}</span>}
        </div>
      </>
    );
  }
}
export default InputBox;
