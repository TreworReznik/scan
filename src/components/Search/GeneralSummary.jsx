import React, {useEffect, useState} from "react";

import styles from '../../styles/GeneralSummary.modules.css'
import SummarySlider from "./SummarySlider";
import axios from "axios";
import {histograms_url} from "../../data/data";
import {useNavigate} from "react-router-dom";



class GeneralSummary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            histograms_data: this.props.histograms_data,
            data: {}
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

        if (this.state.histograms_data !== prevProps.histograms_data) {

            this.setState({
                histograms_data: prevProps.histograms_data
            })

            this.getSummary()
        }
    }

    getSummary() {
        let accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
            (async () => {

                    await axios.post(
                        histograms_url,
                        this.props.histograms_data,
                        {
                            headers:
                                {"Authorization": `Bearer ${accessToken}`}
                        })

                        .then(response => {
                            this.setState({
                                data: response.data,
                                isLoaded: true
                            });

                        }).catch(error => {
                            console.error(error)
                        })
                }
            )
            ();
        } else {
            localStorage.removeItem('accessToken');
            const navigate = useNavigate();
            navigate('/search')
        }
    }

    render() {

        return (
            <div className={styles.summary}>
                <h2>Общая сводка</h2>
                <p>Найдено {} вариантов</p>
                <div>
                    <SummarySlider data={this.state.data} isLoaded={this.state.isLoaded}/>
                </div>

            </div>
        )
    }


}

export default GeneralSummary;