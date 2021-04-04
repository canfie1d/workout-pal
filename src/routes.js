import { Route, Switch } from 'react-router-dom';

// PAGES
import Home from './Routes/Home';
import Stretch from './Routes/Stretch';
import GuidedStretch from './Routes/GuidedStretch';
import Workout from './Routes/Workout';
import Workouts from './Routes/Workouts';
import GuidedWorkout from './Routes/GuidedWorkout';
import WorkoutDetails from './Routes/WorkoutDetails';
import NotFound from './Routes/NotFound';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/browse" component={Workouts} />
    <Route exact path='/browse/:id' component={WorkoutDetails} />
    <Route exact path="/stretch" component={Stretch} />
    <Route exact path="/stretch/guided" component={GuidedStretch} />
    <Route exact path="/workout/:week/:day" component={Workout} />
    <Route exact path="/workout/:week/:day/guided" component={GuidedWorkout} />
    <Route component={NotFound} />
  </Switch>
);
