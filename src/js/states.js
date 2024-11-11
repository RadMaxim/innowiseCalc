let allState = {
  currentOp: "0",
  operation: "",
  prevOperation: "",
};
function updateStates(newStates) {
  allState = { ...allState, ...newStates };
}
export { updateStates, allState };
