import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Login from './pages/Login';
import Timeline from './pages/Timeline';
import New from './pages/New';

const Routes = createAppContainer(
    createStackNavigator({
        Login,
        Timeline,
        New
    })
);

export default Routes;