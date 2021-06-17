import React from 'react';

class InputBox extends React.Component {
  render() {
    const { type, name, className, placeholder, value, onChange } = this.props;

    return (
      <>
        <div className="loginInput">
          <div className="item">
            <input
              type={type}
              name={name}
              className={className}
              placeholder={placeholder}
              value={value}
              onChange={onChange}
            />
          </div>
        </div>
      </>
    );
  }
}
export default InputBox;
