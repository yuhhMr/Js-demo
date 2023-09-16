import { Client } from '@stomp/stompjs';

export function client() {
    const client = new Client({
        brokerURL: 'ws://localhost:8080/stomp',
        onConnect: () => {
            console.log("连接成功！！")
            client.subscribe('/app/topic/test01', message =>
                console.log(`Received: ${message.body}`)
            );
            client.publish({ destination: '/app/topic/test01', body: '你好，服务端!--来自JS' });
        },
        onStompError: (err) => {
            console.error(err.headers['message'])
        }
    });
    client.activate();
}