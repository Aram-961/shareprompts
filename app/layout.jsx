import '@styles/globals.css'

import Nav from '@components/nav'
import Provider from '@components/Provider'

export const metadata = {
    title: 'ChatScribe',
    description: 'Discover & Share AI Prompts'
}

const RootLayout = ({ children }) => {
    return (
        <html lang='eng'>
            <body>
                <div className='main'>
                    <div className='gradient' />
                </div>
                <main className='app'>
                    <Nav />
                    {children}
                </main>
            </body>
        </html>
    )
}

export default RootLayout