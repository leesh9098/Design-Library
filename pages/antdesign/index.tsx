import { DownloadOutlined, PoweroffOutlined, SearchOutlined } from "@ant-design/icons";
import { Breadcrumb, Button, Col, Divider, Dropdown, Layout, Menu, MenuProps, Radio, Row, Space, Tooltip } from "antd";
import { useState } from "react";
import type { SizeType } from "antd/es/config-provider/SizeContext";

const { Header, Footer, Sider, Content } = Layout;

export default function AntDesignHome() {
    const [buttonSize, setButtonSize] = useState<SizeType>('large');
    const [loading, setLoading] = useState<boolean[]>([]);

    const enterLoading = (index: number) => {
        setLoading(prevLoading => {
            const newLoading = [...prevLoading];
            newLoading[index] = true;
            return newLoading
        })

        setTimeout(() => {
            setLoading(prevLoading => {
                const newLoading = [...prevLoading];
                newLoading[index] = false;
                return newLoading;
            })
        }, 6000)
    }

    const onMenuClick: MenuProps['onClick'] = (e) => {
        console.log('click', e)
    }

    const menu = (
        <Menu
            onClick={onMenuClick}
            items={[
                {
                    key: '1',
                    label: '1st item'
                },
                {
                    key: '2',
                    label: '2nd item'
                },
                {
                    key: '3',
                    label: '3rd item'
                }
            ]}
        />
    )

    return (
        <div>
            <Divider>Button</Divider>
            <Button>Default Button</Button>
            <Button type="primary">Primary Button</Button>
            <Button type="dashed">Dashed Button</Button>
            <Button type="text">Text Button</Button>
            <Button type="link">Link Button</Button>
            <Divider>Tooltip</Divider>
            <Tooltip title="search">
                <Button type="primary" shape="circle" icon={<SearchOutlined />}></Button>
            </Tooltip>
            <Button type="primary" icon={<SearchOutlined />}>
                Search
            </Button>
            <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button icon={<SearchOutlined />}>
                Search
            </Button>
            <Tooltip title="search">
                <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
            </Tooltip>
            <Button type="dashed" icon={<SearchOutlined />}>
                Search
            </Button>
            <Button icon={<SearchOutlined />} size="large" href="https://trepick.com" />
            <Divider>Multiple Button</Divider>
            <Radio.Group value={buttonSize} onChange={e => setButtonSize(e.target.value)}>
                <Radio.Button value="large">Large</Radio.Button>
                <Radio.Button value="medium">Medium</Radio.Button>
                <Radio.Button value="small">small</Radio.Button>
            </Radio.Group>
            <Divider>Button Size</Divider>
            <Button type="primary" size={buttonSize}>
                Primary
            </Button>
            <Button size={buttonSize}>
                Default
            </Button>
            <Button type="dashed" size={buttonSize}>
                Dashed
            </Button>
            <Button type="link" size={buttonSize}>
                Link
            </Button>
            <Divider>Download Button</Divider>
            <Button type="primary" icon={<DownloadOutlined />} size={buttonSize} />
            <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={buttonSize} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />} size={buttonSize} />
            <Button type="primary" shape="round" icon={<DownloadOutlined />} size={buttonSize}>
                Download
            </Button>
            <Button type="primary" icon={<DownloadOutlined />} size={buttonSize}>
                Download
            </Button>
            <Divider>Loading Button</Divider>
            <Space style={{ width: "100%" }}>
                <Button type="primary" loading>
                    Loading
                </Button>
                <Button type="primary" size="small" loading>
                    Loading
                </Button>
                <Button type="primary" icon={<PoweroffOutlined />} loading />
            </Space>
            <Space style={{ width: "100%" }}>
                <Button type="primary" loading={loading[0]} onClick={() => enterLoading(0)}>
                    Click me!
                </Button>
                <Button type="primary" icon={<PoweroffOutlined />} loading={loading[1]} onClick={() => enterLoading(1)}>
                    Click me!
                </Button>
                <Button type="primary" icon={<PoweroffOutlined />} loading={loading[2]} onClick={() => enterLoading(2)} />
            </Space>
            <Dropdown.Button overlay={menu}>
                Dropdown →
            </Dropdown.Button>
            <Divider>Grid</Divider>
            <Row style={{ height: "50px" }}>
                <Col span={24} style={{ backgroundColor: "#55BBFF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col</Col>
            </Row>
            <Row style={{ height: "50px" }}>
                <Col span={12} style={{ backgroundColor: "#0099FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-12</Col>
                <Col span={12} style={{ backgroundColor: "#0077FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-12</Col>
            </Row>
            <Row style={{ height: "50px" }}>
                <Col span={8} style={{ backgroundColor: "#55BBFF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-8</Col>
                <Col span={8} style={{ backgroundColor: "#5599FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-8</Col>
                <Col span={8} style={{ backgroundColor: "#55BBFF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-8</Col>
            </Row>
            <Row style={{ height: "50px" }}>
                <Col span={6} style={{ backgroundColor: "#0099FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-6</Col>
                <Col span={6} style={{ backgroundColor: "#0077FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-6</Col>
                <Col span={6} style={{ backgroundColor: "#0099FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-6</Col>
                <Col span={6} style={{ backgroundColor: "#0077FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-6</Col>
            </Row>
            <Row style={{ height: "50px" }}>
                <Col span={4} style={{ backgroundColor: "#55BBFF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-4</Col>
                <Col span={4} style={{ backgroundColor: "#5599FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-4</Col>
                <Col span={4} style={{ backgroundColor: "#55BBFF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-4</Col>
                <Col span={4} style={{ backgroundColor: "#5599FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-4</Col>
                <Col span={4} style={{ backgroundColor: "#55BBFF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-4</Col>
                <Col span={4} style={{ backgroundColor: "#5599FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-4</Col>
            </Row>
            <Row style={{ height: "50px" }}>
                <Col span={2} style={{ backgroundColor: "#0099FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px"  }}>col-2</Col>
                <Col span={2} style={{ backgroundColor: "#0077FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-2</Col>
                <Col span={2} style={{ backgroundColor: "#0099FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-2</Col>
                <Col span={2} style={{ backgroundColor: "#0077FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-2</Col>
                <Col span={2} style={{ backgroundColor: "#0099FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-2</Col>
                <Col span={2} style={{ backgroundColor: "#0077FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-2</Col>
                <Col span={2} style={{ backgroundColor: "#0099FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-2</Col>
                <Col span={2} style={{ backgroundColor: "#0077FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-2</Col>
                <Col span={2} style={{ backgroundColor: "#0099FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-2</Col>
                <Col span={2} style={{ backgroundColor: "#0077FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-2</Col>
                <Col span={2} style={{ backgroundColor: "#0099FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-2</Col>
                <Col span={2} style={{ backgroundColor: "#0077FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>col-2</Col>
            </Row>
            <Divider>Grid Push/Pull</Divider>
            <Row>
                <Col span={18} style={{ backgroundColor: "#55BBFF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }} push={6}>
                    col-18
                </Col>
                <Col span={6} style={{ backgroundColor: "#5599FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }} pull={18}>
                    col-6
                </Col>
            </Row>
            <Divider>Responsive Grid</Divider>
            <Row>
                <Col span={6} xs={{ order: 1 }} sm={{ order: 2 }} md={{ order: 3 }} lg={{ order: 4 }} style={{ backgroundColor: "#55BBFF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>
                    1 col order responsive
                </Col>
                <Col span={6} xs={{ order: 2 }} sm={{ order: 1 }} md={{ order: 4 }} lg={{ order: 3 }} style={{ backgroundColor: "#5599FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>
                    2 col order responsive
                </Col>
                <Col span={6} xs={{ order: 3 }} sm={{ order: 4 }} md={{ order: 2 }} lg={{ order: 1 }} style={{ backgroundColor: "#55BBFF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>
                    3 col order responsive
                </Col>
                <Col span={6} xs={{ order: 4 }} sm={{ order: 3 }} md={{ order: 1 }} lg={{ order: 2 }} style={{ backgroundColor: "#5599FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>
                    4 col order responsive
                </Col>
            </Row>
            <Divider>Grid Flex Persentage</Divider>
            <Row>
                <Col flex={2} style={{ backgroundColor: "#55BBFF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>2 / 5</Col>
                <Col flex={3} style={{ backgroundColor: "#5599FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>3 / 5</Col>
            </Row>
            <Divider>Grid Flex Fill rest</Divider>
            <Row>
                <Col flex="100px" style={{ backgroundColor: "#55BBFF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>100px</Col>
                <Col flex="auto" style={{ backgroundColor: "#5599FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>auto</Col>
            </Row>
            <Divider>Grid Flex Raw style</Divider>
            <Row>
                <Col flex="1 1 200px" style={{ backgroundColor: "#55BBFF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>1 1 200px</Col>
                <Col flex="0 1 300px" style={{ backgroundColor: "#5599FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>0 1 300px</Col>
            </Row>
            <Row wrap={false}>
                <Col flex="none" style={{ backgroundColor: "#55BBFF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>
                    <div>none</div>
                </Col>
                <Col flex="auto" style={{ backgroundColor: "#5599FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>auto with no wrap</Col>
            </Row>
            <Divider>Responsive with dimensions</Divider>
            <Row>
                <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{ backgroundColor: "#55BBFF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>
                    col
                </Col>
                <Col xs={20} sm={16} md={12} lg={8} xl={4} style={{ backgroundColor: "#5599FF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>
                    col
                </Col>
                <Col xs={2} sm={4} md={6} lg={8} xl={10} style={{ backgroundColor: "#55BBFF", color: "#FFFFFF", textAlign: "center", lineHeight: "50px" }}>
                    col
                </Col>
            </Row>
            <Divider>Layout</Divider>
            <Layout>
                <Header>Header</Header>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
            <Divider>Layout with sider</Divider>
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Sider>Sider</Sider>
                    <Content>Content</Content>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
            <Layout>
                <Header>Header</Header>
                <Layout>
                    <Content>Content</Content>
                    <Sider>Sider</Sider>
                </Layout>
                <Footer>Footer</Footer>
            </Layout>
            <Layout>
                <Sider>Sider</Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content>Content</Content>
                    <Footer>Footer</Footer>
                </Layout>
            </Layout>
            <Layout>
                <Header>
                    <div style={{
                        float: "left",
                        width: "120px",
                        height: "31px",
                        margin: "16px 24px 16px 0",
                        background: "rgba(255, 255, 255, 0.3)"
                    }} />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        items={new Array(15).fill(null).map((_, index) => {
                            const key = index + 1
                            return {
                                key,
                                label: `nav ${key}`
                            }
                        })} />
                </Header>
                <Content style={{ padding: '0 50px' }}>
                    <Breadcrumb style={{ margin: '16px 0' }}>
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div style={{ minHeight: "280px", padding: "24px", background: "#FFF" }}>Content</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design &copy; Created by Ant UED
                </Footer>
            </Layout>
        </div>
    )
}