import React from 'react';
import { Provider } from 'react-redux';
import reducer from '../store/store'
import { createStore } from 'redux'
const store = createStore(reducer)

const page = (Page) => {
    return (
        class PageWrapper extends React.Component {
            render() {
                return (
                    <Provider store={store}>
                        <Page />
                    </Provider>
                )
            }
        }
    )
}

export default page;