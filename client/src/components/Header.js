import { Flex } from 'antd';
import { CommentOutlined } from '@ant-design/icons';

export default function Header() {
    return (
        <header>
            <Flex justify='space-between'>
                <h1>Roam</h1>
                <CommentOutlined />
            </Flex>
        </header>
    );
}