TypeScript React Antd Input Date Clear Demo
=======================================

演示如何通过点击clear按钮清除antd的`<Input type="date" />`组件中已选择的日期，包括处理无效日期的情况。

使用技术：
- TypeScript
- React
- Ant Design
- Parcel

功能特点：
- 使用antd的Input组件，设置`type="date"`
- 通过Clear按钮清除已选择的日期
- 可以处理无效日期（如 0003/02/31）的清除操作

运行项目
-------

```bash
pnpm install
pnpm start
```

浏览器会自动打开页面，你可以：
1. 点击日期输入框，选择或输入一个日期
2. 点击"Clear"按钮清除日期
3. 即使输入了无效日期，Clear按钮也能正常工作
