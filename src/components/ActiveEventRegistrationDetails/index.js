import {Component} from 'react'
import './index.css'

class ActiveEventRegistrationDetails extends Component {
  renderInitialView = () => (
    <div className="initial-view-container">
      <p className="no-view-heading">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  renderRegisteredView = () => (
    <div className="registered-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-img"
      />
      <h1 className="registered-heading">
        You have already registered for the event
      </h1>
    </div>
  )

  yetToRegisterView = () => (
    <div className="yet-to-register-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yet-to-register-img"
      />
      <p className="description">
        A live performance brings so much to your relationship with dance.
        Seeing you dance live can often make you fall totally in love with this
        beautiful art form
      </p>
      <button type="button" className="register-btn">
        Register Here
      </button>
    </div>
  )

  renderRegistrationClosedView = () => (
    <div className="closed-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="closed-img"
      />
      <h1 className="closed-heading">Registrations Are Closed Now!</h1>
      <p className="closed-description">
        Stay tuned. We will reopen the registrations soon.
      </p>
    </div>
  )

  render() {
    const statusConstants = {
      initial: 'INITIAL',
      yetToRegister: 'YET_TO_REGISTER',
      registered: 'REGISTERED',
      registrationsClosed: 'REGISTRATIONS_CLOSED',
    }
    const {activeStatus} = this.props
    switch (activeStatus) {
      case statusConstants.registered:
        return this.renderRegisteredView()
      case statusConstants.yetToRegister:
        return this.yetToRegisterView()
      case statusConstants.registrationsClosed:
        return this.renderRegistrationClosedView()
      default:
        return this.renderInitialView()
    }
  }
}

export default ActiveEventRegistrationDetails
