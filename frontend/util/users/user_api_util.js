export const editUser = (user, userId) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/users/${userId}/`,
    data: user,
    contentType: false,
    processData: false
  });
};
