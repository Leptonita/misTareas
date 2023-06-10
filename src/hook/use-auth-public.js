import { useMyContext } from '../application/Provider';

export const useAuthPublic = () => {
    const [state, setState] = useMyContext();

    return {
        isAuthenticated: !!state.userPublic,
    };
}