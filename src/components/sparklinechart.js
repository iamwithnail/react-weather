/**
 * Created by chris on 13/03/17.
 */

//no need to use state, so can be a functional component
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

export default (props) => {
    function average(data) {
        return _.round(_.sum(data)/data.length);
    }
    return (
        <div>
            <Sparklines height={60} width={120} data={props.data}>
                <SparklinesLine color={props.colour} />
                <SparklinesReferenceLine type="mean"/>
            </Sparklines>
            <div>{average(props.data)} {props.units} </div>

        </div>
    );
}