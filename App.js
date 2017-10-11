import { StackNavigator } from 'react-navigation';
import SearchScreen from './SearchScreen';
import BookScreen from './BookScreen';


const App = StackNavigator({
  Search: { screen: SearchScreen },
  Book: { screen: BookScreen }
});

export default App;