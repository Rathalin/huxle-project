<script setup lang="ts">
import { getCurrentInstance, onMounted, onUnmounted, ref } from 'vue'
import EasterEggImage from '@/components/ui/easter-egg/EasterEggImage.vue'
import GroguCookie from '@/assets/images/GroguCookie.png'

const vueInstance = getCurrentInstance()
let resizeEventHandler: (this: Window, ev: UIEvent) => any = function () {}
const windowWidth = ref(0)

const initialY = -20
const minX = 5
const maxX = 95
const fadeAt = 80
const despawn = 90
const imageWidthPx = 70

let frame = 0
let confetti = new Array(100)
  .fill(null)
  .map((_, i) => {
    return {
      x: minX + Math.random() * (maxX - minX),
      y: initialY - Math.random() * 100,
      r: 0.1 + Math.random() * 1,
      rotation: Math.round(Math.random() * 360),
      rotationSpeed: -1.0 + Math.random() * 2.0,
      opacity: 1.0,
    }
  })
  .sort((a, b) => a.r - b.r)

function loop() {
  frame = requestAnimationFrame(loop)
  vueInstance?.proxy?.$forceUpdate()
  confetti = confetti.map((emoji) => {
    emoji.y += 0.7 * emoji.r
    if (emoji.y > fadeAt)
      emoji.opacity = (despawn - emoji.y) / (despawn - fadeAt)
    if (emoji.y > despawn) {
      emoji.y = initialY
      emoji.opacity = 1.0
    }
    emoji.rotation += emoji.rotationSpeed
    return emoji
  })
}
onMounted(() => {
  windowWidth.value = window.innerHeight
  console.log(window.innerHeight)
  window.addEventListener(
    'resize',
    () => (windowWidth.value = window.innerWidth)
  )
  loop()
})

onUnmounted(() => {
  cancelAnimationFrame(frame)
  window.removeEventListener('resize', resizeEventHandler)
})
</script>

<template>
  <div id="rain" class="overflow-hidden">
    <EasterEggImage
      v-for="c of confetti"
      :x="
        c.x -
        (c.x > 50 && windowWidth > 0 ? (100 * imageWidthPx) / windowWidth : 0)
      "
      :y="c.y"
      :r="c.r"
      :rotation="`${c.rotation}deg`"
      :opacity="`${c.opacity}`"
    >
      <img
        :src="GroguCookie"
        alt="Blue cookie"
        :style="{
          width: `${imageWidthPx}px`,
        }"
      />
    </EasterEggImage>
  </div>
</template>

<style scoped></style>
