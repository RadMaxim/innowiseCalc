let allState = {
  currentOp: "0",
  operation: "",
  prevOperation: "",
};
function updateStates(newStates) {
  console.log(newStates);
  console.log(newStates);
  console.log(newStates);
  console.log(newStates);
  allState = { ...allState, ...newStates };
}
export { updateStates, allState };
