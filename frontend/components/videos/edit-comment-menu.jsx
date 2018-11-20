import React from 'react';

class EditMenu extends React.Component {
  componentDidMount() {
    this.props.focus();
  }

  render() {
    const {
      setEditMenuBtn,
      hideEditMenu,
      editComment,
      deleteComment} = this.props;
    return (
      <ul
      tabIndex = "0"
      ref={setEditMenuBtn}
      onBlur={hideEditMenu}
      className="comment-details-menu">
        <li onClick={editComment}>Edit</li>
        <li onClick={deleteComment}>Delete</li>
      </ul>
    );
  }
};

export default EditMenu;
