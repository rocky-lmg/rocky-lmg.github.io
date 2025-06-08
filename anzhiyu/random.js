var posts=["2025/05/14/hello-world/","2025/04/29/我的450MT提车日记/","2025/05/14/LLM-Interview-Note/","2025/05/15/服务器-JDM模式/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };