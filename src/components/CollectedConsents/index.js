import React, {Fragment} from 'react'

export default ({collectedConsents}) =>
    <Fragment>
        <ul>
            {collectedConsents.map(({id, name, consent}) =>
            <li key={id}>
                <span>{name} &mdash; {consent}</span>
            </li>
            )}
        </ul>
    </Fragment>