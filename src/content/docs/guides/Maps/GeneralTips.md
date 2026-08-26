---
sidebar:
  order: 100
title: General Tips
---

# General Tips

## Don't tween on the server

Playing Tweens (created from TweenService:Create()) on the server-side results in choppy animation. Always avoid this, use the Tween API instead.