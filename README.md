# TS專案建置

# Steps

📑 **官方文檔：**

[使用 TypeScript · React Native 中文网](https://reactnative.cn/docs/typescript)

---

ℹ️ **相關套件版本資訊：**

1. node.js：18.14.0
2. npx：9.3.1
3. ruby：2.6.1

---

✏️ **指令：**

1. **Remove RN 的 cli package**
    - -g : 全域性的刪除這個 package
    
    ```bash
    npm uninstall -g react-native-cli
    ```
    
    <aside>
    ⚠️ **官方Note：**
    如果以上命令失敗，則可能是您的 PC 上全局安裝了舊版本的react-native或react-native-cli。 嘗試卸載 cli 並使用npx運行 cli.
    
    </aside>
    
2. **Install 專案**
    - {**proj_name**}：用要 **小駝峰式 (camelCase)** 命名
    
    ```bash
    npx react-native init {**proj_name**} --template react-native-template-typescript
    ```
    
- **補充：執行專案**
    - 要 cd 專案資料夾
    - { android/ios } ：擇一

```bash
npx react-native run-{android/ios} 
# 官方
yarn ios
# 或者
yarn react-native run-ios
```

---

**🎉 執行結果參考：**

![截圖 2023-11-02 下午4.01.16.png](TS%E5%B0%88%E6%A1%88%E5%BB%BA%E7%BD%AE%201e5400baee864974b162fdce497ba67b/%25E6%2588%25AA%25E5%259C%2596_2023-11-02_%25E4%25B8%258B%25E5%258D%25884.01.16.png)

# Error 解決參考

**Watchman相關**

**方法：**

1. 關掉目前虛擬機
2. 進入 ios / android 
    
    `cd ios / android` 
    
3. 用cocopads 執行套件
    
    `pod install`
    
4. 回專案資料夾重新執行
    
    `cd ../`
    
    `npz react-native run-ios/android`
    
    <aside>
    💡 若不行，請試試以下方法
    1. 進入虛擬手機後，回「虛擬手機」主畫面手動關掉執行中APP，再重新點開
    2. 確認沒有錯誤的引用的code/lib ，或先command掉
    
    </aside>
