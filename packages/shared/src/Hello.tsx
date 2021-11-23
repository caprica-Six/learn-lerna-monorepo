import React from 'react'

interface HelloProps {
    hey?: string
}

const Hello: React.FC<HelloProps> = ({ hey = "Cool" }) => {
    return (
        <h1>{ hey}</h1>
    )
    
}

export default Hello