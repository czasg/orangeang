const readline = require('readline');
const fs = require('fs');
const path = require('path');

function newBlogTmpl({title}) {
    return `
---
title: ${title}
authors: [czasg]
tags: [撰写中,待分类]
slug: ${title}
---

import AutoImage from '@site/src/components/FullScreenImage';

<!--package-->

摘要在此处

<!--truncate-->

正文在此处

<br/>

:::info 👇👇👇
**本文作者:** 橙子昂    
**版权声明:** 转载请注明出处哦~👮‍
:::
`.trim()
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// 提示用户输入博客名
rl.question('请输入博客名: ', (blogName) => {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const blogPath = `./blog/${year}/${month}-${day}-${blogName}`;

    // 创建目录
    fs.mkdir(blogPath, {recursive: true}, (err) => {
        if (err) {
            console.error('创建目录失败:', err);
            rl.close();
            return;
        }

        // 创建 index.md 文件
        const indexPath = path.join(blogPath, 'index.mdx');
        fs.writeFile(indexPath, newBlogTmpl({title: blogName}), (err) => {
            if (err) {
                console.error('创建文件失败:', err);
                rl.close();
                return;
            }
            console.log(`博客目录和文件创建成功: ${blogPath}`);
            rl.close();
        });
    });
});
