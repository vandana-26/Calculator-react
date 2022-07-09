import React from "react";

export default class KeyButtonComponent extends React.Component {
  render() {
    return (
      <div>
        <input
          type="button"
          value="7"
          name="7"
          onClick={(e) => this.props.onClick(e.target.name)}
        />
        <input
          type="button"
          value="8"
          name="8"
          onClick={(e) => this.props.onClick(e.target.name)}
        />
        <input
          type="button"
          value="9"
          name="9"
          onClick={(e) => this.props.onClick(e.target.name)}
        />
        <input
          type="button"
          value="/"
          name="/"
          onClick={(e) => this.props.onClick(e.target.name)}
        />
        <br />
        <input
          type="button"
          value="4"
          name="4"
          onClick={(e) => this.props.onClick(e.target.name)}
        />
        <input
          type="button"
          value="5"
          name="5"
          onClick={(e) => this.props.onClick(e.target.name)}
        />
        <input
          type="button"
          value="6"
          name="6"
          onClick={(e) => this.props.onClick(e.target.name)}
        />
        <input
          type="button"
          value="*"
          name="*"
          onClick={(e) => this.props.onClick(e.target.name)}
        />
        <br />
        <input
          type="button"
          value="1"
          name="1"
          onClick={(e) => this.props.onClick(e.target.name)}
        />
        <input
          type="button"
          value="2"
          name="2"
          onClick={(e) => this.props.onClick(e.target.name)}
        />
        <input
          type="button"
          value="3"
          name="3"
          onClick={(e) => this.props.onClick(e.target.name)}
        />
        <input
          type="button"
          value="-"
          name="-"
          onClick={(e) => this.props.onClick(e.target.name)}
        />
        <br />
        <input
          type="button"
          value="0"
          name="0"
          onClick={(e) => this.props.onClick(e.target.name)}
        />
        <input
          type="button"
          value="."
          name="."
          onClick={(e) => this.props.onClick(e.target.name)}
        />
        <input
          type="button"
          value="="
          name="="
          onClick={(e) => this.props.onClick(e.target.name)}
        />
        <input
          type="button"
          value="+"
          name="+"
          onClick={(e) => this.props.onClick(e.target.name)}
        />
        <br />
        <input
          type="button"
          value="C"
          name="C"
          onClick={(e) => this.props.onClick(e.target.name)}
        />
        <input
          type="button"
          value="CE"
          name="CE"
          onClick={(e) => this.props.onClick(e.target.name)}
        />
        <input
          type="button"
          value="("
          name="("
          onClick={(e) => this.props.onClick(e.target.name)}
        />
        <input
          type="button"
          value=")"
          name=")"
          onClick={(e) => this.props.onClick(e.target.name)}
        />
      </div>
    );
  }
}
