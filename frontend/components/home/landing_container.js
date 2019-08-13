import { connect } from 'react-redux';

import Landing from './landing';
import { requestAllHarvests, updateHarvest, createHarvest } from '../../actions/harvest_actions';

const mapStateToProps = (state) => ({
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = dispatch => ({
  requestAllHarvests: () => dispatch(requestAllHarvests()),
  updateHarvest: (harvest) => dispatch(updateHarvest(harvest)),
  createHarvest: (harvest) => dispatch(createHarvest(harvest)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Landing);