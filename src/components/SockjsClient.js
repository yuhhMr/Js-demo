import SockJS from 'sockjs-client/dist/sockjs.min.js';
export function sockClient() {
    const sock = new SockJS("http://localhost:808O/stomp", null, { transports: ['xhr-polling'], timeout: 2000 });
    sock.onopen = function () {
        console.log('open');
        sock.send('test');
    };

    sock.onmessage = function (e) {
        console.log('message', e.data);
        sock.close();
    };

    sock.onclose = function () {
        console.log('close');
    };
}