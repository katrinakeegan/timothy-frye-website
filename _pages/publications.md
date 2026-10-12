---
layout: page
permalink: /articles/
title: Articles
description: Journal articles and book chapters, most recent first. Select one or more topics to narrow the list.
nav: true
nav_order: 2
---

<div class="topic-filter" role="group" aria-label="Filter articles by topic">
  <div class="topic-filter-group">
    <button type="button" class="topic-btn active" data-clear>All</button>
  </div>
  <div class="topic-filter-group">
    {% for topic in site.data.topics.themes %}
      <button type="button" class="topic-btn" data-topic="{{ topic.id }}" aria-pressed="false">{{ topic.label }}</button>
    {% endfor %}
  </div>
  <div class="topic-filter-group">
    {% for topic in site.data.topics.regions %}
      <button type="button" class="topic-btn" data-topic="{{ topic.id }}" aria-pressed="false">{{ topic.label }}</button>
    {% endfor %}
  </div>
</div>
<p class="topic-filter-status" aria-live="polite"></p>

<div class="publications">

{% bibliography %}

</div>

<script defer src="{{ '/assets/js/topic-filter.js' | relative_url }}"></script>
