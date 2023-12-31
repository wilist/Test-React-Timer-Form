import { Route, Switch } from "react-router"
import { useLoginForm } from "../components/form/use-login-form"
import { LoginForm } from "../components/form/login-form"

export function LoginPage() {
    const {onSubmit} = useLoginForm()

    return (
        <Switch>
            <LoginForm onSubmit={onSubmit} />
            <Route>Not implemented</Route>
        </Switch>
    )
}