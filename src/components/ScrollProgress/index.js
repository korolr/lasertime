import React from 'react';
import PropTypes from 'prop-types'


class ScrollProgress extends React.Component {
    state = {
        to: null,
        browserHeight: null,
        pageHeight: null,
        totalScrollableArea: null,
        currentPage: null
    }

    componentDidMount() {
        window.addEventListener('scroll', this._onScroll)
        setTimeout(this._initialize, 200)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this._onScroll)
    }

    _initialize = () => {
        const pageHeight = document.body.scrollHeight
        const totalScrollableArea = pageHeight - window.innerHeight

        this.setState({
            browserHeight: window.innerHeight,
            pageHeight: pageHeight,
            totalScrollableArea: totalScrollableArea,
            currentPage: window.location.pathname
        })
    }

    _onScroll = () => {

        if (this.state.to) {
            clearTimeout(this.state.to)
        }

        const id = setTimeout(() => {
            if (this.state.currentPage !== window.location.pathname) {
                this._initialize()
            }
            let scrolled = document.body.scrollTop

            let percentage = (scrolled / this.state.totalScrollableArea).toFixed(2) * 100
            this.refs.ScrollProgressValue.style.width = percentage + '%'
        }, 100)

        this.setState({
            to: id
        })
    }

    render() {
        return (
            <div className="ScrollProgress">
                <div
                    ref="ScrollProgressValue"
                    className="ScrollProgress__value"
                    style={ { backgroundColor: this.props.backgroundColor } }>
                </div>
            </div>
        );
    }
}


ScrollProgress.propTypes = {
    backgroundColor: PropTypes.string,
    route: PropTypes.object
};


ScrollProgress.defaultProps = {
    backgroundColor: '#32a5f0'
};


export default ScrollProgress;
