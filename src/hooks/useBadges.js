
import { useContext, useEffect, useReducer } from 'react'
import { getUsersBadges } from '../api/userServices'
import { LogInContext } from '../contexts/LogInContext'

const initialState = {
    badges: null,
    loading: true,
    error: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_BADGES':
            return {
                ...state,
                badges: action.payload,
                loading: false,
                error: null
            }
        case 'SET_ERROR':
            return {
                ...state,
                badges: null,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

const useBadges = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const { usersId } = useContext(LogInContext)

    useEffect(() => {
        const fetchBadges = async () => {
            try {
                const userBadges = await getUsersBadges(usersId)
                dispatch({ type: 'SET_BADGES', payload: userBadges })
            } catch (error) {
                dispatch({ type: 'SET_ERROR', payload: error })
            }
        }

        fetchBadges()
    }, [usersId])

    return state
}

export default useBadges