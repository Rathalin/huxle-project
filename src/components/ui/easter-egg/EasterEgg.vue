<script setup lang="ts">
import { getCurrentInstance, onMounted, onUnmounted } from 'vue'
import EasterEggImage from '@/components/ui/easter-egg/EasterEggImage.vue'
import GroguCookie from '@/assets/images/GroguCookie.png'

const vueInstance = getCurrentInstance()

let frame = 0
let confetti = new Array(100)
  .fill(undefined)
  .map((_, i) => {
    return {
      x: Math.random() * 100,
      // y: -20 - Math.random() * 100,
      y: Math.random() * 100,
      r: 0.1 + Math.random() * 1,
      rotation: Math.round(Math.random() * 360),
    }
  })
  .sort((a, b) => a.r - b.r)

function loop() {
  frame = requestAnimationFrame(loop)
  vueInstance?.proxy?.$forceUpdate()

  confetti = confetti.map((emoji) => {
    emoji.y += 0.7 * emoji.r
    if (emoji.y > 120) emoji.y = -20
    emoji.rotation += Math.random()
    return emoji
  })
}
onMounted(() => loop())

onUnmounted(() => cancelAnimationFrame(frame))
</script>

<template>
  <EasterEggImage v-for="c of confetti" :x="c.x" :y="c.y" :r="c.r">
    <img
      :src="GroguCookie"
      alt="Blue cookie"
      :style="{ height: '4rem', rotate: `${c.rotation}deg` }"
    />
  </EasterEggImage>
</template>
