import {gql} from 'apollo-server-core';

// http://localhost:3000/posts?_start=0&_limit=2&_oder=desc&_sort=indexRef



export const apiFiltersTypeDefs = gql`
    input ApiFiltersInput {
        _sort: String
        _order: ApiFilterOrder
        _start: Int
        _limit: Int
    }

    enum ApiFilterOrder {
        ASC
        DESC
    }
`