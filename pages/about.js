import Page from '../components/page'
import { connect } from 'react-redux'

const about = (props) => {
    console.log(props);
    return (
        <div>
            <div>
                <h1 className='title'>About Page</h1>
            </div>
            <style jsx>{`
        .title {
            text-align: center;
            margin: 0;
            width: 100%;
            padding-top: 80px;
            line-height: 1.15;
            font-size: 48px;
        }
        `}</style>
        </div>
    )
}
export default Page(connect(state => state)(about));