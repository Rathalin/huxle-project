<script setup lang="ts">
import { getCurrentInstance, onMounted, onUnmounted, ref } from 'vue'
import EasterEggImage from '@/components/ui/easter-egg/EasterEggImage.vue'
import GroguCookie from '@/assets/images/GroguCookie.png'

const vueInstance = getCurrentInstance()
let resizeEventHandler: (this: Window, ev: UIEvent) => any = function () {}
const windowWidth = ref(0)

const imageCount = 100
const initialY = -20
const minX = 5
const maxX = 95
const fadeAt = 80
const despawn = 90
const imageWidthPx = 70

let frame = 0
let originalRain = new Array(imageCount).fill(null).map((_) => {
  return {
    x: minX + Math.random() * (maxX - minX),
    y: initialY - Math.random() * 100,
    scale: 0.1 + Math.random() * 1,
    rotation: Math.round(Math.random() * 360),
    rotationSpeed: -1.0 + Math.random() * 2.0,
    opacity: 1.0,
  }
})

let currentRain: typeof originalRain = []

function loop() {
  frame = requestAnimationFrame(loop)
  vueInstance?.proxy?.$forceUpdate()
  originalRain = originalRain.map((drop) => {
    drop.y += 0.7 * drop.scale
    if (drop.y > fadeAt) drop.opacity = (despawn - drop.y) / (despawn - fadeAt)
    if (drop.y > despawn) {
      drop.y = initialY
      drop.opacity = 1.0
    }
    drop.rotation += drop.rotationSpeed
    return drop
  })
}

function handleWindowWidth() {
  currentRain = originalRain
    .slice(0, Math.round(imageCount * (window.innerWidth / 1920)))
    .sort((a, b) => a.scale - b.scale)
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  handleWindowWidth()
  window.addEventListener('resize', () => handleWindowWidth())
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
      v-for="imageData of currentRain"
      :x="
        imageData.x -
        (imageData.x > 50 ? (100 * imageWidthPx) / windowWidth : 0)
      "
      :y="imageData.y"
      :scale="imageData.scale"
      :rotation="`${imageData.rotation}deg`"
      :opacity="`${imageData.opacity}`"
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
