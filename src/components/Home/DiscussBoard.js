import {Layout, Header, Content, Footer} from 'antd/lib/layout/layout';
import React from 'react';

class DiscussBoard extends React.Component {
    render() {
        return (
            <Layout>
                <Header>Header</Header>
                <Content>
                    <div>DiscussBoard</div>
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        );
    }
}