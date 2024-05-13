import React from 'react';

export default function EmptyLine({line = 1}) {
    const emptyLines = [];
    for (let i = 0; i < line; i++) {
        emptyLines.push(<br/>);
    }
    return <>{emptyLines}</>;
}
