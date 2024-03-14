import React, {Component} from "react";
import styles from '../../styles/Authorization.modules.css'

import groupPeople from '../../images/authorization/Homo sapiens.svg'
import lock from '../../images/authorization/lock.svg'

class Authorization extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true,
        };
    }
    render() {
        return(
            <div className={styles.wrapper}>
                <div>
                    <div>
                        <h1>Для оформления подписки </h1>
                        <h1>на тариф, необходимо </h1>
                        <h1>авторизоваться.</h1>
                    </div>
                    <img src={groupPeople} alt='group_people' />
                </div>

                <div>
                    <img src={lock} alt='lock'/>
                    <div>

                    </div>
                </div>
            </div>
        );

    };
}

export default Authorization;