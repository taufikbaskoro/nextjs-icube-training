import React from 'react'

export default function Layout({children}) {
    return (
        <div>
            <header>
                <h1>Bas Restaurant</h1>
            </header>
            <div className="section">
                {children}
            </div>
            <footer>
                <p>Copyright goes to Creator</p>
            </footer>
        </div>
    )
}
