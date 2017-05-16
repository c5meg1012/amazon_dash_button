```
$ npm init
$ npm install --save dash-button
$ sudo npm run scan
```

http://qiita.com/jsoizo/items/3b8bba4160f41aef20f4#%E3%83%9C%E3%82%BF%E3%83%B3%E3%82%BB%E3%83%83%E3%83%88%E3%82%A2%E3%83%83%E3%83%97
にしたがって、Amazon Dash Button のセットアップをします。

`$ sudo npm run scan`をしたターミナルの画面に以下が表示されます。

```
Scanning for DHCP requests and ARP probes on en0...
Detected a DHCP request or ARP probe from xx:xx:xx:xx:xx:xx
```

`xx:xx:xx:xx:xx:xx`の部分がDashボタンのフィジカルアドレスなので、メモっておきます。

```
$ cp .env.dist .env
```

.envの環境変数に、`xx:xx:xx:xx:xx:xx`を入れます。

```
$ sudo node index.js
```

あとはボタンを押せば、ターミナルの画面にテキストが表示されます。
かなり遅延/ブレがあるので、何回かチャレンジしてください。

