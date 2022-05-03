import React from 'react'
import Styles from './spinner-styles.scss'

const Spinner: React.FC = () => (
  <div className={Styles.spinnerWrap}>
    <div className={Styles.spinner}>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
      <div>
        <div></div>
      </div>
    </div>
  </div>
)

export default Spinner
