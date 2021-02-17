import React from 'react'
import CategoryTabs from './sections/CategoryTabs'
import ChatSec from './sections/ChatSec'
import SlideSection from './sections/SlideSection'
import TopDeals from './sections/TopDeals'
import WhyUs from './sections/WhyUs'

const Home = () => {
    return (
        <div>
            <SlideSection />
            <CategoryTabs />
            <WhyUs />
            <TopDeals />
            <ChatSec />
        </div>
    )
} 

export default Home
