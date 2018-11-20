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
        <div onClick={editComment}><li>Edit</li></div>
        <div onClick={deleteComment}><li>Delete</li></div>
      </ul>
    );
  }
};

export default EditMenu;
