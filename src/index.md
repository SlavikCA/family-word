---
layout: layouts/base.njk
title: Home
description: Building strong Christian homes through articles and videos
---

<section class="hero">
  <div class="hero-content">
    <img src="/assets/images/family.jpg" alt="Family in faith" class="hero-image">
  </div>
</section>

<section class="container">
  <div class="section-heading">
    <h2>Recent Posts</h2>
    <a href="/articles/">Все статьи →</a>
  </div>
  
  <div class="cards-grid">
    {% set recentPosts = collections.article | reverse | take(3) %}
    {% for post in recentPosts %}
    <article class="card">
      {% if post.data.image  %}
      <div class="card-image">
        <img src="{{ post.data.image }}" alt="{{ post.data.title }}" loading="lazy">
      </div>
      {% endif %}
      <div class="card-content">
        <p class="card-meta">{{ post.data.category }} · {{ post.date | date('MMMM D, YYYY') }}</p>
        <h3 class="card-title"><a href="{{ post.url }}">{{ post.data.title }}</a></h3>
        <p class="card-excerpt">{{ post.data.excerpt }}</p>
        <a href="{{ post.url }}" class="read-more">Читать →</a>
      </div>
    </article>
    {% endfor %}
  </div>
</section>

<section class="container">
  <div class="section-heading">
    <h2>Recent Videos</h2>
    <a href="/videos/">Все видео →</a>
  </div>
  
  <div class="cards-grid">
    {% set recentVideos = collections.video | reverse | take(3) %}
    {% for video in recentVideos %}
    <article class="card">
      <div class="card-image">
        <img src="{{ video.data.image | default('/assets/images/video-placeholder.svg') }}" alt="{{ video.data.title }}" loading="lazy">
      </div>
      <div class="card-content">
        <p class="card-meta">{{ video.data.category }} · {{ video.data.duration }}</p>
        <h3 class="card-title"><a href="{{ video.url }}">{{ video.data.title }}</a></h3>
        <p class="card-excerpt">{{ video.data.excerpt }}</p>
        <a href="{{ video.url }}" class="read-more">Смотреть →</a>
      </div>
    </article>
    {% endfor %}
  </div>
</section>
