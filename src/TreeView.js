import React from 'react' 
import { useState } from 'react'
import styles from './tree.css'

function TreeView({
    data, 
    toggled = false, 
    name = null, 
    isLast = true, 
    isChildElement = false, 
    isParentToggled = true
}) {
    const [isToggled, setIsToggled] = useState(toggled);
    const isDataArray = Array.isArray(data);

    return (
        <div
            className={styles[`tree-element ${isParentToggled && 'collapsed'} ${isChildElement && 'is-child'}`]}
        >
            <span
                className={isToggled ? 'toggler' : 'toggler closed'}
                onClick={() => setIsToggled(!isToggled)} />
            {name ? <strong>&nbsp;&nbsp;{name}: </strong> : <span>&nbsp;&nbsp;</span>}
            {isDataArray ? '[' : '{'}
            {!isToggled && '...'}
            {Object.keys(data).map((v, i, a) => typeof data[v] === 'object' ? (
                <TreeView
                    key={`${name}-${v}-${i}`}
                    data={data[v]}
                    isLast={i === a.length - 1}
                    name={isDataArray ? null : v}
                    isChildElement
                    isParentToggled={isParentToggled && isToggled} />
            ) : (
                <p
                    key={`${name}-${v}-${i}`}
                    className={isToggled ? 'tree-element' : 'tree-element collapsed'}
                >
                    {isDataArray ? '' : <strong>{v}: </strong>}
                    {data[v]}
                    {i === a.length - 1 ? '' : ','}
                </p>
            )
            )}
            {isDataArray ? ']' : '}'}
            {!isLast ? ',' : ''}
        </div>
    );
}

export default TreeView