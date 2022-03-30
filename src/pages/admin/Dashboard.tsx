import React from 'react'
import { Layout, Breadcrumb, Card, Col, Row, Statistic, Progress  } from 'antd';
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';
const { Countdown } = Statistic;
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Moment is also OK

function onFinish() {
  console.log('finished!');
}

function onChange(val: any) {
  if (4.95 * 1000 < val && val < 5 * 1000) {
    console.log('changed!');
  }
}

type Props = {}

const Dashboard = (props: Props) => {
  return (
    <Layout style={{ background: '#fff' }}>
    <Breadcrumb style={{ margin: '16px' }}>
    <Breadcrumb.Item>Pages</Breadcrumb.Item>
    <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
  </Breadcrumb>
  <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
    <div className="site-card-wrapper">
    <Row gutter={16}>
      <Col span={5} style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', borderRadius: 10, padding: '15px 20px', marginRight: 60}}>
      <Statistic title="Active Users" value={112893} />
      </Col>
      <Col span={5} style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', borderRadius: 10, padding: '15px 20px', marginRight: 60}}>
      <Statistic title="Account Balance (CNY)" value={112893} precision={2} />
      </Col>
      <Col span={5} style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', borderRadius: 10, padding: '15px 20px', marginRight: 60}}>
      <Statistic title="Feedback" value={1128} />
      </Col>
      <Col span={5} style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', borderRadius: 10, padding: '15px 20px'}}>
      <Statistic title="Unmerged" value={93} suffix="/ 100" />
      </Col>
    </Row>
    </div>

    <Row gutter={16}>
      <Col span={8} style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', borderRadius: 10, padding: '15px 20px', margin: '50px 100px 0 0', textAlign: 'center'}}>
      <Row>
        <Col span={12}>
        <Progress type="circle" percent={75} />
        </Col>
        <Col span={12}>
        <Progress type="circle" percent={20} status="exception"/>
        </Col>
      </Row>

      <Row style={{ marginTop: 30}}>
      <Col span={12}>
        <Card>
          <Statistic
            title="Active"
            value={11.28}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <Statistic
            title="Idle"
            value={9.3}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Card>
      </Col>
      </Row>
      </Col>

    <Col span={12} style={{boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px', borderRadius: 10, padding: '30px 30px', margin: '50px 0 0 0'}}>
    <Row gutter={16}>
    <Col span={12}>
      <Countdown title="Countdown" value={deadline} onFinish={onFinish} />
    </Col>
    <Col span={12}>
      <Countdown title="Million Seconds" value={deadline} format="HH:mm:ss:SSS" />
    </Col>
    <Col span={24} style={{ marginTop: 32 }}>
      <Countdown title="Day Level" value={deadline} format="D day H:m:s" />
    </Col>
    {/* <Col span={12}>
      <Countdown title="Countdown" value={Date.now() + 10 * 1000} onChange={onChange} />
    </Col> */}
  </Row>
      </Col>
    </Row>
  </div>
  </Layout>
  )
}

export default Dashboard