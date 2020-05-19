 ## 構成

[Ducks](https://github.com/erikras/ducks-modular-redux)や[Re-Ducks](https://github.com/alexnm/re-ducks)**風**の構成ですが、下記の差があります。

### 概要

- `reducer`を、`export default`していません。
- `action type`は、`prefix`は未使用です。(TSや利用範囲を考慮してです。)
- `initState`を、保持しています。(初期化処理や、`State`の型を`Reducer`で使用するためです。)

### 詳細

GlobalStateではないことや、TSを考慮してこのような構成です。
LocalStateでは、このくらいのまとまりがよいです。

### 参考

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
