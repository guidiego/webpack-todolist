export const saveTree = (tree) => {
  localStorage.setItem('todolist_data', JSON.stringify(tree));
}

export const recoverTree = () => {
  return JSON.parse(localStorage.getItem('todolist_data'));
}
