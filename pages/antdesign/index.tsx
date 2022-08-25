import { DownloadOutlined, DownOutlined, HomeOutlined, LaptopOutlined, NotificationOutlined, PoweroffOutlined, SearchOutlined, SmileOutlined, UploadOutlined, UserOutlined } from "@ant-design/icons";
import { Affix, Breadcrumb, Button, Card, Col, Divider, Dropdown, Layout, Menu, MenuProps, message, Popconfirm, Radio, Row, Space, Tooltip, Upload } from "antd";
import { useState } from "react";
import type { SizeType } from "antd/es/config-provider/SizeContext";
import React from "react";
import Link from "next/link";

const { Header, Footer, Sider, Content } = Layout;

export default function AntDesignHome() {
    const [buttonSize, setButtonSize] = useState<SizeType>('large');
    const [loading, setLoading] = useState<boolean[]>([]);
    const [visible, setVisible] = useState(false);

    const enterLoading = (index: number) => {
        setLoading(prevLoading => {
            const newLoading = [...prevLoading];
            newLoading[index] = true;
            return newLoading;
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

    const items1: MenuProps['items'] = ['1', '2', '3'].map(key => ({
        key,
        label: `nav ${key}`
    }))

    const items2: MenuProps['items'] = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
        const key = String(index + 1);

        return {
            key: `sub${key}`,
            icon: React.createElement(icon),
            label: `subnav ${key}`,

            children: new Array(4).fill(null).map((_, j) => {
                const subKey = index * 4 + j + 1;
                return {
                    key: subKey,
                    label: `option${subKey}`
                }
            })
        }
    })

    const breadcrumbDropdownMenu = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="">
                            General
                        </a>
                    )
                },
                {
                    key: '2',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="">
                            Layout
                        </a>
                    )
                },
                {
                    key: '3',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="">
                            Navigation
                        </a>
                    )
                }
            ]}
        />
    )

    const routes = [
        {
            path: 'index',
            breadcrumbName: 'home'
        },
        {
            path: 'first',
            breadcrumbName: 'first',
            children: [
                {
                    path: '/general',
                    breadcrumbName: 'General'
                },
                {
                    path: '/layout',
                    breadcrumbName: 'Layout'
                },
                {
                    path: '/navigation',
                    breadcrumbName: 'Navigation'
                }
            ]
        },
        {
            path: 'second',
            breadcrumbName: 'second'
        }
    ]

    function itemRender(route: any, params: any, routes: any, paths: any) {
        const last = routes.indexOf(route) === routes.length - 1;
        return last ? (
            <span>{route.breadcrumbName}</span>
        )
        :
        (
            <Link href={paths.join('/')}>{route.breadcrumbName}</Link>
        )
    }

    const dropdown1 = (
        <Menu
            items={[
                {
                    key: '1',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="">
                            1st menu item
                        </a>
                    )
                },
                {
                    key: '2',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="">
                            2nd menu item (disabled)
                        </a>
                    ),
                    icon: <SmileOutlined />,
                    disabled: true
                },
                {
                    key: '3',
                    label: (
                        <a target="_blank" rel="noopener noreferrer" href="">
                            3rd menu item (disabled)
                        </a>
                    ),
                    disabled: true
                },
                {
                    key: '4',
                    danger: true,
                    label: 'a danger item'
                }
            ]}
        />
    )

    const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        message.info('Click on left button');
        console.log('click left button', e);
    };

    const handleMenuClick: MenuProps['onClick'] = e => {
        message.info('Click on menu item');
        console.log('click', e);
    };

    const dropdownButtonMenu = (
        <Menu
            onClick={handleMenuClick}
            items={[
                {
                    label: '1st menu item',
                    key: '1',
                    icon: <UserOutlined />
                },
                {
                    label: '2nd menu item',
                    key: '2',
                    icon: <UserOutlined />
                },
                {
                    label: '3rd menu item',
                    key: '3',
                    icon: <UserOutlined />
                }
            ]}
        />
    )

    const handleMenuClickVisible: MenuProps['onClick'] = e => {
        if (e.key === '3') {
            setVisible(false);
        }
    }

    const handleVisibleChange = (flag: boolean) => {
        setVisible(flag)
    }

    const dropdownVisibleMenu = (
        <Menu
            onClick={handleMenuClickVisible}
            items={[
                {
                    label: 'Clicking me will not close the menu.',
                    key: '1'
                },
                {
                    label: 'Clicking me will not close the menu also.',
                    key: '2'
                },
                {
                    label: 'Clicking me will close the menu.',
                    key: '3'
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
                        })}
                    />
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
            <Layout>
                <Header>
                    <div style={{
                        float: "left",
                        width: "120px",
                        height: "31px",
                        margin: "16px 24px 16px 0",
                        background: "rgba(255, 255, 255, 0.3)"
                    }} />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: "#FFFFFF" }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: "100%", borderRight: 0 }}
                            items={items2}
                        />
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content style={{ background: '#FFFFFF', padding: 24, margin: 0, minHeight: 280 }}>
                            Content
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
            <Divider>Space</Divider>
            <Space>
                Space
                <Upload>
                    <Button>
                        <UploadOutlined />Click to Upload
                    </Button>
                </Upload>
                <Popconfirm title="Are you sure delete this task?" okText="Yes" cancelText="No">
                    <Button>Confirm</Button>
                </Popconfirm>
            </Space>
            <Divider>Card</Divider>
            <Space direction="vertical" size="middle" style={{ display: "flex" }}>
                <Card title="Card">
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card title="Card" size="small">
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
                <Card title="Card" size="small">
                    <p>Card content</p>
                    <p>Card content</p>
                </Card>
            </Space>
            <Divider>Affix</Divider>
            <Affix offsetTop={0}>
                <Button type="primary">Affix Top</Button>
            </Affix>
            <div style={{ height: "100vh", background: "#DDDDDD" }}></div>
            <Divider>Breadcrumb</Divider>
            <Breadcrumb separator=">">
                <Breadcrumb.Item href="">
                    <HomeOutlined />
                </Breadcrumb.Item>
                <Breadcrumb.Item href="">
                    <UserOutlined />
                    <span>Application List</span>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    Application
                </Breadcrumb.Item>
            </Breadcrumb>
            <Breadcrumb>
                <Breadcrumb.Item>Ant Design</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="">Component</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item overlay={breadcrumbDropdownMenu}>
                    <a href="">General</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>Button</Breadcrumb.Item>
            </Breadcrumb>
            <Breadcrumb itemRender={itemRender} routes={routes} />
            <Divider>Dropdown</Divider>
            <Dropdown overlay={dropdown1}>
                <a onClick={e => e.preventDefault()}>
                    <Space>
                        Hover me
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
            <Space direction="vertical">
                <Space wrap>
                    <Dropdown overlay={menu} placement="bottomLeft">
                        <Button>bottomLeft</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement="bottom">
                        <Button>bottom</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement="bottomRight">
                        <Button>bottomRight</Button>
                    </Dropdown>
                </Space>
                <Space wrap>
                    <Dropdown overlay={menu} placement="topLeft" arrow>
                        <Button>topLeft & arrow</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement="top" arrow>
                        <Button>top & arrow</Button>
                    </Dropdown>
                    <Dropdown overlay={menu} placement="topRight" arrow={{ pointAtCenter: true }}>
                        <Button>topRight & arrow</Button>
                    </Dropdown>
                </Space>
            </Space>
            <Dropdown overlay={menu} trigger={['click']}>
                <a onClick={e => e.preventDefault()}>
                    <Space>
                        Click me
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
            <Space wrap>
                <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
                    Dropdown
                </Dropdown.Button>
                <Dropdown.Button overlay={menu} placement="bottom" icon={<UserOutlined />}>
                    Dropdown
                </Dropdown.Button>
                <Dropdown.Button onClick={handleButtonClick} overlay={menu} disabled>
                    Dropdown
                </Dropdown.Button>
                <Dropdown.Button overlay={menu} buttonsRender={([leftButton, rightButton]) => [
                    <Tooltip title="tooltip" key="leftButton">
                        {leftButton}
                    </Tooltip>,
                    React.cloneElement(rightButton as React.ReactElement<any, string>, { loading: true })
                ]}>
                    with Tooltip
                </Dropdown.Button>
                <Dropdown overlay={dropdownButtonMenu}>
                    <Button>
                        <Space>
                            Button
                            <DownOutlined />
                        </Space>
                    </Button>
                </Dropdown>
            </Space>
            <Dropdown overlay={dropdownVisibleMenu} onVisibleChange={handleVisibleChange} visible={visible}>
                <a onClick={e => e.preventDefault()}>
                    <Space>
                        Hover me
                        <DownOutlined />
                    </Space>
                </a>
            </Dropdown>
            <Dropdown overlay={menu} trigger={['contextMenu']}>
                <div style={{ textAlign: 'center', height: 200, lineHeight: '200px' }}>
                    Right Click on here
                </div>
            </Dropdown>
        </div>
    )
}