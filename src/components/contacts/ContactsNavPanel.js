import React from 'react'
import TabSelectPanel from './ContactsTabSelectPanel'
import SVGMapTab from './ContactsMetroTab'
import GMapTab from './ContactsNavTab'
import TaxiTab from './ContactsTaxiTab'

class ContactsNavPanel extends React.Component {
    state = {
        display: 'metro', // metro, nav, taxi
    }

    getActiveTabElement = mode => {
        switch (mode) {
            case 'metro':
                return <SVGMapTab />
            case 'nav':
                return <GMapTab />
            case 'taxi':
                return <TaxiTab />
            default:
                return null
        }
    }

    toggleChangeMode = newMode => {
        if (newMode !== this.state.display) {
            this.setState({
                display: newMode,
            })
        }
    }

    render() {
        const activeTabElement = this.getActiveTabElement(this.state.display)

        return (
            <div className="ContactsNavPanel">
                {activeTabElement}
                <TabSelectPanel
                    activeMode={this.state.display}
                    changeMode={this.toggleChangeMode}
                />
            </div>
        )
    }
}

export default ContactsNavPanel
