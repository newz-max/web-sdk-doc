import{_ as o,M as a,p as c,q as i,N as t,a1 as l,R as n,t as s}from"./framework-a4e75609.js";const u={},r=l(`<h1 id="绘制线" tabindex="-1"><a class="header-anchor" href="#绘制线" aria-hidden="true">#</a> 绘制线</h1><p>传入经纬度数组生成点实例对象</p><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> layer <span class="token operator">=</span> hnsdk<span class="token punctuation">.</span><span class="token function">drawLine</span><span class="token punctuation">(</span>
  <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">,</span> <span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token number">90</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>
      <span class="token punctuation">[</span><span class="token number">35</span><span class="token punctuation">,</span> <span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">[</span><span class="token number">45</span><span class="token punctuation">,</span> <span class="token number">55</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token function">style</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> <span class="token punctuation">{</span>
        weight<span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span>
        opacity<span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
        lineCap<span class="token operator">:</span> <span class="token string">&quot;square&quot;</span><span class="token punctuation">,</span>
        lineJoin<span class="token operator">:</span> <span class="token string">&quot;round&quot;</span><span class="token punctuation">,</span>
        dashArray<span class="token operator">:</span> <span class="token string">&quot;30,30,90&quot;</span><span class="token punctuation">,</span>
        dashOffset<span class="token operator">:</span> <span class="token string">&quot;60&quot;</span><span class="token punctuation">,</span>
        fill<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        fillColor<span class="token operator">:</span> <span class="token string">&quot;pink&quot;</span><span class="token punctuation">,</span>
        fillOpacity<span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">,</span>
        fillRule<span class="token operator">:</span> <span class="token string">&quot;evenodd&quot;</span><span class="token punctuation">,</span>
        className<span class="token operator">:</span> <span class="token string">&quot;xxx&quot;</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
layer<span class="token punctuation">.</span><span class="token function">addTo</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参数" tabindex="-1"><a class="header-anchor" href="#参数" aria-hidden="true">#</a> 参数</h2><table><thead><tr><th>入参</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>latlngs</td><td>array</td><td>经纬度数组，可以有多个线</td></tr><tr><td>options</td><td>object</td><td>初始化选项</td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> options</h2><table><thead><tr><th>选项</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>style</td><td>function</td><td>一个定义线条样式的函数，需要返回一个<a href="#style">对象</a></td></tr></tbody></table><h2 id="style" tabindex="-1"><a class="header-anchor" href="#style" aria-hidden="true">#</a> style</h2>`,9),d=n("h2",{id:"方法",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#方法","aria-hidden":"true"},"#"),s(" 方法")],-1),k=n("h2",{id:"返回",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#返回","aria-hidden":"true"},"#"),s(" 返回")],-1),h=n("p",null,[n("code",null,"GeoJSON"),s(" 实例对象")],-1);function v(b,m){const e=a("GeoJsonLayerStyleTable"),p=a("LayerMethodsTable");return c(),i("div",null,[r,t(e),d,t(p),k,h])}const f=o(u,[["render",v],["__file","draw-line.html.vue"]]);export{f as default};