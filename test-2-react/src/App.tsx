import { Route } from 'react-router'
import { BrowserRouter } from 'react-router-dom'
import { HomePage } from './pages/home-page'
import { LoginPage } from './pages/login-page'

export default function App() {
    return (
        <BrowserRouter>
            <header className="h-20 bg-primary flex items-center p-4">
                <h1 className="text-3xl text-black">Title</h1>
            </header>
            <main className="flex flex-col p-4 h-full">
                <Route exact path="/" component={HomePage} />
                <Route path="/login" component={LoginPage} />
            </main>
        </BrowserRouter>
    )
}




