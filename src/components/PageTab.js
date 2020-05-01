import React from 'react';

class PageTabs extends React.Component {



    isActiveTab(tabName) {
        return (tabName === this.props.currentView) ? 'nav-link active' : 'nav-link';
    }

    onTabClick(event, tabName) {
        event.preventDefault();
        this.props.onViewChange(tabName);
    }

    render () {
        return (
            <ul className='nav nav-pills'>
                <li className='nav-item'>
                    <a className={this.isActiveTab('page1')}
                       onClick={(e) => this.onTabClick(e, 'page1')}>
                        Accounts
                    </a>
                </li>
                <li className='nav-item'>
                    <a className={this.isActiveTab('page2')}
                       onClick={(e) => this.onTabClick(e, 'page2')}>
                        Add Accounts
                    </a>
                </li>
                <li className='nav-item'>
                    <a className={this.isActiveTab('page3')}
                       onClick={(e) => this.onTabClick(e, 'page3')}>
                        Transactions
                    </a>
                </li>
            </ul>
        )
    }

};

export default PageTabs;