
import { useContext, useEffect, useReducer } from 'react'
import { getUsersBadges } from '../api/userServices'
import { LogInContext } from '../contexts/LogInContext'
import badgeReducer from '../reducers/badgeReducer'
import { badgeActions } from "../actions/badgeActions";

const useBadges = () => {
    const initialState = {
        badges: null,
        loading: true,
        error: null
    }

    const [state, dispatch] = useReducer(badgeReducer, initialState)
    const { usersId } = useContext(LogInContext)

    useEffect(() => {
        const fetchBadges = async () => {
            try {
                const userBadges = await getUsersBadges(usersId)
                dispatch({ type: badgeActions.SET_BADGES, payload: userBadges })
            } catch (error) {
                dispatch({ type: badgeActions.SET_ERROR, payload: error })
            }
        }
        fetchBadges()
    }, [usersId])

    return {
        badges: state.badges,
        loading: state.loading
    };
}

export default useBadges