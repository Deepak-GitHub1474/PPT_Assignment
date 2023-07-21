import React from 'react';

// export default function Person({name, age}) {
//     return (
//         <p>My name is {name}, I'm {age} old.</p>
//     )
// }

// OR

export default function Person(props) {
    return (
        <p>My name is {props.name}, I'm {props.age} old.</p>
    )
}