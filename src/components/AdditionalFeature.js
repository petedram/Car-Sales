import React, {useReducer} from 'react';
import { connect } from 'react-redux';
import { addFeature } from '../actions/actions';
import { carReducer, initialState } from '../reducers';




const AdditionalFeature = props => {

  

  const addFeature = e => {
    e.preventDefault();
    props.addFeature(props.feature);
    console.log('AdditionalFeature addFeature', props.feature)
  };

  return (
    <li>
      {console.log()}
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={addFeature} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(
  mapStateToProps,
  {addFeature})(AdditionalFeature);