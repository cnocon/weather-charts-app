// set a default state in arg
export default function(state=null, action) {
  console.log('Action Received in Reducer', action);
  return state;
}
