import {React} from 'react';
import { IndexRoute } from 'react-router'

const Dashboard = React.createClass({
    render() {
    return <div>Welcome to the app!</div>
}
})

render((
    <Router>
    <Route path="/" component={App}>
    {/* Show the dashboard at / */}
    <IndexRoute component={Dashboard} />
    <Route path="about" component={About} />
    <Route path="inbox" component={Inbox}>
    <Route path="messages/:id" component={Message} />
    </Route>
    </Route>
    </Router>
), document.body)