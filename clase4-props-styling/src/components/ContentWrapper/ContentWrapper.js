import React from 'react'
import Footer from './Footer/Footer'
import MainContent from './MainContent/MainContent'

export default function ContentWrapper() {
    return (
        <>
            <div id="content-wrapper" class="d-flex flex-column">
                <MainContent />
                <Footer />
            </div>
        </>
    )
}
