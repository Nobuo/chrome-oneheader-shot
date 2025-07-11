# OneHeader Shot! - 1リクエスト1ヘッダー追加

![アイコン](icon128.png)

## 概要
OneHeader Shot! は、リクエストを送信する際に「1つだけ」任意のHTTPヘッダーを追加できる超シンプルなChrome拡張機能です。APIテストや一時的な認証・デバッグ用途に最適です。

## 主な機能
- 任意のヘッダー名と値を指定して保存
- 有効化・無効化の切り替えがワンクリック
- 追加するヘッダーは常に1つだけなので、設定がシンプル
- すべてのWebリクエスト（ページ遷移・APIリクエスト等）に反映

## 使い方
1. Chrome拡張をインストール
2. 拡張機能アイコンをクリック
3. 追加したいヘッダー名と値を入力し「保存」
4. 「有効化」ボタンで機能ON/OFFを切り替え
5. 有効時は全リクエストに指定ヘッダーが自動で追加されます

## インストール方法（ローカル）
1. このリポジトリをクローンまたはZIPダウンロード
2. Chromeで `chrome://extensions/` を開く
3. 「デベロッパーモード」をON
4. 「パッケージ化されていない拡張機能を読み込む」から本フォルダを選択

## アイコンについて
- `icon128.png` および `icon128.svg` は本拡張のイメージアイコンです

## ライセンス
MIT License
