import React from 'react';

import AccountList from "./AccountList";
import PageTabs from "./PageTab";
import AddNewAccount from "./AddNewAccount";
class App extends React.Component {

    state = {
        view: 'page1',
    }

    onViewChange(view) {
        this.setState({ view });
    }

    wrapPage(jsx) {
        const { view } = this.state;
        return (
            <div className="container">
                <PageTabs currentView={view}
                          onViewChange={this.onViewChange.bind(this)}/>
                {jsx}
            </div>
        );
    }



    render() {
       const { view } = this.state;

        switch (view) {
            case 'page1':
                return (this.wrapPage(
                    <AccountList />
                ));
            case 'page2':
                return (this.wrapPage(
                    <AddNewAccount />
                ));
            case 'page3':
                return (this.wrapPage(
                    <h5>Transaction</h5>
                ));
            default:
                return (this.wrapPage(
                    <h2>Invalid Tab, choose another</h2>
                ));
        }

    }

}
export default App;