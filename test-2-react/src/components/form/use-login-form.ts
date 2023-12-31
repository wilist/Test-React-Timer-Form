import { useHistory } from "react-router";

export const useLoginForm = () => {
    const history = useHistory()

    return {
        onSubmit: () => {
            history.push('/');
        }
    }
}