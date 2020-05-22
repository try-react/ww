
## 構成

### src/domain

ロジックや型を集約しています。

### src/useCase

[Ducks](https://github.com/erikras/ducks-modular-redux)や[Re-Ducks](https://github.com/alexnm/re-ducks)に近い構成ですが、下記の差があります。

- `reducer`を、`export default`していません。`export const`にしています。
- `action type`は、`prefix`は未使用です。(TSや利用範囲を考慮してです。)
- `initialState`を、保持しています。(初期化処理や、`State`の型を`Reducer`で使用するためです。)

GlobalStateではないことや、TSを考慮してこのような構成です。
LocalStateでは、このくらいのまとまりがよいです。
****
#### 参考

`Ducks`に寄せると下記のようになります。

```bash
actions
└ fizzBuzz.ts

reducers
└ fizzBuzz.ts

types
└ fizzBuzz.ts
```

`Re-Ducks`に寄せると下記のようになります。

```bash
fizzBuzz/
├── actions.ts
├── index.ts
├── operations.ts
├── reducers.ts
├── selectors.ts
├── tests.ts
├── types.ts
├── utils.ts
```

### src/ui

Reactの、Componentを配置しています。可能な限りstatelessです。


## テスト

<div><img src="https://github.com/try-react/ww/blob/master/doc/a.jpg?raw=true" width=300></div>

必要以上にテストをしています。何が不要か見極めるために限界まで書いています。その結果、実際の仕事でどこを優先すべきか見えてきます。  
[カバレッジ](https://codecov.io/gh/try-react/ww)はこちら。

戸愚呂・弟「カバレッジは、100%を目指す」  

<div><img src="https://github.com/try-react/ww/blob/master/doc/b.jpg?raw=true" width=200></div>
