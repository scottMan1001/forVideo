var express = require('express');
var cheerio = require('cheerio');
var superagent = require('superagent');
var  fs = require('fs')
var sourceUrl = "https://www.manhuafen.com/comic/3609/"
var app = express();
//获取章节节点
var zjNode = "#chapter-list-1 li a";


// superagent.get(sourceUrl)
//     .end(function(err, res){
//         if (err){
//             return next(err)
//         }
//         var hrefList = []
//         var $ = cheerio.load(res.text)  
//         $(zjNode).each(function(idx,ele){
//             var $ele = $(ele)
//             hrefList.push({
//                 title: $ele.attr('title'),
//                 href: $ele.attr('href')
//             })
//         })
//         var content = hrefList.map(item=>{
//             return JSON.stringify(item)+'\n'
//         })
//         fs.writeFileSync('./list.txt',content,err=>console.log(err))
       
//     })

//获取图片方法
// function getPic(url){
    var url = "https://www.manhuafen.com/comic/3609/248016.html"
    console.log('开始++++++++++++++++++++++++')
    superagent.get(url).end(function(err,res){
        if (err) {
            return next(err)
        }
        // console.log('开始++++++++++++++++++++++++')
        let $ = cheerio.load(res.text)
        // $("#images").each(function(idx,ele){
        //     let $ele = $
        // })
        // console.log($('div.chapter-view > div.comic_wraCon.autoHeight>div>img'))
        // console.log('输出++++++++++++++++++++++++')
        $('.comic_wraCon.autoHeight>div>img').each((idx,ele)=>{
             let $ele = $(ele);
             console.log(idx,$ele.attr('src'))
        })
        // console.log($('div.chapter-view > div.comic_wraCon.autoHeight>div>img'))

    })
// }