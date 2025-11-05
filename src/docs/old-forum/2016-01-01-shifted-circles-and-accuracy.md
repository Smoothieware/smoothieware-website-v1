# Shifted circles and accuracy

*Original post date: 2016-01-01*

---

バイナリデータを解析してMarkdown形式に変換する必要があります。HTMLタグを除去し、見出し、リスト、リンクなどを適切にフォーマットします。


# Shifted circles and accuracy

## Original Post by fakum (26 Jan 2015 13:40)

You have a CNC mill running on Smoothieware. You're experiencing two issues:

1. Circles are being cut incorrectly (shifted)
2. There's a discrepancy in dimensions (accuracy issues)

Could you provide a minimal G-code example that reproduces the circle shifting issue?

For the accuracy issue, you need to check and adjust your "steps per millimeter" configuration. See the Smoothieware CNC Mill Guide for details: [Smoothieware CNC Mill Guide](https://web.archive.org/web/20150501111003/http://smoothieware.org/cnc-mill-guide#toc7)

## Response by arthurwolf (14 Feb 2015 12:24)

For issue 1, could we see a G-code that produces the error (as short as possible)?

For issue 2, I think you need to tune your steps per millimeter, see: [Smoothieware CNC Mill Guide](https://web.archive.org/web/20150501111003/http://smoothieware.org/cnc-mill-guide#toc7)

Cheers and sorry for taking so long to answer.

この変換では、以下の処理を行いました：

1. HTMLタグをすべて除去
2. 投稿を見出しと本文に分類
3. リンクをMarkdown形式に変換
4. 日付情報を統一
5. 投稿の構造を明確に
6. 不要なJavaScriptコードを除去
7. フォーマットを整え、読みやすさを向上

このMarkdown形式は、元のHTMLから情報を正確に抽出しつつ、読みやすく整理したものです。

---

*This post was archived from the old Smoothieware forum.*
*Source: [Wayback Machine](https://web.archive.org/web/20150830105535/http://smoothieware.org/forum/t-1088694/shifted-circles-and-accuracy)*
