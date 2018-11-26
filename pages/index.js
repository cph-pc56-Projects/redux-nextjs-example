import React from 'react'
import Page from '../components/page';
import { connect } from 'react-redux'

const Home = (props) => {
  console.log(props)
  const {name} = props;
  return (


    <div>

      <div>
        <h1 className='title'>Home Page</h1>
        <p className='title'>Redux name: {name}</p>
      </div>

      <style jsx>{`      
      .title {
        margin: 0;
        width: 100%;
        padding-top: 80px;
        line-height: 1.15;
        font-size: 48px;
      }
      .title,
      .description {
        text-align: center;
      }
      
    `}</style>
    </div>
  )
}

export default Page(connect(state=>state)(Home))
