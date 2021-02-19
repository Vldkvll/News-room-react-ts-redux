import {ADD_NEWS, EDIT_NEWS, LOAD_NEWS, REMOVE_NEWS} from "./newsAction";
import {Articles} from "../entities/Articles";
import {
    ADD_COMMENT,
    ADD_COMPLAIN,
    ADD_TO_FAVORITE,
    ADD_TO_READ_LETTER,
    MARK_AS_READ,
    RATE_ARTICLE
} from "./articleAction";

export const loadNews = ():NewsActionType => {
    return {
        type: LOAD_NEWS
    }
}

export const  addNews = (article: Articles):NewsActionType => {
    return {
        type: ADD_NEWS,
        article
    }
}

export const removeNews = (id: string):NewsActionType => {
    return  {
        type: REMOVE_NEWS,
        id
    }
}
export const editNews = (article: Articles):NewsActionType => {
    return  {
        type: EDIT_NEWS,
        article
    }
}

export const markAsRead = (id:string):ArticleActionType => {
    return {
        type: MARK_AS_READ,
        id
    }
}
export const addToFavorite = (id:string):ArticleActionType => {
    return {
        type: ADD_TO_FAVORITE,
        id
    }
}
export const addToReadLater = (id:string):ArticleActionType => {
    return {
        type: ADD_TO_READ_LETTER,
        id
    }
}
export const rateArticle = (id:string, rate:number):ArticleActionType => {
    return {
        type: RATE_ARTICLE,
        id,
        rate
    }
}
export const addComment = (id:string, comment:string):ArticleActionType => {
    return {
        type: ADD_COMMENT,
        id,
        comment
    }
}
export const addComplain = (id:string, complain:string):ArticleActionType => {
    return {
        type: ADD_COMPLAIN,
        id,
        complain
    }
}


export interface ActionTypeBase {
    type:string
}
export interface NewsActionType extends ActionTypeBase{
    id?: string
    article?: Articles
}
export interface ArticleActionType extends ActionTypeBase{
    id?: string
    rate?:number
    comment?:string
    complain?:string
}




