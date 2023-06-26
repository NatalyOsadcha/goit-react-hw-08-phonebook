import { useSelector } from "react-redux";
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/authSelector';

export const useAuth = () => {
    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const IsRefreshing = useSelector(selectIsRefreshing);

    return {
        user,
        isLoggedIn,
        IsRefreshing
    }
}