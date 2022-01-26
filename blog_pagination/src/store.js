import { configureStore } from '@reduxjs/toolkit'
import blog from './Redux/BlogSlice'

export const store = configureStore({
    reducer: {
        blog: blog
    },
})