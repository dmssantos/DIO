import { memo, useEffect, useState } from 'react';
import { Row, Col } from "antd";
import Api from '../api';

function Home() {
  const [news, setNews] = useState([])
  const [loading, setLoading] = useState(false)

  const handleNews = (articles) => {
    console.log("ar", articles)
  }

  useEffect(() => {
    setLoading(true)
    Promise.allSettled([
      Api.getNews('World'),
      Api.getNews('economy'),
      Api.getNews('technology')
    ])
      .then(handleNews)
  }, [])

  return (
    <div>
      <Row gutter={[16, 16]}>
        <Col span={24} md={16}>
          <h2>World</h2>
        </Col>
        <Col span={24} md={16}>
          <h2>Economy</h2>
        </Col>
      </Row>
      <hr />
      <Row gutter={[16, 16]}>
        <Col span={24} md={16}>
          <h2>Technology</h2>
        </Col>
      </Row>
    </div>
  )
}

export default memo(Home);