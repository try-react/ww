## アウトプット

[![Netlify Status](https://api.netlify.com/api/v1/badges/6b27c592-08c9-4110-9f87-6b564787be0e/deploy-status)](https://app.netlify.com/sites/stoic-elion-b2fdb6/deploys)
- https://stoic-elion-b2fdb6.netlify.app/

[![codecov](https://codecov.io/gh/try-react/ww/branch/master/graph/badge.svg)](https://codecov.io/gh/try-react/ww)
- https://codecov.io/gh/try-react/ww

## テスト

<div><img src="https://github.com/try-react/ww/blob/master/doc/a.jpg?raw=true" width=500></div>

カバレッジは、コスパ無視で100%を目指す
<div><img src="https://github.com/try-react/ww/blob/master/doc/b.jpg?raw=true" width=300></div>

## 構成

### src/useCase

[Ducks](https://github.com/erikras/ducks-modular-redux)や[Re-Ducks](https://github.com/alexnm/re-ducks)に近い構成ですが、下記の差があります。

### 概要

- `reducer`を、`export default`していません。通常の`export`にしています。
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
