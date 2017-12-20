# egg-one

> 基于eggjs和one的API实现，仅用于学习交流,主要是为了学习应用eggjs提供api以及eggjs的目录结构实践,对比直接请求one来说,会更加简练一些;

## 音乐列表

```
  请求音乐列表首页,每页返回10条数据
  http://localhost:7001/api/v1/music/0

  {
    "res": 0,
    "data": [
      {
        "id": "13077",
        "category": "4",
        "display_category": "1",
        "item_id": "2361",
        "title": "这个世界未必所有事都如你所愿，但总有它的意思",
        "forward": "上路去，别太挂念这里。",
        ...
      }
      ...
    ]
  }

  分页加载更多
  此处的id是上面请求出的列表的最后一条的id
  http://localhost:7001/api/v1/music/{id}
```
## 音乐详情

```
  http://localhost:7001/api/v1/music/detail/{item_id}

  {
    "res": 0,
    "data": {
      "id": "2361",
      "title": "替你高兴",
      "cover": "http://image.wufazhuce.com/Fl8W6nY1iRdNizZ9yNyFQ_pjMJC7",
      "isfirst": "0",
      "story_title": "上路去，别太念挂这里",
        ...
      }
      ...
    ]
  }
  
```



## channel 频道

>「ONE · 一个」中有 6 种 channel 类型，分别是

- hp : 图文
- reading : 阅读
- music : 音乐
- movie : 影视
- radio : 电台
- author : 作者/音乐人