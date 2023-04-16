import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux";
import { Layout } from 'antd';
import * as Patient_data_Actions from '../redux/Patient_data';
import Home_chart from '../component/Home_chart';
const { Header, Content, Footer, Sider } = Layout;


export default function () {
  const Patient_data = useSelector((state) => state.Patient_data.personal_data)
  const islogin = useSelector((state) => state.Patient_data.islogin)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const callAboutPage = async () => {
    try {
      const res = await fetch('/api/about', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      })

      const data = await res.json();

      if (res.status != 200) {
        const error = new error(res.error)
        throw error;
      }
      else {
        dispatch(Patient_data_Actions.collectdata(data));
        console.log(data);
      }
    } catch (error) {
      console.log(error)
      window.alert("Please Login First.")
      navigate('/Home')
    }
  }

  useEffect(() => {
    if (Object.keys(Patient_data).length === 0) {
      callAboutPage()
    }
  }, []);


  return (
    <div>
      <Layout
        className="site-layout"
        style={{
        }}
      >
        <Header
          h1
          style={{
            padding: 0,
            background: "#00004d",
          }}
        >
          <h1 className='ml-6 mt-4 font-bold text-white text-2xl'>{`Welcome, ${String(Patient_data.name).toUpperCase()}.`}</h1>
        </Header>

        <Content
          style={{
            margin: '24px 16px 0',
            overflow: 'initial',
          }}
        >
        </Content>
      </Layout>
      <Home_chart />

    </div>




  )
}