# 簡易登入系統

利用 Node.js 跟 Express建立簡單的伺服器，並搭配 Bootstrap 做出簡易的登入系統

## 本專案所使用的套件

* express
* express-handlebars
* body-parser
* cookie-parser
* nodemon

## 如何啟動本專案

### 從伺服器上取得本專案的Repository

打開終端機，輸入以下指令：
```
$ git clone　https://github.com/blue1152/login_page.git
```

### 安裝 Node.js，並透過 npm 來安裝package.json檔案所定義的相依套件

1. 在rubbish_word目錄下，透過 nvm 來安裝 Node.js最新版本(10.15.0)：
```
$ nvm install 10.15.0
```

2. 到package.json所在的目錄下，輸入：
```
$ npm install
```

### 透過 nodemon 來啟動伺服器

打開終端機，輸入以下指令，並在瀏覽器檢視伺服器的回應：
```
$ nodemon app.js
```

## 簡易登入系統的內容

* 只要輸入正確的帳號 & 密碼, 可跳轉至登入畫面
* 正確的會員資料, 直接存在main.js當中, 並未連接資料庫


